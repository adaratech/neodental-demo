import Link from "next/link";
import { HeaderBar } from "@/components/HeaderBar";
import { Avatar } from "@/components/Avatar";
import { family, phases } from "@/lib/mockData";

export default function FamigliaPage() {
  return (
    <>
      <HeaderBar variant="back" title="La tua famiglia" subtitle="Tutti i percorsi in un solo posto" />

      <section className="px-5 mt-2 mb-4">
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Hai portato tutta la famiglia al centro. Da qui segui{" "}
          <span className="font-semibold text-text-primary">{family.length} percorsi</span> — il
          tuo e quello dei tuoi figli.
        </p>
      </section>

      <section className="px-5 space-y-3 mb-6">
        {family.map((m) => {
          const phase = m.currentPhase ? phases.find((p) => p.id === m.currentPhase) : null;
          const isMe = m.id === "raffaello";
          const targetHref = m.useKidMode ? `/kids/${m.id}` : "/home";
          return (
            <Link
              key={m.id}
              href={targetHref as never}
              className="block rounded-2xl bg-white border border-border-soft p-4 active:scale-[0.99] transition-transform"
            >
              <div className="flex items-center gap-3 mb-2">
                <Avatar name={m.name} age={isMe ? undefined : m.age} tone={m.avatarTone} size="lg" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-[16px] text-text-primary leading-tight">
                      {m.name}
                    </h3>
                    {m.useKidMode && (
                      <span className="text-[10px] font-bold uppercase tracking-wider rounded-md px-1.5 py-0.5 bg-kid-orange/15 text-kid-orange">
                        🎨 Cartoon
                      </span>
                    )}
                    {!isMe && !m.ownsPhone && (
                      <span className="text-[10px] font-bold uppercase tracking-wider rounded-md px-1.5 py-0.5 bg-border-soft text-text-secondary">
                        Sotto tuo profilo
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-text-tertiary leading-tight">
                    {m.age} anni · {m.relation}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 pt-2 border-t border-border-soft/60">
                <div className="flex-1 min-w-0">
                  {phase ? (
                    <>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">
                        Stato corrente
                      </p>
                      <p className="text-[13px] font-semibold text-text-primary leading-tight">
                        {m.status}
                      </p>
                    </>
                  ) : (
                    <p className="text-[13px] text-text-secondary">{m.status}</p>
                  )}
                </div>
                <span className="text-[12px] font-semibold text-teal-primary-strong shrink-0">
                  Apri →
                </span>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="px-5 mb-8">
        <button
          type="button"
          className="w-full rounded-2xl border-2 border-dashed border-border-strong bg-white/40 p-4 flex items-center gap-3 active:scale-[0.99] transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-primary"
        >
          <div className="w-11 h-11 rounded-full bg-teal-light text-teal-primary-strong flex items-center justify-center text-2xl font-bold">
            +
          </div>
          <div className="text-left flex-1">
            <p className="font-semibold text-[15px] text-text-primary">Aggiungi un familiare</p>
            <p className="text-[12px] text-text-secondary">
              Coniuge, figli, genitori. Decide tu chi accompagnare.
            </p>
          </div>
        </button>
      </section>

      <section className="px-5 mb-8">
        <div className="rounded-2xl bg-teal-light/50 border border-teal-mid/30 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-teal-primary-strong mb-1">
            Come funziona
          </p>
          <p className="text-[13px] text-text-primary leading-relaxed">
            I figli sotto i 10 anni vedono il loro percorso dentro la tua app. Per i ragazzi più grandi
            puoi invitare un numero di telefono dedicato — il loro percorso resta separato, ma tu lo
            segui sempre da qui.
          </p>
        </div>
      </section>
    </>
  );
}
