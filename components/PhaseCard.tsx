import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Phase, PhaseState } from "@/lib/mockData";
import { PhaseIcon } from "./icons/PhaseIcon";

const STATE_LABEL: Record<PhaseState, string> = {
  locked: "In attesa",
  upcoming: "In programma",
  today: "Oggi",
  completed: "Completata",
};

type Props = {
  phase: Phase;
  index: number;
};

export function PhaseCard({ phase, index }: Props) {
  const state = phase.state;
  const isLocked = state === "locked";
  const isToday = state === "today";
  const isCompleted = state === "completed";

  return (
    <Link
      href={isLocked ? "#" : (`/journey/fase/${phase.id}` as const)}
      aria-disabled={isLocked}
      className={cn(
        "block rounded-2xl border transition-transform active:scale-[0.98]",
        "p-4 flex gap-3 items-center",
        isCompleted && "bg-white border-border-soft",
        state === "upcoming" && "bg-teal-light/40 border-teal-light",
        isToday && "bg-white border-teal-primary border-2 shadow-[var(--shadow-card-strong)]",
        isLocked && "bg-white/60 border-border-soft opacity-60 pointer-events-none",
      )}
    >
      <div
        className={cn(
          "w-11 h-11 rounded-xl shrink-0 flex items-center justify-center",
          isCompleted && "bg-success/10 text-success",
          state === "upcoming" && "bg-teal-light text-teal-primary-strong",
          isToday && "bg-teal-primary text-white pulse-today",
          isLocked && "bg-border-soft text-text-tertiary",
        )}
      >
        {isCompleted ? (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
            <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : isLocked ? (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
            <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="2" />
          </svg>
        ) : (
          <PhaseIcon iconKey={phase.iconKey} className="w-6 h-6" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary">
            Fase {index}
          </span>
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-wider",
              isToday ? "text-coral" : "text-text-tertiary",
            )}
          >
            · {STATE_LABEL[state]}
          </span>
        </div>
        <h3 className="font-semibold text-[15px] text-text-primary leading-tight truncate">
          {phase.label}
        </h3>
        <p className="text-[13px] text-text-secondary truncate mt-0.5">
          {phase.date ? `${phase.date}${phase.time ? ` · ${phase.time}` : ""}` : phase.subtitle}
        </p>
      </div>
      {!isLocked && (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-text-tertiary shrink-0" aria-hidden>
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </Link>
  );
}
