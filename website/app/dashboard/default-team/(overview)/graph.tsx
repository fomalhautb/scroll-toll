"use client";

import { useTheme } from "next-themes";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Mon",
    total: 45,
  },
  {
    name: "Tue",
    total: 32,
  },
  {
    name: "Wed",
    total: 67,
  },
  {
    name: "Thu",
    total: 53,
  },
  {
    name: "Fri",
    total: 89,
  },
  {
    name: "Sat",
    total: 25,
  },
  {
    name: "Sun",
    total: 21,
  },
];

export function Graph() {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={350} data-oid="m60rmzf">
      <BarChart data={data} data-oid=".tsqm-t">
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          data-oid="cszvki:"
        />

        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}m`}
          data-oid="7-7bke1"
        />

        <Tooltip
          cursor={{ fill: "transparent" }}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div
                  className="rounded-lg border bg-background p-2 shadow-sm"
                  data-oid="wy06vk6"
                >
                  <div className="grid grid-cols-2 gap-2" data-oid="vmrd:79">
                    <div className="flex flex-col" data-oid="kp_3t59">
                      <span
                        className="text-[0.70rem] uppercase text-muted-foreground"
                        data-oid="hxo7.1p"
                      >
                        Day
                      </span>
                      <span
                        className="font-bold text-muted-foreground"
                        data-oid="j0iou:i"
                      >
                        {payload[0].payload.name}
                      </span>
                    </div>
                    <div className="flex flex-col" data-oid="u6.vkjt">
                      <span
                        className="text-[0.70rem] uppercase text-muted-foreground"
                        data-oid="fr1kd0u"
                      >
                        Time
                      </span>
                      <span className="font-bold" data-oid="nwr:f63">
                        {payload[0].value}m
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }}
          data-oid="25z2l:o"
        />

        <Bar
          dataKey="total"
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
          data-oid="qgk2.-l"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
