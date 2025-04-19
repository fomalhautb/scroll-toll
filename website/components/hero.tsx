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
    <section className="space-y-6 py-32 md:py-48 lg:py-52" data-oid="4g86:w:">
      <div
        className="container flex max-w-[64rem] flex-col items-center gap-4 text-center"
        data-oid="9hab_:p"
      >
        <Link
          href={props.capsuleLink}
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
          data-oid="m559iku"
        >
          {props.capsuleText}
        </Link>
        <h1
          className="font-heading text-3xl sm:text-5xl lg:text-7xl"
          data-oid="07isnk-"
        >
          {props.title}
        </h1>
        <p
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          data-oid="rr2mlz6"
        >
          {props.subtitle}
        </p>
        <div className="flex gap-4 flex-wrap justify-center" data-oid="3.u2kmw">
          <Link
            href={props.primaryCtaLink}
            className={cn(buttonVariants({ size: "lg" }))}
            data-oid=":5m-.th"
          >
            {props.primaryCtaText}
          </Link>

          <Link
            href={props.secondaryCtaLink}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            data-oid=".swq_yb"
          >
            {props.secondaryCtaText}
          </Link>
        </div>

        {props.credits && (
          <p className="text-sm text-muted-foreground mt-4" data-oid="js96.lg">
            {props.credits}
          </p>
        )}
      </div>
    </section>
  );
}
