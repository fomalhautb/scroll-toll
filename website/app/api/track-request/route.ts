import { NextResponse } from "next/server";
import { stackServerApp } from "../../../stack";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});

// Store timers and request counts in memory (in production, use a proper database)
interface UserState {
  timer: NodeJS.Timeout;
  requestCount: number;
  url: string;
}

const userStates = new Map<string, UserState>();

async function checkValidPaymentMethod(email: string): Promise<boolean> {
  try {
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (customers.data.length === 0) {
      return false;
    }

    const customer = customers.data[0];
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customer.id,
      type: 'card',
    });

    return paymentMethods.data.length > 0;
  } catch (error) {
    console.error("Error checking payment methods:", error);
    return false;
  }
}

async function chargeUser(userId: string, email: string, requestCount: number, url: string) {
  try {
    // Find the Stripe customer
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (customers.data.length === 0) {
      console.error("No Stripe customer found for user:", userId);
      return;
    }

    const customer = customers.data[0];
    
    // Get the default payment method
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customer.id,
      type: 'card',
    });

    if (paymentMethods.data.length === 0) {
      console.error("No payment method found for customer:", customer.id);
      return;
    }

    const defaultPaymentMethod = paymentMethods.data[0];
    
    // Calculate amount based on requests, minimum $0.50
    const amountPerRequest = 4; // $0.04 in cents
    const calculatedAmount = requestCount * amountPerRequest;
    const amount = Math.max(calculatedAmount, 50); // Minimum $0.50 (50 cents)

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      customer: customer.id,
      payment_method: defaultPaymentMethod.id,
      off_session: true,
      confirm: true,
      metadata: {
        userId,
        url,
        requestCount,
        originalAmount: calculatedAmount,
        adjustedAmount: amount
      },
    });

    console.log(`Charged user ${userId} $${amount/100} for ${requestCount} requests (minimum charge applied)`);
  } catch (error) {
    console.error("Error charging user:", error);
  }
}

export async function POST(req: Request) {
  try {
    const user = await stackServerApp.getUser();
    if (!user?.primaryEmail) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { url } = await req.json();
    if (!url) {
      return new NextResponse("URL is required", { status: 400 });
    }

    const allowedDomains = ['facebook.com', 'x.com', 'instagram.com'];
    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    
    if (!allowedDomains.includes(domain)) {
      return NextResponse.json({ 
        success: true,
        message: "Request not tracked - domain not supported",
        currentRequestCount: 0,
        minimumCharge: 0,
        currentCharge: 0
      });
    }

    // Check for valid payment method
    const hasValidPaymentMethod = await checkValidPaymentMethod(user.primaryEmail);
    if (!hasValidPaymentMethod) {
      return NextResponse.json({ 
        success: false,
        message: "No valid payment method found. Please add a payment method to continue."
      }, { status: 402 }); // 402 Payment Required
    }

    const userId = user.id;
    
    // Clear existing timer if it exists
    if (userStates.has(userId)) {
      clearTimeout(userStates.get(userId)!.timer);
    }

    // Get current request count or initialize to 1
    const currentState = userStates.get(userId);
    const requestCount = currentState ? currentState.requestCount + 1 : 1;

    // Set new timer for 10 seconds
    const timer = setTimeout(() => {
      const state = userStates.get(userId);
      if (state) {
        chargeUser(userId, user.primaryEmail!, state.requestCount, state.url);
        userStates.delete(userId);
      }
    }, 10000);

    // Store the timer and request count
    userStates.set(userId, {
      timer,
      requestCount,
      url
    });

    return NextResponse.json({ 
      success: true,
      message: "Request tracked successfully",
      currentRequestCount: requestCount,
      minimumCharge: 0.50,
      currentCharge: Math.max(requestCount * 0.04, 0.50)
    });
  } catch (error) {
    console.error("Error tracking request:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
} 