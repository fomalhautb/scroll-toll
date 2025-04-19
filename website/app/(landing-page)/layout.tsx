import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col" data-oid="-pies5x">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Features", href: "/#features" },
          { title: "How It Works", href: "/#how-it-works" },
          { title: "Pricing", href: "/#pricing" },
        ]}
        data-oid="r_cdwmb"
      />

      <main className="flex-1" data-oid="cy0s6gz">
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
