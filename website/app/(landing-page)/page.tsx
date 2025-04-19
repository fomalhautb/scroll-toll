import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Philosophy } from "@/components/philosophy";
import { Heart, Leaf, Sparkles, Sun } from "lucide-react";

export default function IndexPage() {
  return (
    <>
      <Hero
        capsuleText="Digital Minimalism"
        capsuleLink="/#philosophy"
        title="Pay to Procrastinate"
        subtitle="A mindful approach to your online experience. Our extension helps you create a digital space that brings peace and purpose to your daily life."
        primaryCtaText="Begin Your Journey"
        primaryCtaLink="/dashboard"
        secondaryCtaText="Learn Our Philosophy"
        secondaryCtaLink="/#philosophy"
        credits={<>Inspired by Marie Kondo's philosophy of mindful living</>}
        data-oid="akjx9ja"
      />

      <div id="features" data-oid="z24_ku7" />
      <FeatureGrid
        title="Features"
        subtitle="Thoughtful tools for a more intentional digital experience"
        items={[
          {
            icon: (
              <Sparkles className="h-12 w-12 text-primary" data-oid="0.7ypc3" />
            ),

            title: "Joy Check",
            description:
              "Pause before visiting distracting sites and ask: 'Does this spark joy or serve a purpose?'",
          },
          {
            icon: <Sun className="h-12 w-12 text-primary" data-oid="1ao2feu" />,
            title: "Mindful Moments",
            description:
              "Gentle reminders to take a breath and consider if this is how you want to spend your time",
          },
          {
            icon: (
              <Leaf className="h-12 w-12 text-primary" data-oid="tzm46hu" />
            ),

            title: "Digital Decluttering",
            description:
              "Tools to help you organize your digital space and remove what no longer serves you",
          },
          {
            icon: (
              <Heart className="h-12 w-12 text-primary" data-oid="72jsc1." />
            ),

            title: "Gratitude Practice",
            description:
              "End each session with a moment to reflect on what you're grateful for today",
          },
        ]}
        data-oid="kj4u.s8"
      />

      <Philosophy data-oid="x2pdtaa" />

      <HowItWorks data-oid="z4rqk2r" />
    </>
  );
}
