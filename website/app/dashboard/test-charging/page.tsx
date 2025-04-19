'use client';

import { useUser } from "@stackframe/stack";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestChargingPage() {
  const user = useUser({ or: "redirect" });
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTestRequest = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/api/track-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: 'https://facebook.com/test'
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Test Charging</h1>
        <p className="text-muted-foreground">
          Test the request tracking and charging functionality
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Make Test Request</CardTitle>
          <CardDescription>
            Click the button below to simulate a request. After 10 seconds of inactivity, 
            you will be charged $0.04 for each request made in that window.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleTestRequest}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Test Request'}
          </Button>

          {error && (
            <div className="flex items-start space-x-2 rounded-md border border-red-200 bg-red-50 p-4 text-red-600">
              <div>
                <h4 className="font-medium">Error</h4>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}

          {response && (
            <div className="flex items-start space-x-2 rounded-md border border-green-200 bg-green-50 p-4 text-green-600">
              <div>
                <h4 className="font-medium">Success</h4>
                <p className="text-sm">Request count: {response.currentRequestCount}</p>
                <p className="text-sm">Message: {response.message}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 