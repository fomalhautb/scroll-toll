import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo(props: { className?: string; link?: string }) {
  return (
    <Link
      href={props.link ?? "/"}
      className={cn("items-center space-x-2 flex", props.className)}
      data-oid="tt_wm8y"
    >
      <div
        className="h-8 w-8 rounded-full bg-primary flex items-center justify-center"
        data-oid="ovt-mwn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-primary-foreground"
          data-oid="pl_zf7_"
        >
          <path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            data-oid="aqa7c21"
          />

          <path d="M8 12h8" data-oid="de1hif9" />
          <path d="M12 8v8" data-oid="9j0lles" />
        </svg>
      </div>
      <span
        className="font-medium text-lg sm:inline-block tracking-wide"
        data-oid="uwiao9d"
      >
        Scroll Toll
      </span>
    </Link>
  );
}
