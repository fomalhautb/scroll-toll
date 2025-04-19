import { Metadata } from "next";

import { RecentSales } from "@/app/dashboard/[teamId]/(overview)/recent-sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Graph } from "./graph";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col" data-oid="0f7z0eg">
        <div className="flex-1 space-y-4 p-8 pt-6" data-oid="oh-20g.">
          <div
            className="flex items-center justify-between space-y-2"
            data-oid="806e53."
          >
            <h2
              className="text-2xl font-bold tracking-tight"
              data-oid="p:kur5d"
            >
              Overview
            </h2>
          </div>
          <div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            data-oid="qi5s6yb"
          >
            <Card data-oid="sesmdwz">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid="cor2pg."
              >
                <CardTitle className="text-sm font-medium" data-oid="awex:ot">
                  Total Revenue
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
                  data-oid="5l2yyh:"
                >
                  <path
                    d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    data-oid="kw_:8vs"
                  />
                </svg>
              </CardHeader>
              <CardContent data-oid="i67.r77">
                <div className="text-2xl font-bold" data-oid="gz.3gf6">
                  $45,231.89
                </div>
                <p className="text-xs text-muted-foreground" data-oid="dxgeyt_">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card data-oid="dak-gk8">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid="w9xs:vr"
              >
                <CardTitle className="text-sm font-medium" data-oid="sc5qi1g">
                  Subscriptions
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
                  data-oid="01mqwpp"
                >
                  <path
                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                    data-oid="s6i6rag"
                  />

                  <circle cx="9" cy="7" r="4" data-oid="92ik_.s" />
                  <path
                    d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                    data-oid="09l:c4x"
                  />
                </svg>
              </CardHeader>
              <CardContent data-oid=":_lscy0">
                <div className="text-2xl font-bold" data-oid="-h:0gl-">
                  +2350
                </div>
                <p className="text-xs text-muted-foreground" data-oid="0jh4gkw">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card data-oid="b963sgx">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid="c1fvs_r"
              >
                <CardTitle className="text-sm font-medium" data-oid="s9471pe">
                  Sales
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
                  data-oid="ecdwsj1"
                >
                  <rect
                    width="20"
                    height="14"
                    x="2"
                    y="5"
                    rx="2"
                    data-oid="zr5yxh9"
                  />

                  <path d="M2 10h20" data-oid="bjv4lym" />
                </svg>
              </CardHeader>
              <CardContent data-oid="qd5ievf">
                <div className="text-2xl font-bold" data-oid="9prd_nn">
                  +12,234
                </div>
                <p className="text-xs text-muted-foreground" data-oid="tcfyi24">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card data-oid="1:3e8aq">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid="hb-h7-3"
              >
                <CardTitle className="text-sm font-medium" data-oid="twh1r9_">
                  Active Now
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
                  data-oid="0pm8l8w"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" data-oid="yyka9w8" />
                </svg>
              </CardHeader>
              <CardContent data-oid=".ftifp6">
                <div className="text-2xl font-bold" data-oid="y8hgiod">
                  +573
                </div>
                <p className="text-xs text-muted-foreground" data-oid="-57m8yp">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"
            data-oid="h8k.iji"
          >
            <Card className="col-span-4" data-oid="veh1o5v">
              <CardHeader data-oid="m2y47zp">
                <CardTitle data-oid="0p:3lvc">Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2" data-oid="kuw:705">
                <Graph data-oid="qjgvjt7" />
              </CardContent>
            </Card>
            <Card className="col-span-3" data-oid="_n8y7uq">
              <CardHeader data-oid="pariof:">
                <CardTitle data-oid="ht3o_g2">Recent Sales</CardTitle>
                <CardDescription data-oid="_q1-.93">
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="xd26hd-">
                <RecentSales data-oid="hfqcu5c" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
