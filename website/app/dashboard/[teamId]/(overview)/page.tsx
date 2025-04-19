"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Graph } from "./graph";
import {
  AlertCircle,
  Clock,
  CreditCard,
  DollarSign,
  Settings,
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [isPaymentConnected, setIsPaymentConnected] = useState(false);

  // Simulated usage data
  const [usageData, setUsageData] = useState({
    totalTime: 0, // in minutes
    totalCost: 0,
    websiteBreakdown: [
      { website: "twitter.com", time: 0, cost: 0 },
      { website: "facebook.com", time: 0, cost: 0 },
      { website: "instagram.com", time: 0, cost: 0 },
    ],
  });

  // Check payment status and update usage data when it changes
  useEffect(() => {
    const checkPaymentStatus = () => {
      const connected = localStorage.getItem("paymentConnected") === "true";
      setIsPaymentConnected(connected);

      if (connected) {
        // Simulate usage data if payment is connected
        const time = Math.floor(Math.random() * 300) + 60; // 60-360 minutes
        const cost = (time * 0.2).toFixed(2); // $0.20 per minute average

        const breakdown = [
          {
            website: "twitter.com",
            time: Math.floor(time * 0.5),
            cost: (Math.floor(time * 0.5) * 0.25).toFixed(2),
          },
          {
            website: "facebook.com",
            time: Math.floor(time * 0.3),
            cost: (Math.floor(time * 0.3) * 0.15).toFixed(2),
          },
          {
            website: "instagram.com",
            time: Math.floor(time * 0.2),
            cost: (Math.floor(time * 0.2) * 0.2).toFixed(2),
          },
        ];

        setUsageData({
          totalTime: time,
          totalCost: parseFloat(cost),
          websiteBreakdown: breakdown,
        });
      }
    };

    checkPaymentStatus();

    // Set up an event listener to check for payment status changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "paymentConnected") {
        checkPaymentStatus();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Also poll for changes every few seconds (for demo purposes)
    const interval = setInterval(() => {
      checkPaymentStatus();
    }, 5000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="flex-col" data-oid="y_j.j2q">
      <div className="flex-1 space-y-4 p-8 pt-6" data-oid="qm:mg7.">
        <div className="flex items-center justify-between" data-oid="2nj.os7">
          <h2 className="text-2xl font-bold tracking-tight" data-oid="cmwaecc">
            Dashboard
          </h2>
          <div className="flex space-x-2" data-oid="79u2:kh">
            <Button
              variant="outline"
              onClick={() =>
                router.push(
                  "/dashboard/[teamId]/settings".replace(
                    "[teamId]",
                    window.location.pathname.split("/")[2],
                  ),
                )
              }
              data-oid="h-x.6:y"
            >
              <Settings className="mr-2 h-4 w-4" data-oid="hr4aaf6" />
              Website Settings
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                router.push(
                  "/dashboard/[teamId]/payment".replace(
                    "[teamId]",
                    window.location.pathname.split("/")[2],
                  ),
                )
              }
              data-oid="naln3bn"
            >
              <CreditCard className="mr-2 h-4 w-4" data-oid=".g68.zx" />
              Payment Method
            </Button>
          </div>
        </div>

        {!isPaymentConnected ? (
          <Card
            className="border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800"
            data-oid="rl0rz4."
          >
            <CardHeader data-oid="s:-l.2j">
              <CardTitle
                className="flex items-center text-amber-800 dark:text-amber-300"
                data-oid="indlxq6"
              >
                <AlertCircle className="mr-2 h-5 w-5" data-oid="65o1rnr" />
                Payment Method Required
              </CardTitle>
              <CardDescription
                className="text-amber-700 dark:text-amber-400"
                data-oid="3n86m7o"
              >
                Please connect a payment method to start using Scroll Toll.
              </CardDescription>
            </CardHeader>
            <CardFooter data-oid="1oi2cc3">
              <Button
                onClick={() =>
                  router.push(
                    "/dashboard/[teamId]/payment".replace(
                      "[teamId]",
                      window.location.pathname.split("/")[2],
                    ),
                  )
                }
                data-oid="l0oh5qh"
              >
                Connect Payment Method
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            <div
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
              data-oid="9rt5xdl"
            >
              <Card data-oid="uogmb.-">
                <CardHeader
                  className="flex flex-row items-center justify-between space-y-0 pb-2"
                  data-oid="xjrgpz9"
                >
                  <CardTitle className="text-sm font-medium" data-oid="7v9z_mh">
                    Total Scrolling Time
                  </CardTitle>
                  <Clock
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="_fdmu1_"
                  />
                </CardHeader>
                <CardContent data-oid="v6cv5y.">
                  <div className="text-2xl font-bold" data-oid="_0s3gef">
                    {formatTime(usageData.totalTime)}
                  </div>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="dsdq7gs"
                  >
                    This month
                  </p>
                </CardContent>
              </Card>

              <Card data-oid="becjj3t">
                <CardHeader
                  className="flex flex-row items-center justify-between space-y-0 pb-2"
                  data-oid="1o.fbtg"
                >
                  <CardTitle className="text-sm font-medium" data-oid="8d6-zye">
                    Total Cost
                  </CardTitle>
                  <DollarSign
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="2z3bvaf"
                  />
                </CardHeader>
                <CardContent data-oid="xdwrzw_">
                  <div className="text-2xl font-bold" data-oid="d6t8dah">
                    ${usageData.totalCost.toFixed(2)}
                  </div>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="1sqgtrn"
                  >
                    This month
                  </p>
                </CardContent>
              </Card>

              <Card data-oid="9v4qerj">
                <CardHeader
                  className="flex flex-row items-center justify-between space-y-0 pb-2"
                  data-oid="0tk4ln."
                >
                  <CardTitle className="text-sm font-medium" data-oid="ip8t8gh">
                    Average Cost/Hour
                  </CardTitle>
                  <DollarSign
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="_sripcf"
                  />
                </CardHeader>
                <CardContent data-oid="kr.964g">
                  <div className="text-2xl font-bold" data-oid="8y16q.e">
                    $
                    {((usageData.totalCost / usageData.totalTime) * 60).toFixed(
                      2,
                    )}
                  </div>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="96xia:z"
                  >
                    Based on your usage
                  </p>
                </CardContent>
              </Card>

              <Card data-oid="b7osmt3">
                <CardHeader
                  className="flex flex-row items-center justify-between space-y-0 pb-2"
                  data-oid="45cc61f"
                >
                  <CardTitle className="text-sm font-medium" data-oid="d6qirqt">
                    Most Visited
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="89z498f"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" data-oid="r6thw:c" />
                  </svg>
                </CardHeader>
                <CardContent data-oid="2e4yeve">
                  <div className="text-2xl font-bold" data-oid="2:j4rf1">
                    {usageData.websiteBreakdown[0]?.website || "N/A"}
                  </div>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="4yg6mnb"
                  >
                    {formatTime(usageData.websiteBreakdown[0]?.time || 0)} spent
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-7" data-oid="t6wdmmb">
              <Card className="col-span-4" data-oid="tmo-4hs">
                <CardHeader data-oid="_ob-qu0">
                  <CardTitle data-oid="y:-c1p:">Usage Over Time</CardTitle>
                </CardHeader>
                <CardContent className="pl-2" data-oid="uyy1dij">
                  <Graph data-oid="m_7-w-9" />
                </CardContent>
              </Card>

              <Card className="col-span-3" data-oid="l2ta68m">
                <CardHeader data-oid="rrcbe-j">
                  <CardTitle data-oid="v:aeq7n">Website Breakdown</CardTitle>
                  <CardDescription data-oid="fqtrrd_">
                    Your scrolling habits by website
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid=".n64vut">
                  <div className="space-y-4" data-oid="97p0h6p">
                    {usageData.websiteBreakdown.map((site, i) => (
                      <div
                        key={i}
                        className="flex items-center"
                        data-oid="288fo7b"
                      >
                        <div
                          className="w-[30%] font-medium truncate"
                          title={site.website}
                          data-oid="mn6ba3."
                        >
                          {site.website}
                        </div>
                        <div
                          className="w-[40%] flex items-center"
                          data-oid="w2ymjuu"
                        >
                          <div
                            className="h-2 w-full bg-secondary"
                            data-oid="z0iv4zm"
                          >
                            <div
                              className="h-full bg-primary"
                              style={{
                                width: `${(site.time / usageData.totalTime) * 100}%`,
                              }}
                              data-oid="g6otj0i"
                            />
                          </div>
                          <span
                            className="ml-2 text-sm text-muted-foreground"
                            data-oid="kgm8w1k"
                          >
                            {formatTime(site.time)}
                          </span>
                        </div>
                        <div
                          className="w-[30%] text-right font-medium"
                          data-oid="w1hk12c"
                        >
                          ${parseFloat(site.cost as string).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
