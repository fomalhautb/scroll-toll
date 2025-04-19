"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@stackframe/stack";
import { LucideIcon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function useSegment(basePath: string) {
  const path = usePathname();
  const result = path.slice(basePath.length, path.length);
  return result ? result : "/";
}

type Item = {
  name: React.ReactNode;
  href: string;
  icon: LucideIcon;
  type: "item";
};

type Sep = {
  type: "separator";
};

type Label = {
  name: React.ReactNode;
  type: "label";
};

export type SidebarItem = Item | Sep | Label;

function NavItem(props: {
  item: Item;
  onClick?: () => void;
  basePath: string;
}) {
  const segment = useSegment(props.basePath);
  const selected = segment === props.item.href;

  return (
    <Link
      href={props.basePath + props.item.href}
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        selected && "bg-muted",
        "flex-grow justify-start text-md text-zinc-800 dark:text-zinc-300 px-2",
      )}
      onClick={props.onClick}
      prefetch={true}
      data-oid="km6q2b4"
    >
      <props.item.icon className="mr-2 h-5 w-5" data-oid=":6zbcv5" />
      {props.item.name}
    </Link>
  );
}

function SidebarContent(props: {
  onNavigate?: () => void;
  items: SidebarItem[];
  sidebarTop?: React.ReactNode;
  basePath: string;
}) {
  const path = usePathname();
  const segment = useSegment(props.basePath);

  return (
    <div className="flex flex-col h-full items-stretch" data-oid="tx2wlsm">
      <div
        className="h-14 flex items-center px-2 shrink-0 mr-10 md:mr-0 border-b"
        data-oid="9220zvf"
      >
        {props.sidebarTop}
      </div>
      <div
        className="flex flex-grow flex-col gap-2 pt-4 overflow-y-auto"
        data-oid="o0.l-x3"
      >
        {props.items.map((item, index) => {
          if (item.type === "separator") {
            return (
              <Separator key={index} className="my-2" data-oid="zv_0p4l" />
            );
          } else if (item.type === "item") {
            return (
              <div key={index} className="flex px-2" data-oid="90q99id">
                <NavItem
                  item={item}
                  onClick={props.onNavigate}
                  basePath={props.basePath}
                  data-oid="oylk1t3"
                />
              </div>
            );
          } else {
            return (
              <div key={index} className="flex my-2" data-oid="jrinbrh">
                <div
                  className="flex-grow justify-start text-sm font-medium text-zinc-500 px-2"
                  data-oid="_gil_v_"
                >
                  {item.name}
                </div>
              </div>
            );
          }
        })}

        <div className="flex-grow" data-oid="4-6-x0x" />
      </div>
    </div>
  );
}

export type HeaderBreadcrumbItem = { title: string; href: string };

function HeaderBreadcrumb(props: {
  items: SidebarItem[];
  baseBreadcrumb?: HeaderBreadcrumbItem[];
  basePath: string;
}) {
  const segment = useSegment(props.basePath);
  console.log(segment);
  const item = props.items.find(
    (item) => item.type === "item" && item.href === segment,
  );
  const title: string | undefined = (item as any)?.name;

  return (
    <Breadcrumb data-oid="m_1uz7j">
      <BreadcrumbList data-oid="uqozn86">
        {props.baseBreadcrumb?.map((item, index) => (
          <>
            <BreadcrumbItem key={index} data-oid="m7txnd_">
              <BreadcrumbLink href={item.href} data-oid=":r7pr34">
                {item.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator
              key={`separator-${index}`}
              data-oid="praqap4"
            />
          </>
        ))}

        <BreadcrumbItem data-oid="z3a::cb">
          <BreadcrumbPage data-oid="yg:6hmp">{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default function SidebarLayout(props: {
  children?: React.ReactNode;
  baseBreadcrumb?: HeaderBreadcrumbItem[];
  items: SidebarItem[];
  sidebarTop?: React.ReactNode;
  basePath: string;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="w-full flex" data-oid="5ra6.jt">
      <div
        className="flex-col border-r w-[240px] h-screen sticky top-0 hidden md:flex"
        data-oid="02_ghhe"
      >
        <SidebarContent
          items={props.items}
          sidebarTop={props.sidebarTop}
          basePath={props.basePath}
          data-oid="yvbo9cd"
        />
      </div>
      <div className="flex flex-col flex-grow w-0" data-oid="6:xo8qi">
        <div
          className="h-14 border-b flex items-center justify-between sticky top-0 bg-white dark:bg-black z-10 px-4 md:px-6"
          data-oid="mg46itz"
        >
          <div className="hidden md:flex" data-oid="hbkxcdo">
            <HeaderBreadcrumb
              baseBreadcrumb={props.baseBreadcrumb}
              basePath={props.basePath}
              items={props.items}
              data-oid="suh8380"
            />
          </div>

          <div className="flex md:hidden items-center" data-oid="khj1mp7">
            <Sheet
              onOpenChange={(open) => setSidebarOpen(open)}
              open={sidebarOpen}
              data-oid="tdo6-7_"
            >
              <SheetTrigger data-oid="q.wp7s.">
                <Menu data-oid="368kj.j" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[240px] p-0"
                data-oid=":72.y:e"
              >
                <SidebarContent
                  onNavigate={() => setSidebarOpen(false)}
                  items={props.items}
                  sidebarTop={props.sidebarTop}
                  basePath={props.basePath}
                  data-oid="jbdd59b"
                />
              </SheetContent>
            </Sheet>

            <div className="ml-4 flex md:hidden" data-oid="wa0e4pm">
              <HeaderBreadcrumb
                baseBreadcrumb={props.baseBreadcrumb}
                basePath={props.basePath}
                items={props.items}
                data-oid="ir5s:3a"
              />
            </div>
          </div>

          <UserButton
            colorModeToggle={() =>
              setTheme(resolvedTheme === "light" ? "dark" : "light")
            }
            data-oid="iffp45n"
          />
        </div>
        <div className="flex-grow" data-oid="3d:3eh1">
          {props.children}
        </div>
      </div>
    </div>
  );
}
