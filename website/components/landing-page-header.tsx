"use client";

import { cn } from "@/lib/utils";
import { useStackApp, useUser } from "@stackframe/stack";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";
import { ColorModeSwitcher } from "./color-mode-switcher";
import { Logo } from "./logo";
import { Button, buttonVariants } from "./ui/button";

interface NavProps {
  items?: {
    title: string;
    href: string;
    disabled?: boolean;
    external?: boolean;
  }[];
}

function SignInSignUpButtons() {
  const app = useStackApp();
  return (
    <>
      <Link
        href={app.urls.signIn}
        className={buttonVariants({ variant: "secondary" })}
        data-oid="-at4pem"
      >
        Sign In
      </Link>

      <Link
        href={app.urls.signUp}
        className={buttonVariants({ variant: "default" })}
        data-oid="3e0:d4w"
      >
        Sign Up
      </Link>
    </>
  );
}

function AuthButtonsInner() {
  const user = useUser();

  if (user) {
    return (
      <Link
        href="/dashboard"
        className={buttonVariants({ variant: "default" })}
        data-oid=":.e3k1-"
      >
        Dashboard
      </Link>
    );
  } else {
    return <SignInSignUpButtons data-oid=":_c0:zg" />;
  }
}

function AuthButtons() {
  return (
    <React.Suspense
      fallback={<SignInSignUpButtons data-oid="u66c7an" />}
      data-oid="gvqwr4_"
    >
      <AuthButtonsInner data-oid="vs1e48i" />
    </React.Suspense>
  );
}

function MobileItems(props: NavProps) {
  return (
    <div
      className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 animate-in slide-in-from-bottom-80 md:hidden"
      data-oid="n15w6xk"
    >
      <div
        className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md"
        data-oid="xd.yl.b"
      >
        <nav
          className="grid grid-flow-row auto-rows-max text-sm"
          data-oid="qhs-vu6"
        >
          {props.items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60",
              )}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              data-oid="jjca::m"
            >
              {item.title}
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-4" data-oid="v:a4rm5">
            <AuthButtons data-oid="oh:3ovj" />
          </div>
        </nav>
      </div>
    </div>
  );
}

function DesktopItems(props: NavProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="hidden gap-6 md:flex" data-oid="lzl797m">
      {props.items?.map((item, index) => (
        <Link
          key={index}
          href={item.disabled ? "#" : item.href}
          className={cn(
            "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
            item.href.startsWith(`/${segment}`)
              ? "text-foreground"
              : "text-foreground/60",
            item.disabled && "cursor-not-allowed opacity-80",
          )}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noreferrer" : undefined}
          data-oid="_wqpqbf"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export function LandingPageHeader(props: NavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <header
      className="fixed w-full z-50 bg-background/80 px-4 md:px-8 backdrop-blur"
      data-oid="ft.m5nc"
    >
      <div
        className="flex h-18 items-center justify-between py-4"
        data-oid="t.sy.yb"
      >
        <div className="flex items-center gap-4 md:gap-10" data-oid="paxavcf">
          <Logo className="hidden md:flex" data-oid="wip6j3_" />

          {props.items?.length ? (
            <DesktopItems items={props.items} data-oid="_q2i930" />
          ) : null}

          <Button
            className="space-x-2 md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            data-oid="tb4asgv"
          >
            {showMobileMenu ? (
              <X className="h-6 w-6" data-oid="m5yyytw" />
            ) : (
              <Menu className="h-6 w-6" data-oid="s8g2_pd" />
            )}
          </Button>

          <Logo className="md:hidden" data-oid="0arc.hw" />

          {showMobileMenu && props.items && (
            <MobileItems items={props.items} data-oid="v.k3knz" />
          )}
        </div>

        <div className="flex gap-4 items-center" data-oid="eknst6p">
          <ColorModeSwitcher data-oid="1jgm.tl" />
          <nav className="gap-4 items-center hidden md:flex" data-oid="3bs9w-4">
            <AuthButtons data-oid="qrvpztu" />
          </nav>
        </div>
      </div>
    </header>
  );
}
