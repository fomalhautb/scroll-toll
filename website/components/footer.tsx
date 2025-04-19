import { buttonVariants } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export function Footer(props: {
  builtBy: string;
  builtByLink: string;
  githubLink: string;
  twitterLink: string;
  linkedinLink: string;
}) {
  return (
    <footer className="border-t" data-oid="i4bkbat">
      <div
        className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0"
        data-oid="82x3x8l"
      >
        <div
          className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
          data-oid=".hn4:u_"
        >
          <p
            className="text-center text-sm leading-loose text-muted-foreground md:text-left"
            data-oid="rzerks."
          >
            Built by{" "}
            <a
              href={props.builtByLink}
              className="font-medium underline underline-offset-4"
              data-oid="ox3um.f"
            >
              {props.builtBy}
            </a>
            . © {new Date().getFullYear()} Scroll Toll. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-1" data-oid="1.tt4iz">
          {(
            [
              { href: props.twitterLink, icon: TwitterLogoIcon },
              { href: props.linkedinLink, icon: LinkedInLogoIcon },
              { href: props.githubLink, icon: GitHubLogoIcon },
            ] as const
          ).map((link, index) => (
            <Link
              href={link.href}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              key={index}
              target="_blank"
              rel="noreferrer"
              data-oid="s3xx:1k"
            >
              <link.icon className="h-6 w-6" data-oid="1e7z1p8" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
