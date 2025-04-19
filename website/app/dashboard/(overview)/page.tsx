"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Graph } from "./graph";
import {
  AlertCircle,
  Clock,
  CreditCard,
  DollarSign,
  PlusCircle,
  Trash2,
  Check,
} from "lucide-react";
import { useUser } from "@stackframe/stack";

export default function DashboardPage() {
  useUser({ or: "redirect" });
  const [isPaymentConnected, setIsPaymentConnected] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
  });

  // Website settings state
  const [websites, setWebsites] = useState([
    { url: "twitter.com", costPerMinute: 0.25 },
    { url: "facebook.com", costPerMinute: 0.15 },
    { url: "instagram.com", costPerMinute: 0.2 },
  ]);

  const [newWebsite, setNewWebsite] = useState({ url: "", costPerMinute: 0.1 });

  // Usage data state
  const [usageData, setUsageData] = useState({
    totalTime: 0, // in minutes
    totalCost: 0,
    websiteBreakdown: [
      { website: "twitter.com", time: 0, cost: 0 },
      { website: "facebook.com", time: 0, cost: 0 },
      { website: "instagram.com", time: 0, cost: 0 },
    ],
  });

  // Check payment status and update usage data
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
  }, []);

  // Payment handlers
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPaymentConnected(true);
    localStorage.setItem("paymentConnected", "true");
  };

  const handleDisconnectPayment = () => {
    setIsPaymentConnected(false);
    localStorage.setItem("paymentConnected", "false");
    setCardDetails({
      cardNumber: "",
      cardholderName: "",
      expiryDate: "",
      cvv: "",
    });
  };

  // Website settings handlers
  const handleAddWebsite = () => {
    if (newWebsite.url.trim() === "") return;

    setWebsites([...websites, { ...newWebsite }]);
    setNewWebsite({ url: "", costPerMinute: 0.1 });
  };

  const handleRemoveWebsite = (index: number) => {
    const updatedWebsites = [...websites];
    updatedWebsites.splice(index, 1);
    setWebsites(updatedWebsites);
  };

  const handleWebsiteChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updatedWebsites = [...websites];
    updatedWebsites[index] = {
      ...updatedWebsites[index],
      [field]:
        field === "costPerMinute" ? parseFloat(value as string) || 0 : value,
    };
    setWebsites(updatedWebsites);
  };

  // Helper functions
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="container mx-auto py-6" data-oid="aumq6x-">
      <div
        className="flex items-center justify-between mb-6"
        data-oid="a_rmrn:"
      >
        <h1 className="text-3xl font-bold" data-oid="8lm14up">
          Scroll Toll Dashboard
        </h1>
      </div>

      <Tabs defaultValue="overview" className="space-y-6" data-oid="yhawlqx">
        <TabsList className="grid w-full grid-cols-3" data-oid="f8hseb3">
          <TabsTrigger value="overview" data-oid="nikaxqb">
            Overview
          </TabsTrigger>
          <TabsTrigger value="websites" data-oid="5y13vzt">
            Website Settings
          </TabsTrigger>
          <TabsTrigger value="payment" data-oid="xv9gewn">
            Payment Method
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6" data-oid="4_00_c2">
          {!isPaymentConnected ? (
            <Card
              className="border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800"
              data-oid=".vbqxoe"
            >
              <CardHeader data-oid=":6gwfom">
                <CardTitle
                  className="flex items-center text-amber-800 dark:text-amber-300"
                  data-oid="qz097_w"
                >
                  <AlertCircle className="mr-2 h-5 w-5" data-oid="2vgmd6z" />
                  Payment Method Required
                </CardTitle>
                <CardDescription
                  className="text-amber-700 dark:text-amber-400"
                  data-oid="yn3bn9p"
                >
                  Please connect a payment method to start using Scroll Toll.
                </CardDescription>
              </CardHeader>
              <CardFooter data-oid="q4yed--">
                <Button
                  onClick={() =>
                    document.querySelector('[data-value="payment"]')?.click()
                  }
                  data-oid="u_ce2i_"
                >
                  Connect Payment Method
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <>
              <div
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
                data-oid="1a96dh5"
              >
                <Card data-oid="uph9t-i">
                  <CardHeader
                    className="flex flex-row items-center justify-between space-y-0 pb-2"
                    data-oid="lz_3edn"
                  >
                    <CardTitle
                      className="text-sm font-medium"
                      data-oid="limz0iw"
                    >
                      Total Scrolling Time
                    </CardTitle>
                    <Clock
                      className="h-4 w-4 text-muted-foreground"
                      data-oid="8oru579"
                    />
                  </CardHeader>
                  <CardContent data-oid="_7bwwp.">
                    <div className="text-2xl font-bold" data-oid="-c3isdr">
                      {formatTime(usageData.totalTime)}
                    </div>
                    <p
                      className="text-xs text-muted-foreground"
                      data-oid="76r47vq"
                    >
                      This month
                    </p>
                  </CardContent>
                </Card>

                <Card data-oid="2wbm7jh">
                  <CardHeader
                    className="flex flex-row items-center justify-between space-y-0 pb-2"
                    data-oid="wxlj7vo"
                  >
                    <CardTitle
                      className="text-sm font-medium"
                      data-oid=".:6iouw"
                    >
                      Total Cost
                    </CardTitle>
                    <DollarSign
                      className="h-4 w-4 text-muted-foreground"
                      data-oid="6fz1rbn"
                    />
                  </CardHeader>
                  <CardContent data-oid="kq4u-q7">
                    <div className="text-2xl font-bold" data-oid="bee5dfx">
                      ${usageData.totalCost.toFixed(2)}
                    </div>
                    <p
                      className="text-xs text-muted-foreground"
                      data-oid="d6j66hg"
                    >
                      This month
                    </p>
                  </CardContent>
                </Card>

                <Card data-oid="bikyl.1">
                  <CardHeader
                    className="flex flex-row items-center justify-between space-y-0 pb-2"
                    data-oid="4y8xf2d"
                  >
                    <CardTitle
                      className="text-sm font-medium"
                      data-oid="v8dv-.k"
                    >
                      Average Cost/Hour
                    </CardTitle>
                    <DollarSign
                      className="h-4 w-4 text-muted-foreground"
                      data-oid="53jt:3d"
                    />
                  </CardHeader>
                  <CardContent data-oid="wqwpy_q">
                    <div className="text-2xl font-bold" data-oid="akq393_">
                      $
                      {usageData.totalTime
                        ? (
                            (usageData.totalCost / usageData.totalTime) *
                            60
                          ).toFixed(2)
                        : "0.00"}
                    </div>
                    <p
                      className="text-xs text-muted-foreground"
                      data-oid="ol-9a.k"
                    >
                      Based on your usage
                    </p>
                  </CardContent>
                </Card>

                <Card data-oid="_jcj5x2">
                  <CardHeader
                    className="flex flex-row items-center justify-between space-y-0 pb-2"
                    data-oid="4v9zlog"
                  >
                    <CardTitle
                      className="text-sm font-medium"
                      data-oid="ob3tf8p"
                    >
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
                      data-oid="3q5xmkg"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" data-oid="9utbjak" />
                    </svg>
                  </CardHeader>
                  <CardContent data-oid="9q.e-_s">
                    <div className="text-2xl font-bold" data-oid="o0kwa5i">
                      {usageData.websiteBreakdown[0]?.website || "N/A"}
                    </div>
                    <p
                      className="text-xs text-muted-foreground"
                      data-oid="1bi5428"
                    >
                      {formatTime(usageData.websiteBreakdown[0]?.time || 0)}{" "}
                      spent
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-7" data-oid="hojvuw3">
                <Card className="col-span-4" data-oid="bm5.vv8">
                  <CardHeader data-oid="kptik0t">
                    <CardTitle data-oid="kf0-506">Usage Over Time</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2" data-oid="a9v8syx">
                    <Graph data-oid="ij0xiuk" />
                  </CardContent>
                </Card>

                <Card className="col-span-3" data-oid=":bjc1zz">
                  <CardHeader data-oid="0-w:4h:">
                    <CardTitle data-oid="j_ejzln">Website Breakdown</CardTitle>
                    <CardDescription data-oid="ejs2gn-">
                      Your scrolling habits by website
                    </CardDescription>
                  </CardHeader>
                  <CardContent data-oid="1i8vtbc">
                    <div className="space-y-4" data-oid="xww4lnj">
                      {usageData.websiteBreakdown.map((site, i) => (
                        <div
                          key={i}
                          className="flex items-center"
                          data-oid="53ycncm"
                        >
                          <div
                            className="w-[30%] font-medium truncate"
                            title={site.website}
                            data-oid="im9fefy"
                          >
                            {site.website}
                          </div>
                          <div
                            className="w-[40%] flex items-center"
                            data-oid="08p2kj8"
                          >
                            <div
                              className="h-2 w-full bg-secondary"
                              data-oid="8jo.c1q"
                            >
                              <div
                                className="h-full bg-primary"
                                style={{
                                  width: `${
                                    (site.time / usageData.totalTime) * 100
                                  }%`,
                                }}
                                data-oid=".yc1099"
                              />
                            </div>
                            <span
                              className="ml-2 text-sm text-muted-foreground"
                              data-oid="5-g0q7c"
                            >
                              {formatTime(site.time)}
                            </span>
                          </div>
                          <div
                            className="w-[30%] text-right font-medium"
                            data-oid="ko96x89"
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
        </TabsContent>

        {/* Website Settings Tab */}
        <TabsContent value="websites" className="space-y-6" data-oid="2rfy_mf">
          <Card data-oid="hzwcg7e">
            <CardHeader data-oid="jnghckb">
              <CardTitle data-oid="2fkwene">Blocked Websites</CardTitle>
              <CardDescription data-oid="99h51k_">
                Configure which websites to block and how much they cost per
                minute.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="bdehaul">
              <div className="space-y-4" data-oid="-i5u7.i">
                {websites.map((website, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                    data-oid="6qlufm."
                  >
                    <div className="flex-1" data-oid="7xoq__-">
                      <Label htmlFor={`website-${index}`} data-oid="ni7_292">
                        Website URL
                      </Label>
                      <Input
                        id={`website-${index}`}
                        value={website.url}
                        onChange={(e) =>
                          handleWebsiteChange(index, "url", e.target.value)
                        }
                        placeholder="e.g., facebook.com"
                        data-oid="e85ff9n"
                      />
                    </div>
                    <div className="w-32" data-oid="5bv2iy2">
                      <Label htmlFor={`cost-${index}`} data-oid="3s0x3_6">
                        Cost/min ($)
                      </Label>
                      <Input
                        id={`cost-${index}`}
                        type="number"
                        step="0.01"
                        min="0.01"
                        value={website.costPerMinute}
                        onChange={(e) =>
                          handleWebsiteChange(
                            index,
                            "costPerMinute",
                            e.target.value
                          )
                        }
                        data-oid="063mkkm"
                      />
                    </div>
                    <div className="flex items-end pb-1" data-oid="vpyybit">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveWebsite(index)}
                        data-oid="akaiv_0"
                      >
                        <Trash2
                          className="h-5 w-5 text-muted-foreground"
                          data-oid="7lj_0r5"
                        />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Separator data-oid="vtbjro5" />

              <div className="space-y-4" data-oid="bh5kqle">
                <h3 className="text-sm font-medium" data-oid=".xjh3-q">
                  Add New Website
                </h3>
                <div className="flex items-center gap-4" data-oid="h1_-l7d">
                  <div className="flex-1" data-oid="otjxsb0">
                    <Input
                      value={newWebsite.url}
                      onChange={(e) =>
                        setNewWebsite({ ...newWebsite, url: e.target.value })
                      }
                      placeholder="e.g., tiktok.com"
                      data-oid=":1swcjv"
                    />
                  </div>
                  <div className="w-32" data-oid=".p6f3oz">
                    <Input
                      type="number"
                      step="0.01"
                      min="0.01"
                      value={newWebsite.costPerMinute}
                      onChange={(e) =>
                        setNewWebsite({
                          ...newWebsite,
                          costPerMinute: parseFloat(e.target.value) || 0,
                        })
                      }
                      data-oid="covh7.m"
                    />
                  </div>
                  <div data-oid="l8fehz8">
                    <Button onClick={handleAddWebsite} data-oid="lodf7do">
                      <PlusCircle className="h-4 w-4 mr-2" data-oid="6i15f5m" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter data-oid="s0_3l:3">
              <Button data-oid=":hau393">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Payment Method Tab */}
        <TabsContent value="payment" className="space-y-6" data-oid="ho-2zfs">
          {isPaymentConnected ? (
            <Card data-oid="o2mgu9-">
              <CardHeader data-oid="f73epge">
                <CardTitle className="flex items-center" data-oid="im3dqrb">
                  <Check
                    className="h-5 w-5 mr-2 text-green-500"
                    data-oid="j2z5q9g"
                  />
                  Payment Method Connected
                </CardTitle>
                <CardDescription data-oid="la_tyhm">
                  Your payment method has been successfully connected.
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="pz:6qwm">
                <div
                  className="flex items-center space-x-4 rounded-md border p-4"
                  data-oid="saqs.d:"
                >
                  <CreditCard
                    className="h-8 w-8 text-primary"
                    data-oid="919mth3"
                  />

                  <div data-oid="8wiz9d3">
                    <p
                      className="text-sm font-medium leading-none"
                      data-oid="5:m:6zy"
                    >
                      •••• •••• ••••{" "}
                      {cardDetails.cardNumber.slice(-4) || "1234"}
                    </p>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="nclyuqw"
                    >
                      Expires {cardDetails.expiryDate || "12/25"}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter data-oid="006ziy3">
                <Button
                  variant="outline"
                  onClick={handleDisconnectPayment}
                  data-oid="fuamf4j"
                >
                  Disconnect Payment Method
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card data-oid="y90..5o">
              <CardHeader data-oid="jptpr.m">
                <CardTitle data-oid="k7dv:2q">Connect Payment Method</CardTitle>
                <CardDescription data-oid="hy11yp1">
                  Add a payment method to enable the Scroll Toll extension.
                  You'll only be charged when you visit blocked websites.
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="mvsn-qx">
                <form
                  onSubmit={handlePaymentSubmit}
                  className="space-y-4"
                  data-oid="8wv3l06"
                >
                  <div className="space-y-2" data-oid="l-t.p8j">
                    <Label htmlFor="cardNumber" data-oid="yhh2i46">
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
                      data-oid="zmg745p"
                    />
                  </div>
                  <div className="space-y-2" data-oid="7k3an1y">
                    <Label htmlFor="cardholderName" data-oid="m526zvz">
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
                      data-oid="m6gsq4w"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4" data-oid="7mqju80">
                    <div className="space-y-2" data-oid="e4.o-2r">
                      <Label htmlFor="expiryDate" data-oid="zkh6wuq">
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
                        data-oid="0a-l3hg"
                      />
                    </div>
                    <div className="space-y-2" data-oid="rdqc9an">
                      <Label htmlFor="cvv" data-oid="q79j.:1">
                        CVV
                      </Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        type="password"
                        maxLength={4}
                        value={cardDetails.cvv}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            cvv: e.target.value,
                          })
                        }
                        required
                        data-oid="2fu6_rg"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" data-oid="uxqvgax">
                    Connect Payment Method
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
