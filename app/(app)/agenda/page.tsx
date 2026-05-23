import { HeaderBar } from "@/components/HeaderBar";
import { agenda } from "@/lib/mockData";
import { cn } from "@/lib/cn";

const MONTHS_2026 = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];

const STATUS = {
  done: { dot: "bg-success", label: "Completato", labelCls: "bg-success/12 text-success" },
  today: { dot: "bg-coral", label: "Oggi", labelCls: "bg-coral text-white" },
  planned: { dot: "bg-teal-primary", label: "In programma", labelCls: "bg-teal-light text-teal-primary-strong" },
  future: { dot: "bg-teal-mid/50", label: "Pianificato", labelCls: "bg-border-soft text-text-secondary" },
} as const;

function whatsappLink(eventTitle: string) {
  const text = encodeURIComponent(
    `Ciao, sono Raffaello Bianchi, paziente del Dott. Maggiolini. Vorrei prenotare ${eventTitle}.`,
  );
  return `https://wa.me/393331234567?text=${text}`;
}

export default function AgendaPage() {
  const events2026 = agenda.filter((e) => e.year === 2026);
  const events2027plus = agenda.filter((e) => e.year >= 2027);

  return (
    <>
      <HeaderBar variant="back" title="Piano igiene annuale" subtitle="La tua agenda permanente" />

      <section className="px-5 mt-2 mb-5">
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Non aspettare di avere un problema. Il tuo piano di mantenimento è già scritto:{" "}
          <span className="font-semibold text-text-primary">
            ablazione ogni 6 mesi, levigatura una volta l&apos;anno, controllo radiografico ogni 2 anni
          </span>
          .
        </p>
      </section>

      <section className="px-5 mb-6">
        <div className="rounded-2xl bg-white border border-border-soft p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary mb-3">
            Timeline 2026
          </p>
          <div className="space-y-2">
            {MONTHS_2026.map((m, i) => {
              const monthEvents = events2026.filter((e) => e.month === i + 1);
              const isCurrent = i + 1 === 5;
              return (
                <div key={m} className="flex items-center gap-3">
                  <span
                    className={cn(
                      "text-[11px] font-bold w-9 shrink-0",
                      isCurrent ? "text-coral" : "text-text-tertiary",
                    )}
                  >
                    {m}
                  </span>
                  <div className="flex-1 h-px bg-border-soft relative">
                    {monthEvents.map((e, j) => (
                      <span
                        key={e.id}
                        className={cn(
                          "absolute -top-1.5 w-3 h-3 rounded-full",
                          STATUS[e.status].dot,
                        )}
                        style={{ left: `${10 + j * 18}%` }}
                        aria-label={e.title}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 mb-6">
        <h2 className="text-[12px] font-bold uppercase tracking-wider text-text-tertiary mb-3 px-1">
          Prossimi appuntamenti
        </h2>
        <div className="space-y-3">
          {[...events2026.filter((e) => e.status !== "done"), ...events2027plus].slice(0, 5).map((e) => {
            const s = STATUS[e.status];
            const canBook = e.status === "planned" || e.status === "future";
            return (
              <div key={e.id} className="rounded-2xl bg-white border border-border-soft p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-text-tertiary mb-0.5">
                      {e.monthLabel}
                    </p>
                    <h3 className="font-semibold text-[15px] text-text-primary leading-tight">
                      {e.title}
                    </h3>
                    <p className="text-[12px] text-text-secondary mt-0.5">{e.detail}</p>
                  </div>
                  <span
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider rounded-md px-2 py-0.5 shrink-0",
                      s.labelCls,
                    )}
                  >
                    {s.label}
                  </span>
                </div>
                {canBook && (
                  <div className="flex gap-2 pt-3 border-t border-border-soft/60">
                    <a
                      href={whatsappLink(e.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-teal-primary text-white text-[13px] font-semibold rounded-xl py-2.5 text-center active:scale-[0.98] transition-transform"
                    >
                      Prenota su WhatsApp
                    </a>
                    <button
                      type="button"
                      className="flex-1 bg-white border border-border-strong text-text-primary text-[13px] font-semibold rounded-xl py-2.5"
                    >
                      Sposta
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-5 mb-8">
        <div className="rounded-2xl bg-teal-light/40 border border-teal-mid/30 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-teal-primary-strong mb-1">
            Vuoi la tua igienista?
          </p>
          <p className="text-[13px] text-text-primary leading-relaxed">
            La prima disponibilità del centro non vincola al medico. Se vuoi mantenere la stessa
            Dott.ssa Ferrari, chiama il centro al 02 1234 5678.
          </p>
        </div>
      </section>
    </>
  );
}
