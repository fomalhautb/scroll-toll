"use client";

import { ThemeProvider } from "next-themes";

export function Provider(props: { children?: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" data-oid="t8pj_:5">
      {props.children}
    </ThemeProvider>
  );
}
