"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";

export function PageClient() {
  const router = useRouter();
  const user = useUser({ or: "redirect" });
  const teams = user.useTeams();
  const [teamDisplayName, setTeamDisplayName] = React.useState("");

  React.useEffect(() => {
    if (teams.length > 0 && !user.selectedTeam) {
      user.setSelectedTeam(teams[0]);
    }
  }, [teams, user]);

  if (teams.length === 0) {
    return (
      <div
        className="flex items-center justify-center h-screen w-screen"
        data-oid="o9qh-vf"
      >
        <div className="max-w-xs w-full" data-oid="xp67l._">
          <h1 className="text-center text-2xl font-semibold" data-oid="u78jf4w">
            Welcome!
          </h1>
          <p className="text-center text-gray-500" data-oid="7x.:55:">
            Create a team to get started
          </p>
          <form
            className="mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              user.createTeam({ displayName: teamDisplayName });
            }}
            data-oid="-21dwjp"
          >
            <div data-oid="q5:b0e4">
              <Label className="text-sm" data-oid="-un93.d">
                Team name
              </Label>
              <Input
                placeholder="Team name"
                value={teamDisplayName}
                onChange={(e) => setTeamDisplayName(e.target.value)}
                data-oid="efsfk8o"
              />
            </div>
            <Button className="mt-4 w-full" data-oid="doi5q8_">
              Create team
            </Button>
          </form>
        </div>
      </div>
    );
  } else if (user.selectedTeam) {
    router.push(`/dashboard/${user.selectedTeam.id}`);
  }

  return null;
}
