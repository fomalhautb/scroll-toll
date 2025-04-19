import { StackProvider, StackTheme } from "@stackframe/stack";
import type { Metadata } from "next";
import { stackServerApp } from "../stack";
import "./globals.css";
import { Provider } from "./provider";
export const metadata: Metadata = {
  title: "Stack Template",
  description: "A Multi-tenant Next.js Starter Template",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-oid="cfkokmx">
      <body className="" data-oid="-kotyl0">
        <Provider data-oid="r73kx9e">
          <StackProvider app={stackServerApp} data-oid="xvg9pc8">
            <StackTheme data-oid=":gh:g56">{children}</StackTheme>
          </StackProvider>
        </Provider>
      </body>
    </html>
  );
}
