"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DefaultTeamPage() {
  const router = useRouter();

  useEffect(() => {
    // In a real app, you'd get the team ID from the user's session
    // For now, we'll use a hardcoded ID
    router.push("/dashboard/default-team");
  }, [router]);

  return (
    <div
      className="flex items-center justify-center h-screen"
      data-oid="4jqg:va"
    >
      <div className="text-center" data-oid="4_z6egq">
        <h2 className="text-2xl font-semibold mb-2" data-oid="-y5-_gt">
          Loading your dashboard...
        </h2>
        <p className="text-muted-foreground" data-oid="29uj860">
          Please wait while we set up your Scroll Toll dashboard.
        </p>
      </div>
    </div>
  );
}
