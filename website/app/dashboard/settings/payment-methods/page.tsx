"use client";

import { useUser } from "@stackframe/stack";
import { Button } from "@/components/ui/button";

export default function PaymentMethodsPage() {
  const user = useUser({ or: "redirect" });

  const handlePortalClick = async () => {
    const response = await fetch("/api/stripe/create-portal-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { url } = await response.json();
    window.location.href = url;
  };

  return (
    <div className="space-y-6" data-oid="tigkq6d">
      <div data-oid="6m.772z">
        <h3 className="text-lg font-medium" data-oid="grp8soi">
          Payment Methods
        </h3>
        <p className="text-sm text-muted-foreground" data-oid="kfkjyyw">
          Manage your payment methods and billing information
        </p>
      </div>
      <Button onClick={handlePortalClick} data-oid="bl.o7_.">
        Manage Payment Methods
      </Button>
    </div>
  );
}
