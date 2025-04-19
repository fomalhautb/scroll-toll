import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { PricingGrid } from "@/components/pricing";
import { Clock, DollarSign, Shield, Zap } from "lucide-react";

export default function IndexPage() {
  return (
    <>
      <Hero
        capsuleText="Break Free from Doom Scrolling"
        capsuleLink="/#features"
        title="Scroll Toll: Pay to Procrastinate"
        subtitle="A Chrome extension that charges you money when you visit distracting websites. Take control of your online habits and boost your productivity."
        primaryCtaText="Install Extension"
        primaryCtaLink="https://chrome.google.com/webstore"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/#how-it-works"
        credits={<>Reclaim your time and focus with Scroll Toll</>}
        data-oid=":3-dnbd"
      />

      <div id="features" data-oid="uf7b.ar" />
      <FeatureGrid
        title="Features"
        subtitle="Why Scroll Toll is the ultimate productivity tool"
        items={[
          {
            icon: <DollarSign className="h-12 w-12" data-oid="mlotb_5" />,
            title: "Financial Incentive",
            description:
              "Create a real cost for procrastination that helps you break bad habits",
          },
          {
            icon: <Zap className="h-12 w-12" data-oid="ua6-_fh" />,
            title: "Instant Feedback",
            description:
              "Get immediate notifications when you're about to waste time",
          },
          {
            icon: <Shield className="h-12 w-12" data-oid=".7c6qy2" />,
            title: "Customizable Blocklist",
            description:
              "Choose which sites to block and set different fees for each one",
          },
          {
            icon: <Clock className="h-12 w-12" data-oid="qb2u:.2" />,
            title: "Time Tracking",
            description:
              "See how much time and money you've saved by avoiding distractions",
          },
        ]}
        data-oid="thfjdro"
      />

      <HowItWorks data-oid="_zwlww8" />

      <div id="pricing" data-oid="qj9k99c" />
      <PricingGrid
        title="Pricing"
        subtitle="Simple, transparent pricing to help you stay focused"
        items={[
          {
            title: "Basic",
            price: "Free",
            description: "Get started with the essentials",
            features: [
              "Block up to 3 websites",
              "Set custom toll amounts",
              "Basic usage statistics",
              "Chrome extension",
            ],

            buttonText: "Install Free",
            buttonHref: "https://chrome.google.com/webstore",
          },
          {
            title: "Premium",
            price: "$4.99",
            description: "For serious productivity enthusiasts",
            features: [
              "Unlimited website blocking",
              "Advanced usage analytics",
              "Schedule-based blocking",
              "Custom donation options",
              "Priority support",
            ],

            buttonText: "Get Premium",
            isPopular: true,
            buttonHref: "https://chrome.google.com/webstore",
          },
          {
            title: "Team",
            price: "$9.99",
            description: "Perfect for small teams and families",
            features: [
              "All Premium features",
              "Up to 5 user accounts",
              "Team productivity dashboard",
              "Group challenges",
              "Admin controls",
            ],

            buttonText: "Start Team Plan",
            buttonHref: "https://chrome.google.com/webstore",
          },
        ]}
        data-oid="t_kn_n1"
      />
    </>
  );
}
