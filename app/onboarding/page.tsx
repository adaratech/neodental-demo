"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { cn } from "@/lib/cn";

const slides = [
  {
    eyebrow: "Il metodo conservativo",
    title: "Salviamo i tuoi denti il più a lungo possibile",
    body: "Prima di qualsiasi prestazione, lavoriamo in un campo pulito. Non è un optional: è la base di ogni trattamento di qualità.",
    illustration: "conservative",
  },
  {
    eyebrow: "Il full endorale",
    title: "Una radiografia per ogni singolo dente",
    body: "Molti centri prescrivono un'ortopantomografia. Noi prescriviamo un'indagine dente per dente. Vediamo quello che gli altri non vedono. Prima.",
    illustration: "rx",
  },
  {
    eyebrow: "Il direttore sanitario",
    title: "Ciao, sono Leonardo Tiziano",
    body: "Voglio spiegarti in due minuti come ci prendiamo cura di te.",
    illustration: "video",
  },
] as const;

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const total = slides.length;
  const slide = slides[step];

  const next = () => {
    if (step < total - 1) setStep(step + 1);
    else router.push("/home");
  };

  return (
    <main className="min-h-[100dvh] flex flex-col px-6 pt-[calc(env(safe-area-inset-top)+24px)] pb-[calc(env(safe-area-inset-bottom)+24px)] bg-gradient-to-b from-white to-teal-light/30">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Image src="/brand-mark.png" alt="" aria-hidden="true" width={28} height={28} />
          <span className="font-bold text-[14px] text-text-primary">Tiziano Odontoiatria</span>
        </div>
        <button
          type="button"
          onClick={() => router.push("/home")}
          className="text-[13px] text-text-tertiary font-medium"
        >
          Salta
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center mb-6">
          {slide.illustration === "conservative" && (
            <div className="relative w-full max-w-[260px] aspect-square">
              <div className="absolute inset-0 bg-teal-light rounded-[40px]" />
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full p-10 text-teal-primary" aria-hidden="true">
                <path
                  d="M100 30c-26 0-44 16-44 42 0 18 8 36 14 56 4 14 8 32 18 32 8 0 8-16 12-16s4 16 12 16c10 0 14-18 18-32 6-20 14-38 14-56 0-26-18-42-44-42z"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M100 60v80"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="0"
                  strokeLinecap="round"
                />
                <g className="text-success">
                  <circle cx="100" cy="100" r="36" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path
                    d="M88 100l8 8 16-16"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </g>
              </svg>
            </div>
          )}
          {slide.illustration === "rx" && (
            <div className="relative w-full max-w-[280px] aspect-square">
              <div className="absolute inset-0 bg-teal-light rounded-[40px]" />
              <div className="absolute inset-8 grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "bg-white border-2 rounded-md flex items-center justify-center",
                      i === 5 ? "border-coral" : "border-teal-mid/50",
                    )}
                  >
                    <svg viewBox="0 0 24 24" className="w-3/4 h-3/4">
                      <path
                        d="M12 4c-3 0-5 1-5 4 0 2 1 4 1.5 6 .5 1.5 1 3 2 3 .8 0 .8-1.5 1.5-1.5s.7 1.5 1.5 1.5c1 0 1.5-1.5 2-3 .5-2 1.5-4 1.5-6 0-3-2-4-5-4z"
                        fill={i === 5 ? "var(--coral)" : "var(--teal-mid)"}
                        opacity={i === 5 ? "1" : "0.7"}
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          )}
          {slide.illustration === "video" && (
            <div className="w-full max-w-[320px]">
              <VideoPlaceholder
                title="Conosci il Dott. Leonardo"
                subtitle="Il tuo direttore sanitario"
                durationLabel="2 min"
                videoUrl="/videos/dott-leonardo-intro.mp4"
              />
            </div>
          )}
        </div>

        <div className="text-center mb-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-teal-primary mb-2">
            {slide.eyebrow}
          </p>
          <h2
            className="text-[24px] font-extrabold leading-tight text-text-primary mb-3"
            aria-live="polite"
            aria-atomic="true"
          >
            {slide.title}
          </h2>
          <p className="text-[15px] text-text-secondary leading-relaxed max-w-sm mx-auto">
            {slide.body}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-1.5" role="tablist" aria-label="Passaggi onboarding">
          {slides.map((_, i) => (
            <span
              key={i}
              role="tab"
              aria-selected={i === step}
              aria-label={`Passaggio ${i + 1} di ${slides.length}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === step ? "w-6 bg-teal-primary" : "w-2 bg-border-strong",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="w-full bg-teal-primary text-white font-semibold text-[16px] rounded-2xl py-4 shadow-[var(--shadow-card-strong)] active:scale-[0.98] transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-primary"
        >
          {step === total - 1 ? "Entra nel tuo percorso di cura" : "Avanti"}
        </button>
        {step === total - 1 && (
          <p className="text-[11px] text-text-tertiary text-center">
            Procedendo accetti il trattamento dei dati come descritto nella{" "}
            <a href="/privacy" className="underline text-teal-primary">
              informativa privacy
            </a>
            .
          </p>
        )}
      </div>
    </main>
  );
}
