import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-[100dvh] flex flex-col justify-between px-6 pt-[calc(env(safe-area-inset-top)+48px)] pb-[calc(env(safe-area-inset-bottom)+32px)] bg-gradient-to-b from-white via-enamel-warm to-teal-light/40">
      <div />
      <div className="flex flex-col items-center text-center">
        <div className="mb-6">
          <Image
            src="/brand-mark.png"
            alt="Tiziano Odontoiatria"
            width={112}
            height={112}
            priority
            className="drop-shadow-[var(--shadow-card-strong)]"
          />
        </div>
        <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-teal-primary mb-2">
          Tiziano Odontoiatria
        </p>
        <h1 className="text-[28px] font-extrabold leading-[1.1] text-text-primary mb-3 max-w-xs">
          Il dentista che non estrae finché c&apos;è qualcosa da salvare.
        </h1>
        <p className="text-[15px] text-text-secondary max-w-sm">
          Il nostro protocollo inizia sempre con il campo pulito: due sedute di igiene profonda
          prima di qualsiasi cura. Non è un optional. È il motivo per cui i nostri risultati
          durano.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-10">
        <Link
          href="/onboarding"
          className="w-full bg-teal-primary text-white font-semibold text-[16px] rounded-2xl py-4 text-center shadow-[var(--shadow-card-strong)] active:scale-[0.98] transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-primary"
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
          PWA powered by Portale Salute · v0.3 demo ·{" "}
          <Link href="/privacy" className="underline">
            Privacy
          </Link>
        </p>
      </div>
    </main>
  );
}
