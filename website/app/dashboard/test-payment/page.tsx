"use client";

import { useUser } from "@stackframe/stack";
import { Button } from "@/components/ui/button";
import { checkPaymentMethods } from "@/lib/stripe";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

export default function TestPaymentPage() {
  const user = useUser({ or: "redirect" });
  const [checkResult, setCheckResult] = useState<{
    hasValidPaymentMethod: boolean;
    message: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckPaymentMethods = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await checkPaymentMethods();
      setCheckResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-6" data-oid="ajr7a8c">
      <div data-oid="pdmw6vo">
        <h1 className="text-2xl font-bold" data-oid="v1x:ax5">
          Payment Method Test
        </h1>
        <p className="text-muted-foreground" data-oid="uhl74fs">
          Test the payment method checking functionality
        </p>
      </div>

      <Card data-oid="4:2o.0c">
        <CardHeader data-oid="jmkenq6">
          <CardTitle data-oid="3_iecmn">Check Payment Methods</CardTitle>
          <CardDescription data-oid="q0flp1x">
            Click the button below to check if you have valid payment methods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="h2ja7rw">
          <Button
            onClick={handleCheckPaymentMethods}
            disabled={isLoading}
            data-oid="lvhht8y"
          >
            {isLoading ? "Checking..." : "Check Payment Methods"}
          </Button>

          {error && (
            <div
              className="flex items-start space-x-2 rounded-md border border-red-200 bg-red-50 p-4 text-red-600"
              data-oid="ghlr13c"
            >
              <XCircle className="h-5 w-5 mt-0.5" data-oid="k6eg:ib" />
              <div data-oid="phmswsg">
                <h4 className="font-medium" data-oid="uih:qo9">
                  Error
                </h4>
                <p className="text-sm" data-oid="fvgx78u">
                  {error}
                </p>
              </div>
            </div>
          )}

          {checkResult && (
            <div
              className={`flex items-start space-x-2 rounded-md border p-4 ${
                checkResult.hasValidPaymentMethod
                  ? "border-green-200 bg-green-50 text-green-600"
                  : "border-red-200 bg-red-50 text-red-600"
              }`}
              data-oid="c:qsr:s"
            >
              {checkResult.hasValidPaymentMethod ? (
                <CheckCircle2 className="h-5 w-5 mt-0.5" data-oid="bif5_o2" />
              ) : (
                <XCircle className="h-5 w-5 mt-0.5" data-oid="jtfnzh." />
              )}
              <div data-oid="s6tcj_6">
                <h4 className="font-medium" data-oid="v79ojd-">
                  {checkResult.hasValidPaymentMethod
                    ? "Valid Payment Method Found"
                    : "No Valid Payment Method"}
                </h4>
                <p className="text-sm" data-oid="sb5dg.x">
                  {checkResult.message}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
