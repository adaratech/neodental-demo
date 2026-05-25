import { notFound } from "next/navigation";
import Link from "next/link";
import { HeaderBar } from "@/components/HeaderBar";
import { ContentCard } from "@/components/ContentCard";
import { Checklist } from "@/components/Checklist";
import { NotificationBanner } from "@/components/NotificationBanner";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { phases, type Phase, type PhaseId } from "@/lib/mockData";
import { PhaseIcon } from "@/components/icons/PhaseIcon";

export function generateStaticParams() {
  return phases.map((p) => ({ id: p.id }));
}

type Params = Promise<{ id: string }>;

export default async function PhasePage({ params }: { params: Params }) {
  const { id } = await params;
  const phase = phases.find((p) => p.id === id) as Phase | undefined;
  if (!phase) notFound();

  const STATE_BADGE = {
    completed: { label: "✓ Completata", cls: "bg-success/12 text-success" },
    today: { label: "OGGI", cls: "bg-coral text-white" },
    upcoming: { label: "In programma", cls: "bg-teal-light text-teal-primary-strong" },
    locked: { label: "In attesa", cls: "bg-border-soft text-text-secondary" },
  } as const;
  const badge = STATE_BADGE[phase.state];
  const phaseIndex = phases.findIndex((p) => p.id === phase.id);
  const next = phases[phaseIndex + 1];
  const videoContent = phase.contents.find((c) => c.type === "video");
  const otherContents = phase.contents.filter((c) => c.type !== "video");

  return (
    <>
      <HeaderBar
        variant="back"
        title={phase.label}
        subtitle={`Fase ${phaseIndex} · Tiziano Odontoiatria`}
      />

      <section className="px-5 pt-2 pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-primary text-white flex items-center justify-center">
            <PhaseIcon iconKey={phase.iconKey} className="w-6 h-6" />
          </div>
          <div>
            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider rounded-md px-2 py-0.5 ${badge.cls}`}>
              {badge.label}
            </span>
            <p className="text-[13px] text-text-secondary mt-1">{phase.subtitle}</p>
          </div>
        </div>

        {phase.state === "today" && phase.date && (
          <NotificationBanner
            tone="today"
            title={`${phase.date} alle ${phase.time}`}
            body={`${phase.operator}${phase.location ? ` · ${phase.location}` : ""}`}
          />
        )}
        {phase.state === "upcoming" && phase.date && (
          <NotificationBanner
            tone="info"
            title={`${phase.date} alle ${phase.time}`}
            body={`${phase.operator}${phase.location ? ` · ${phase.location}` : ""}`}
          />
        )}

        {phase.hero && (
          <p className="text-[15px] text-text-primary leading-relaxed mt-4">
            {phase.hero}
          </p>
        )}
      </section>

      {videoContent && (
        <section className="px-5 mb-5">
          <VideoPlaceholder
            title={videoContent.title}
            subtitle="Il dottore ti spiega"
            durationLabel={videoContent.readingTime ? `${videoContent.readingTime} min` : "90 sec"}
          />
        </section>
      )}

      {otherContents.length > 0 && (
        <section className="px-5 mb-5">
          <h2 className="text-[12px] font-bold uppercase tracking-wider text-text-tertiary mb-3 px-1">
            Approfondimenti
          </h2>
          <div className="space-y-3">
            {otherContents.map((c) => (
              <ContentCard key={c.id} content={c} />
            ))}
          </div>
        </section>
      )}

      {phase.checklist.length > 0 && (
        <section className="px-5 mb-5">
          <h2 className="text-[12px] font-bold uppercase tracking-wider text-text-tertiary mb-3 px-1">
            {phase.state === "completed" ? "Checklist completata" : "Cosa preparare"}
          </h2>
          <Checklist items={phase.checklist} />
        </section>
      )}

      {phase.warning && (
        <section className="px-5 mb-5">
          <NotificationBanner tone="warning" title="In caso di emergenza" body={phase.warning} />
        </section>
      )}

      {next && next.state !== "locked" && (
        <section className="px-5 mb-5">
          <Link
            href={`/journey/fase/${next.id as PhaseId}` as never}
            className="block rounded-2xl bg-white border border-border-soft p-4 active:scale-[0.99] transition-transform"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary mb-1">
              Prossima fase
            </p>
            <p className="font-semibold text-[15px] text-text-primary">{next.label}</p>
            <p className="text-[12px] text-text-secondary mt-0.5">
              {next.date ? `${next.date}${next.time ? ` · ${next.time}` : ""}` : next.subtitle}
            </p>
          </Link>
        </section>
      )}

      <section className="px-5 mb-8">
        <Link
          href="/chat"
          className="flex items-center justify-between rounded-2xl bg-teal-light text-teal-primary-strong p-4"
        >
          <div>
            <p className="font-semibold text-[14px]">Hai domande su questa fase?</p>
            <p className="text-[12px] opacity-80">Parla con Sofia, l&apos;assistente del centro</p>
          </div>
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </Link>
      </section>
    </>
  );
}
