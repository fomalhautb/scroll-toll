import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stackServerApp } from "../../../../stack";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});

export async function POST() {
  try {
    const user = await stackServerApp.getUser();
    if (!user?.primaryEmail) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Find or create a Stripe customer
    const customers = await stripe.customers.list({
      email: user.primaryEmail,
      limit: 1,
    });

    let customer;
    if (customers.data.length > 0) {
      customer = customers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: user.primaryEmail,
      });
    }

    // Create a portal session with proper URL scheme
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const returnUrl = new URL('/dashboard', baseUrl).toString();

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: returnUrl,
    });

    return NextResponse.json({ url: portalSession.url });
  } catch (error) {
    console.error("Error creating portal session:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
} 