"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { ChecklistItem } from "@/lib/mockData";

export function Checklist({ items, theme = "adult" }: { items: ChecklistItem[]; theme?: "adult" | "kid" }) {
  const [state, setState] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(items.map((i) => [i.id, i.completed]))
  );

  return (
    <ul className="space-y-2">
      {items.map((item) => {
        const done = state[item.id];
        return (
          <li key={item.id}>
            <button
              type="button"
              aria-pressed={done}
              aria-label={`${item.label}${done ? ", completato" : ""}`}
              onClick={() => setState((s) => ({ ...s, [item.id]: !s[item.id] }))}
              className={cn(
                "w-full flex items-center gap-3 rounded-xl p-3 text-left transition-colors",
                theme === "adult"
                  ? done
                    ? "bg-success/8 border border-success/30"
                    : "bg-white border border-border-soft hover:border-teal-mid"
                  : done
                    ? "bg-kid-green/15 border-2 border-kid-green/40"
                    : "bg-white border-2 border-kid-sky",
              )}
            >
              <span
                className={cn(
                  "w-6 h-6 rounded-md shrink-0 flex items-center justify-center transition-colors",
                  theme === "adult"
                    ? done
                      ? "bg-success text-white"
                      : "border-2 border-border-strong bg-white"
                    : done
                      ? "bg-kid-green text-white"
                      : "border-2 border-kid-sky bg-white",
                )}
              >
                {done && (
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden>
                    <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span
                className={cn(
                  "flex-1 text-[14px] leading-snug",
                  done && theme === "adult" && "text-text-secondary",
                  done && theme === "kid" && "text-kid-text/60",
                )}
              >
                {item.label}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
