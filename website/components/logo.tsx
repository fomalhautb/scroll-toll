import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo(props: { className?: string; link?: string }) {
  return (
    <Link
      href={props.link ?? "/"}
      className={cn("items-center space-x-2", props.className)}
      data-oid="tt_wm8y"
    >
      <span className="font-bold sm:inline-block" data-oid="uwiao9d">
        Scroll Toll
      </span>
    </Link>
  );
}
