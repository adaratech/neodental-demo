import Link from "next/link";
import { HeaderBar } from "@/components/HeaderBar";
import { PhaseCard } from "@/components/PhaseCard";
import { NotificationBanner } from "@/components/NotificationBanner";
import { patient, phases, family } from "@/lib/mockData";
import { CalendarIcon, FamilyIcon, ChatIcon } from "@/components/icons/PhaseIcon";

export default function HomePage() {
  const completed = phases.filter((p) => p.state === "completed").length;
  const current = phases.find((p) => p.state === "today");
  const total = phases.length;

  return (
    <>
      <HeaderBar />

      <section className="px-5 pt-3 pb-2">
        <p className="text-[14px] text-text-secondary">Ciao, {patient.firstName}</p>
        <h1 className="text-[24px] font-extrabold leading-tight text-text-primary">
          Oggi è il giorno del campo pulito.
        </h1>
      </section>

      <section className="px-5 mt-5 space-y-3" aria-label="Stato del percorso">
        {current && (
          <NotificationBanner
            tone="today"
            title={`Oggi alle ${current.time}: ${current.label}`}
            body={`${current.operator ?? ""}${current.location ? ` · ${current.location}` : ""}`}
          />
        )}

        <div className="rounded-2xl bg-white border border-border-soft p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary" id="percorso-label">
              Il tuo percorso
            </p>
            <p className="text-[12px] font-semibold text-teal-primary-strong" aria-live="polite">
              {completed} di {total}
            </p>
          </div>
          <div
            role="progressbar"
            aria-valuenow={completed}
            aria-valuemin={0}
            aria-valuemax={total}
            aria-labelledby="percorso-label"
            aria-valuetext={`${completed} fasi completate su ${total}`}
            className="flex gap-1.5 mb-3"
          >
            {phases.map((p) => (
              <span
                key={p.id}
                className={
                  p.state === "completed"
                    ? "flex-1 h-1.5 rounded-full bg-success"
                    : p.state === "today"
                      ? "flex-1 h-1.5 rounded-full bg-teal-primary"
                      : p.state === "upcoming"
                        ? "flex-1 h-1.5 rounded-full bg-teal-mid/50"
                        : "flex-1 h-1.5 rounded-full bg-border-soft"
                }
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="text-[13px] text-text-secondary leading-snug">
            <span className="font-semibold text-text-primary">
              Prima visita e diagnosi completate.
            </span>{" "}
            Sei nella fase di <span className="text-teal-primary-strong font-semibold">RIO 1</span> —
            il primo livello del campo pulito.
          </p>
        </div>
      </section>

      <section className="px-5 mt-6" aria-label="Fasi del percorso">
        <h2 className="text-[12px] font-bold uppercase tracking-wider text-text-tertiary mb-3 px-1">
          Fasi del percorso
        </h2>
        <div className="space-y-2">
          {phases.map((p, i) => (
            <PhaseCard key={p.id} phase={p} index={i} />
          ))}
        </div>
      </section>

      <section className="px-5 mt-6 grid grid-cols-2 gap-3">
        <Link
          href="/agenda"
          className="rounded-2xl bg-white border border-border-soft p-4 active:scale-[0.98] transition-transform"
        >
          <div className="w-10 h-10 rounded-xl bg-teal-light text-teal-primary-strong flex items-center justify-center mb-3">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <p className="font-semibold text-[14px] text-text-primary">Piano igiene</p>
          <p className="text-[12px] text-text-secondary mt-0.5">Agenda annuale</p>
        </Link>
        <Link
          href="/famiglia"
          className="rounded-2xl bg-white border border-border-soft p-4 active:scale-[0.98] transition-transform"
        >
          <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-3">
            <FamilyIcon className="w-5 h-5" />
          </div>
          <p className="font-semibold text-[14px] text-text-primary">Famiglia</p>
          <p className="text-[12px] text-text-secondary mt-0.5">{family.length} persone</p>
        </Link>
      </section>

      <section className="px-5 mt-3">
        <Link
          href="/chat"
          className="block rounded-2xl bg-gradient-to-br from-teal-primary to-teal-primary-strong text-white p-4 active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
              <ChatIcon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[15px]">Parla con Aria</p>
              <p className="text-[12px] text-white/80">L&apos;assistente del centro Maggiolini</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </div>
        </Link>
      </section>

      <div className="h-6" />
    </>
  );
}
