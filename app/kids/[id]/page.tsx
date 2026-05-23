import Image from "next/image";
import Link from "next/link";
import { kidPatient, kidPhases } from "@/lib/mockData";

type Params = Promise<{ id: string }>;

export default async function KidHome({ params }: { params: Params }) {
  const { id } = await params;
  const name = id === "lorenzo" ? kidPatient.firstName : "amico";
  const currentLevel = 1;

  return (
    <main className="pb-12">
      <header className="px-5 pt-[calc(env(safe-area-inset-top)+16px)] pb-3 flex items-center justify-between">
        <Link
          href="/famiglia"
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
          aria-label="Indietro"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <div className="text-center">
          <p
            className="text-[11px] font-extrabold uppercase tracking-wider"
            style={{ color: "var(--kid-orange)" }}
          >
            Centro Maggiolini · KIDS
          </p>
        </div>
        <div className="w-10" />
      </header>

      <section className="px-5 text-center">
        <h1 className="text-[28px] font-extrabold leading-tight">
          Ciao {name}! <span className="float-slow inline-block">🌟</span>
        </h1>
        <p className="text-[14px] mt-1 opacity-80">Il tuo viaggio dei denti forti</p>
      </section>

      <section className="px-5 mt-5">
        <div className="relative rounded-[28px] overflow-hidden shadow-xl bg-white">
          <Image
            src="/cartoon-poltrona.jpg"
            alt="Dottoressa Stella e Lorenzo"
            width={1247}
            height={1247}
            className="w-full h-auto"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/95 to-transparent pt-12">
            <p
              className="text-[11px] font-extrabold uppercase tracking-wider"
              style={{ color: "var(--kid-orange)" }}
            >
              Livello {currentLevel} sbloccato!
            </p>
            <h2 className="text-[20px] font-extrabold leading-tight mt-0.5">
              La Dottoressa Stella ti aspetta
            </h2>
          </div>
        </div>
      </section>

      <section className="px-5 mt-5">
        <p className="text-[10px] font-extrabold uppercase tracking-wider opacity-60 mb-2 px-1">
          Il tuo percorso
        </p>
        <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-md">
          {Array.from({ length: 8 }).map((_, i) => {
            const unlocked = i < currentLevel + 2;
            const isCurrent = i === currentLevel;
            return (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
                  style={{
                    background: unlocked
                      ? isCurrent
                        ? "var(--kid-orange)"
                        : "var(--kid-sky)"
                      : "#F1F2F5",
                    color: unlocked ? "white" : "#C0C7CF",
                  }}
                >
                  {unlocked ? (i < currentLevel ? "⭐" : isCurrent ? "🦷" : "✨") : "🔒"}
                </div>
                <span className="text-[10px] font-bold mt-1 opacity-70">L{i + 1}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-5 mt-6 space-y-4">
        {kidPhases.map((k) => (
          <article
            key={k.id}
            className="rounded-3xl p-5 shadow-md"
            style={{
              background: k.state === "today" ? "var(--kid-orange-light)" : "white",
              border:
                k.state === "today"
                  ? "3px solid var(--kid-orange)"
                  : "2px solid var(--kid-sky)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-[11px] font-extrabold uppercase tracking-wider"
                style={{ color: "var(--kid-orange)" }}
              >
                Livello {k.levelNumber}
              </span>
              {k.state === "today" && (
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider rounded-full px-2 py-0.5"
                  style={{ background: "var(--kid-orange)", color: "white" }}
                >
                  Sta arrivando!
                </span>
              )}
            </div>
            <h3 className="text-[20px] font-extrabold leading-tight mb-2">{k.title}</h3>
            <p className="text-[14px] mb-3" style={{ color: "var(--kid-text)" }}>
              {k.intro}
            </p>
            <p className="text-[13px] font-bold mb-3" style={{ color: "var(--kid-orange)" }}>
              📅 {k.when}
            </p>
            <div className="rounded-2xl p-3 mb-3" style={{ background: "var(--kid-sky-light)" }}>
              <p className="text-[11px] font-extrabold uppercase tracking-wider mb-2 opacity-70">
                Cosa porto?
              </p>
              <ul className="space-y-1">
                {k.tips.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] font-semibold">
                    <span style={{ color: "var(--kid-green)" }}>✅</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl p-3 flex gap-2 items-start"
              style={{ background: "var(--kid-orange-light)" }}
            >
              <span className="text-2xl">🦷</span>
              <p className="text-[13px] font-semibold leading-snug">{k.fear}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="px-5 mt-6">
        <Link
          href="#"
          className="block rounded-3xl p-5 shadow-lg text-center"
          style={{
            background: "linear-gradient(135deg, var(--kid-orange), #FFB84D)",
            color: "white",
          }}
        >
          <p className="text-3xl mb-1">🦷💬</p>
          <p className="font-extrabold text-[16px]">Parla con il Dentino</p>
          <p className="text-[12px] opacity-90">Ti racconta tutto quello che vuoi sapere</p>
        </Link>
      </section>

      <section className="px-5 mt-5">
        <div className="rounded-2xl p-4" style={{ background: "white", border: "2px solid var(--kid-sky)" }}>
          <p className="text-[11px] font-extrabold uppercase tracking-wider opacity-60 mb-2">
            Per i grandi
          </p>
          <p className="text-[13px] mb-3" style={{ color: "var(--kid-text)" }}>
            Mamma o papà possono leggere tutto il tuo percorso dalla loro app.
          </p>
          <Link
            href="/famiglia"
            className="text-[13px] font-extrabold"
            style={{ color: "var(--kid-orange)" }}
          >
            Vai alla famiglia →
          </Link>
        </div>
      </section>
    </main>
  );
}
