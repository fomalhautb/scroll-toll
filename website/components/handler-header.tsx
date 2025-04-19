"use client";

import { UserButton, useUser } from "@stackframe/stack";
import { useTheme } from "next-themes";
import { Logo } from "./logo";

export default function HandlerHeader() {
  const user = useUser();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header
        className="fixed w-full z-50 p-4 h-14 flex items-center py-4 border-b justify-between bg-background"
        data-oid="rg9m-lt"
      >
        <Logo link={user ? "/dashboard" : "/"} data-oid="a_v3c1u" />

        <div className="flex items-center justify-end gap-5" data-oid="h7ad9jg">
          <UserButton
            colorModeToggle={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            data-oid="6h77rx_"
          />
        </div>
      </header>
      <div className="min-h-14" data-oid="mi.xghl" />{" "}
      {/* Placeholder for fixed header */}
    </>
  );
}
