'use client';

import { useUser } from "@stackframe/stack";
import { Button } from "@/components/ui/button";
import { checkPaymentMethods } from "@/lib/stripe";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Payment Method Test</h1>
        <p className="text-muted-foreground">
          Test the payment method checking functionality
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Check Payment Methods</CardTitle>
          <CardDescription>
            Click the button below to check if you have valid payment methods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleCheckPaymentMethods}
            disabled={isLoading}
          >
            {isLoading ? 'Checking...' : 'Check Payment Methods'}
          </Button>

          {error && (
            <div className="flex items-start space-x-2 rounded-md border border-red-200 bg-red-50 p-4 text-red-600">
              <XCircle className="h-5 w-5 mt-0.5" />
              <div>
                <h4 className="font-medium">Error</h4>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}

          {checkResult && (
            <div className={`flex items-start space-x-2 rounded-md border p-4 ${
              checkResult.hasValidPaymentMethod 
                ? 'border-green-200 bg-green-50 text-green-600'
                : 'border-red-200 bg-red-50 text-red-600'
            }`}>
              {checkResult.hasValidPaymentMethod ? (
                <CheckCircle2 className="h-5 w-5 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 mt-0.5" />
              )}
              <div>
                <h4 className="font-medium">
                  {checkResult.hasValidPaymentMethod ? 'Valid Payment Method Found' : 'No Valid Payment Method'}
                </h4>
                <p className="text-sm">{checkResult.message}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 