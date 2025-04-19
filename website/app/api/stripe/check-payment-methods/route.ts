import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stackServerApp } from "../../../../stack";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});

export async function GET() {
  try {
    const user = await stackServerApp.getUser();
    if (!user?.primaryEmail) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Find the Stripe customer
    const customers = await stripe.customers.list({
      email: user.primaryEmail,
      limit: 1,
    });

    if (customers.data.length === 0) {
      return NextResponse.json({ 
        hasValidPaymentMethod: false,
        message: "No Stripe customer found"
      });
    }

    const customer = customers.data[0];

    // List all payment methods for the customer
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customer.id,
      type: 'card',
    });

    // Check if there's at least one valid payment method
    const hasValidPaymentMethod = paymentMethods.data.length > 0;

    return NextResponse.json({ 
      hasValidPaymentMethod,
      message: hasValidPaymentMethod ? "Valid payment method found" : "No valid payment methods found"
    });
  } catch (error) {
    console.error("Error checking payment methods:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
} 