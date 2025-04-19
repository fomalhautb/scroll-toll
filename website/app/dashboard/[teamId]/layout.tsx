"use client";

import { UserButton, useUser } from "@stackframe/stack";
import { useParams, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Logo } from "@/components/logo";

export default function Layout(props: { children: React.ReactNode }) {
  const params = useParams<{ teamId: string }>();
  const user = useUser({ or: "redirect" });
  const team = user.useTeam(params.teamId);
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  if (!team) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen bg-background" data-oid="z:bjm:6">
      <header
        className="h-14 border-b flex items-center justify-between sticky top-0 bg-background z-10 px-4 md:px-6"
        data-oid="jv7i8qp"
      >
        <div className="font-medium" data-oid=":87tgca">
          <Logo data-oid="_6u.-cr" />
        </div>
        <UserButton
          colorModeToggle={() =>
            setTheme(resolvedTheme === "light" ? "dark" : "light")
          }
          data-oid="bppj03g"
        />
      </header>
      <main data-oid=".wu2seu">{props.children}</main>
    </div>
  );
}
