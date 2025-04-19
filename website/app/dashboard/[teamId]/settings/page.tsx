"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, Trash2 } from "lucide-react";

export default function SettingsPage() {
  const [websites, setWebsites] = useState([
    { url: "twitter.com", costPerMinute: 0.25 },
    { url: "facebook.com", costPerMinute: 0.15 },
    { url: "instagram.com", costPerMinute: 0.2 },
  ]);

  const [newWebsite, setNewWebsite] = useState({ url: "", costPerMinute: 0.1 });

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
    value: string | number,
  ) => {
    const updatedWebsites = [...websites];
    updatedWebsites[index] = {
      ...updatedWebsites[index],
      [field]:
        field === "costPerMinute" ? parseFloat(value as string) || 0 : value,
    };
    setWebsites(updatedWebsites);
  };

  return (
    <div className="flex-col" data-oid="d-xa4b1">
      <div className="flex-1 space-y-4 p-8 pt-6" data-oid="p1j5_hc">
        <div
          className="flex items-center justify-between space-y-2"
          data-oid="4zxcgf4"
        >
          <h2 className="text-2xl font-bold tracking-tight" data-oid="lnuqo5w">
            Settings
          </h2>
          <Button data-oid="vuvgqys">Save Changes</Button>
        </div>

        <Card data-oid="dz.-4jt">
          <CardHeader data-oid="90hjb73">
            <CardTitle data-oid="cbdhhav">Blocked Websites</CardTitle>
            <CardDescription data-oid="jb4n0s_">
              Configure which websites to block and how much they cost per
              minute.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="e6mmz3x">
            <div className="space-y-4" data-oid="9hfh0oq">
              {websites.map((website, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                  data-oid="uz_siot"
                >
                  <div className="flex-1" data-oid="5lsqu8a">
                    <Label htmlFor={`website-${index}`} data-oid="jf6zgtf">
                      Website URL
                    </Label>
                    <Input
                      id={`website-${index}`}
                      value={website.url}
                      onChange={(e) =>
                        handleWebsiteChange(index, "url", e.target.value)
                      }
                      placeholder="e.g., facebook.com"
                      data-oid="y9vylie"
                    />
                  </div>
                  <div className="w-32" data-oid="kwe_748">
                    <Label htmlFor={`cost-${index}`} data-oid="25_gmlo">
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
                          e.target.value,
                        )
                      }
                      data-oid="hn79pgi"
                    />
                  </div>
                  <div className="flex items-end pb-1" data-oid="i0viygv">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveWebsite(index)}
                      data-oid="8cytfhm"
                    >
                      <Trash2
                        className="h-5 w-5 text-muted-foreground"
                        data-oid="h7-w8lp"
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Separator data-oid="q_1djr9" />

            <div className="space-y-4" data-oid="n:xda1w">
              <h3 className="text-sm font-medium" data-oid="yi_ipa8">
                Add New Website
              </h3>
              <div className="flex items-center gap-4" data-oid="1vwy8q:">
                <div className="flex-1" data-oid="x22m5r-">
                  <Input
                    value={newWebsite.url}
                    onChange={(e) =>
                      setNewWebsite({ ...newWebsite, url: e.target.value })
                    }
                    placeholder="e.g., tiktok.com"
                    data-oid="nv19y6c"
                  />
                </div>
                <div className="w-32" data-oid="0qn1-3e">
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
                    data-oid="g.np8to"
                  />
                </div>
                <div data-oid="rygzv8a">
                  <Button onClick={handleAddWebsite} data-oid="969lxph">
                    <PlusCircle className="h-4 w-4 mr-2" data-oid="_k_zvm:" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
