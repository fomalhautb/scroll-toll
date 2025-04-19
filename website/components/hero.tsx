import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero(props: {
  capsuleText: string;
  capsuleLink: string;
  title: string;
  subtitle: string;
  credits?: React.ReactNode;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}) {
  return (
    <section
      className="relative overflow-hidden py-32 md:py-48 lg:py-52"
      data-oid="4g86:w:"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-1/2 left-0 w-72 h-72 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50"
        data-oid="lfwcrw6"
      ></div>
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30"
        data-oid="h-4vevv"
      ></div>

      <div
        className="container relative z-10 flex max-w-[64rem] flex-col items-center gap-6 text-center"
        data-oid="9hab_:p"
      >
        <Link
          href={props.capsuleLink}
          className="rounded-full bg-secondary px-6 py-2 text-sm font-medium text-primary"
          data-oid="m559iku"
        >
          {props.capsuleText}
        </Link>
        <h1
          className="font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight"
          data-oid="07isnk-"
        >
          {props.title}
        </h1>
        <p
          className="max-w-[42rem] leading-relaxed text-muted-foreground sm:text-xl sm:leading-8"
          data-oid="rr2mlz6"
        >
          {props.subtitle}
        </p>
        <div
          className="flex gap-4 flex-wrap justify-center mt-4"
          data-oid="3.u2kmw"
        >
          <Link
            href={props.primaryCtaLink}
            className={cn(
              buttonVariants({ size: "lg", className: "rounded-full px-8" }),
            )}
            target="_blank"
            rel="noreferrer"
            data-oid=":5m-.th"
          >
            {props.primaryCtaText}
          </Link>

          <Link
            href={props.secondaryCtaLink}
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded-full px-8",
              }),
            )}
            data-oid=".swq_yb"
          >
            {props.secondaryCtaText}
          </Link>
        </div>

        {props.credits && (
          <p className="text-sm text-muted-foreground mt-6" data-oid="js96.lg">
            {props.credits}
          </p>
        )}

        {/* Decorative icon */}
        <div className="mt-12 relative" data-oid=":20icfc">
          <div
            className="absolute -top-6 -left-6 w-12 h-12 border-2 border-primary rounded-full"
            data-oid="0hr144:"
          ></div>
          <div
            className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-accent rounded-full"
            data-oid="zael40u"
          ></div>
          <div
            className="h-24 w-24 rounded-full bg-card shadow-md flex items-center justify-center border border-border"
            data-oid="qhlm2ew"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              data-oid="v3-nyaj"
            >
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                data-oid="zrvojdf"
              />

              <path d="M8 14s1.5 2 4 2 4-2 4-2" data-oid="mooe_1l" />
              <line x1="9" y1="9" x2="9.01" y2="9" data-oid="3x4uikf" />
              <line x1="15" y1="9" x2="15.01" y2="9" data-oid="wisesx:" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
