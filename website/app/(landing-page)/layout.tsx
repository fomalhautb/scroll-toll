import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div
      className="flex min-h-screen flex-col bg-[url('/images/subtle-pattern.png')] bg-repeat"
      data-oid="-pies5x"
    >
      {/* Decorative elements */}
      <div
        className="fixed -top-40 -right-40 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
        data-oid="ga-4b9v"
      ></div>
      <div
        className="fixed -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
        data-oid="wky-hvr"
      ></div>

      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Features", href: "/#features" },
          { title: "Philosophy", href: "/#philosophy" },
          { title: "How It Works", href: "/#how-it-works" },
        ]}
        data-oid="r_cdwmb"
      />

      <main className="flex-1 relative z-10" data-oid="cy0s6gz">
        {props.children}
      </main>
      <Footer
        builtBy="Scroll Toll Team"
        builtByLink="/"
        githubLink="https://github.com/scroll-toll"
        twitterLink="https://twitter.com/scrolltoll"
        linkedinLink="https://linkedin.com/company/scroll-toll"
        data-oid="908goql"
      />
    </div>
  );
}
