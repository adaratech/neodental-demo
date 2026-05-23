"use client";

import { useState, useRef, useEffect } from "react";
import { HeaderBar } from "@/components/HeaderBar";
import { ariaFaqs } from "@/lib/mockData";
import { cn } from "@/lib/cn";

type Msg = { role: "aria" | "user"; text: string };

const WELCOME: Msg = {
  role: "aria",
  text:
    "Ciao Raffaello. Sono Aria — conosco il tuo percorso al Centro Maggiolini. Hai una domanda su RIO 1, sul campo pulito o su come prepararti? Sono qui.",
};

const FALLBACK =
  "Non ho ancora questa informazione. Chiama il centro al 02 1234 5678 — ti rispondiamo subito.";

export default function ChatPage() {
  const [msgs, setMsgs] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [used, setUsed] = useState<Set<string>>(new Set());

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs]);

  const ask = (q: string) => {
    const faq = ariaFaqs.find((f) => f.question === q);
    setMsgs((m) => [
      ...m,
      { role: "user", text: q },
      { role: "aria", text: faq?.answer ?? FALLBACK },
    ]);
    setUsed((s) => new Set(s).add(q));
    setInput("");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const match = ariaFaqs.find((f) =>
      f.question.toLowerCase().includes(input.trim().toLowerCase().slice(0, 6)),
    );
    setMsgs((m) => [
      ...m,
      { role: "user", text: input.trim() },
      { role: "aria", text: match?.answer ?? FALLBACK },
    ]);
    setInput("");
  };

  const remainingChips = ariaFaqs.filter((f) => !used.has(f.question)).slice(0, 4);

  return (
    <div className="flex flex-col h-[100dvh]">
      <HeaderBar variant="back" title="Aria" subtitle="Assistente · Centro Maggiolini" />

      <div ref={scrollRef} className="flex-1 min-h-0 px-4 pb-4 space-y-3 overflow-y-auto" role="log" aria-live="polite" aria-label="Conversazione con Aria">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={cn(
              "flex gap-2",
              m.role === "user" ? "justify-end" : "justify-start",
            )}
          >
            {m.role === "aria" && (
              <div aria-hidden="true" className="w-8 h-8 rounded-full bg-teal-primary text-white flex items-center justify-center text-[13px] font-bold shrink-0">
                A
              </div>
            )}
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2.5 text-[14px] leading-snug",
                m.role === "aria"
                  ? "bg-white border border-border-soft text-text-primary rounded-tl-md"
                  : "bg-teal-primary text-white rounded-tr-md",
              )}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {remainingChips.length > 0 && (
        <div className="px-4 mb-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary mb-2 px-1">
            Domande frequenti
          </p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {remainingChips.map((f) => (
              <button
                key={f.question}
                type="button"
                onClick={() => ask(f.question)}
                className="shrink-0 bg-teal-light text-teal-primary-strong text-[13px] font-semibold px-3 py-2 min-h-[44px] rounded-full border border-teal-mid/20 active:scale-95 transition-transform"
              >
                {f.question}
              </button>
            ))}
          </div>
        </div>
      )}

      <form
        onSubmit={submit}
        className="shrink-0 px-4 pb-[calc(env(safe-area-inset-bottom)+84px)] pt-3 bg-gradient-to-t from-enamel-warm via-enamel-warm to-transparent"
      >
        <div className="flex items-center gap-2 bg-white border border-border-soft rounded-full px-4 py-1.5 shadow-sm">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Scrivi la tua domanda..."
            aria-label="Scrivi la tua domanda ad Aria"
            className="flex-1 bg-transparent outline-none text-[14px] py-2 placeholder:text-text-tertiary"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-9 h-9 rounded-full bg-teal-primary text-white flex items-center justify-center disabled:opacity-40 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-primary"
            aria-label="Invia messaggio"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path
                d="M4 12l16-7-7 16-2-7-7-2z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-text-tertiary text-center mt-2">
          Aria risponde solo dalla knowledge base del centro
        </p>
      </form>
    </div>
  );
}
