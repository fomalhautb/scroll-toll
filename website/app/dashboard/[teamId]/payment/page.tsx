"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Check } from "lucide-react";

export default function PaymentPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
  });

  // Load payment status from localStorage on initial render
  useEffect(() => {
    const storedStatus = localStorage.getItem("paymentConnected");
    if (storedStatus === "true") {
      setIsConnected(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to a payment processor
    // For now, we'll just simulate a successful connection
    setIsConnected(true);
    localStorage.setItem("paymentConnected", "true");
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    localStorage.setItem("paymentConnected", "false");
    setCardDetails({
      cardNumber: "",
      cardholderName: "",
      expiryDate: "",
      cvv: "",
    });
  };

  return (
    <div className="flex-col" data-oid="kah3z53">
      <div className="flex-1 space-y-4 p-8 pt-6" data-oid="juba.09">
        <div
          className="flex items-center justify-between space-y-2"
          data-oid="tevvi0l"
        >
          <h2 className="text-2xl font-bold tracking-tight" data-oid="fgxc-mp">
            Payment Method
          </h2>
        </div>

        {isConnected ? (
          <Card data-oid="9_:rq1c">
            <CardHeader data-oid="93hkifd">
              <CardTitle className="flex items-center" data-oid="k8ofn0-">
                <Check
                  className="h-5 w-5 mr-2 text-green-500"
                  data-oid="e:iq_m_"
                />
                Payment Method Connected
              </CardTitle>
              <CardDescription data-oid="bw6fhc1">
                Your payment method has been successfully connected.
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="n:9b2es">
              <div
                className="flex items-center space-x-4 rounded-md border p-4"
                data-oid="ansc:ig"
              >
                <CreditCard
                  className="h-8 w-8 text-primary"
                  data-oid="5zlyju5"
                />

                <div data-oid="6bo_311">
                  <p
                    className="text-sm font-medium leading-none"
                    data-oid="arfih4k"
                  >
                    •••• •••• •••• {cardDetails.cardNumber.slice(-4) || "1234"}
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="fp.dtaz"
                  >
                    Expires {cardDetails.expiryDate || "12/25"}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter data-oid="266f_us">
              <Button
                variant="outline"
                onClick={handleDisconnect}
                data-oid="8qt1s.w"
              >
                Disconnect Payment Method
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card data-oid="xbg.g94">
            <CardHeader data-oid="6vx669a">
              <CardTitle data-oid="ixxtijj">Connect Payment Method</CardTitle>
              <CardDescription data-oid="cy5niec">
                Add a payment method to enable the Scroll Toll extension. You'll
                only be charged when you visit blocked websites.
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="x1v.b9i">
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-oid="u2zd-oy"
              >
                <div className="space-y-2" data-oid="3l4-9pw">
                  <Label htmlFor="cardNumber" data-oid="75u9c5z">
                    Card Number
                  </Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardDetails.cardNumber}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        cardNumber: e.target.value,
                      })
                    }
                    required
                    data-oid="847y3cx"
                  />
                </div>
                <div className="space-y-2" data-oid="-ywlm_7">
                  <Label htmlFor="cardholderName" data-oid="1ldt6og">
                    Cardholder Name
                  </Label>
                  <Input
                    id="cardholderName"
                    placeholder="John Doe"
                    value={cardDetails.cardholderName}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        cardholderName: e.target.value,
                      })
                    }
                    required
                    data-oid="29lg8th"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4" data-oid="q..2k0i">
                  <div className="space-y-2" data-oid="gy0fu-y">
                    <Label htmlFor="expiryDate" data-oid="c_mmolw">
                      Expiry Date
                    </Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={cardDetails.expiryDate}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          expiryDate: e.target.value,
                        })
                      }
                      required
                      data-oid="x7k9.zy"
                    />
                  </div>
                  <div className="space-y-2" data-oid="ddic.y2">
                    <Label htmlFor="cvv" data-oid="8drcf:6">
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      type="password"
                      maxLength={4}
                      value={cardDetails.cvv}
                      onChange={(e) =>
                        setCardDetails({ ...cardDetails, cvv: e.target.value })
                      }
                      required
                      data-oid="bmpwy7p"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" data-oid="r:y_gsi">
                  Connect Payment Method
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
