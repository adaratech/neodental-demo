"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { HomeIcon, ChatIcon, FamilyIcon, CalendarIcon } from "./icons/PhaseIcon";

const items = [
  { href: "/home" as const, label: "Home", Icon: HomeIcon },
  { href: "/agenda" as const, label: "Agenda", Icon: CalendarIcon },
  { href: "/famiglia" as const, label: "Famiglia", Icon: FamilyIcon },
  { href: "/chat" as const, label: "Aria", Icon: ChatIcon },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <nav
        className="w-full max-w-[430px] bg-white/95 backdrop-blur-lg pointer-events-auto"
        style={{ boxShadow: "var(--shadow-bottom-nav)" }}
      >
        <div className="flex items-stretch justify-around px-2 pt-2 pb-[calc(env(safe-area-inset-bottom)+8px)]">
          {items.map(({ href, label, Icon }) => {
            const active =
              pathname === href ||
              (href === "/home" && pathname?.startsWith("/journey")) ||
              (href !== "/home" && pathname?.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 flex-1 py-1.5 rounded-xl transition-colors",
                  active ? "text-teal-primary" : "text-text-tertiary",
                )}
              >
                <Icon className={cn("w-6 h-6", active && "stroke-[2.4]")} />
                <span className={cn("text-[10px] font-semibold tracking-wide", active && "text-teal-primary")}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
