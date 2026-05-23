import Link from "next/link";
import { ToothLogo } from "@/components/icons/PhaseIcon";

export default function Page() {
  return (
    <main className="min-h-[100dvh] flex flex-col justify-between px-6 pt-[calc(env(safe-area-inset-top)+48px)] pb-[calc(env(safe-area-inset-bottom)+32px)] bg-gradient-to-b from-white via-enamel-warm to-teal-light/40">
      <div />
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-3xl bg-teal-primary text-white flex items-center justify-center shadow-[var(--shadow-card-strong)] mb-6">
          <ToothLogo className="w-12 h-12" />
        </div>
        <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-teal-primary mb-2">
          Centro Maggiolini
        </p>
        <h1 className="text-[28px] font-extrabold leading-[1.1] text-text-primary mb-3 max-w-xs">
          Il tuo percorso verso una bocca sana e duratura
        </h1>
        <p className="text-[15px] text-text-secondary max-w-xs">
          Salviamo i tuoi denti il più a lungo possibile. Prima di ogni cura, lavoriamo in un campo
          pulito.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-10">
        <Link
          href="/onboarding"
          className="w-full bg-teal-primary text-white font-semibold text-[16px] rounded-2xl py-4 text-center shadow-[var(--shadow-card-strong)] active:scale-[0.98] transition-transform"
        >
          Inizia il percorso
        </Link>
        <Link
          href="/home"
          className="w-full text-teal-primary font-semibold text-[15px] py-2 text-center"
        >
          Ho già un account →
        </Link>
        <p className="text-[11px] text-text-tertiary text-center mt-2">
          PWA powered by Portale Salute · v0.1 demo
        </p>
      </div>
    </main>
  );
}
