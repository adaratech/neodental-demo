import { cn } from "@/lib/cn";
import type { Content } from "@/lib/mockData";
import { PlayIcon } from "./icons/PhaseIcon";

const TYPE_BADGE: Record<Content["type"], { label: string; color: string }> = {
  video: { label: "Video", color: "bg-coral/10 text-coral" },
  article: { label: "Da leggere", color: "bg-teal-light text-teal-primary-strong" },
  infographic: { label: "Infografica", color: "bg-gum-pink/40 text-text-primary" },
};

export function ContentCard({ content }: { content: Content }) {
  const badge = TYPE_BADGE[content.type];
  return (
    <article className="rounded-2xl bg-white border border-border-soft p-4 active:scale-[0.99] transition-transform">
      <div className="flex items-start gap-3">
        {content.type === "video" ? (
          <div className="w-14 h-14 rounded-xl bg-teal-primary text-white flex items-center justify-center shrink-0">
            <PlayIcon className="w-7 h-7" />
          </div>
        ) : (
          <div className={cn("w-14 h-14 rounded-xl shrink-0 flex items-center justify-center", badge.color)}>
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
              <path
                d="M6 4h9l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M14 4v5h5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={cn("text-[10px] font-bold uppercase tracking-wider rounded-md px-1.5 py-0.5", badge.color)}>
              {badge.label}
            </span>
            {content.readingTime && (
              <span className="text-[11px] text-text-tertiary">{content.readingTime} min</span>
            )}
          </div>
          <h3 className="font-semibold text-[15px] text-text-primary leading-snug">
            {content.title}
          </h3>
          <p className="text-[13px] text-text-secondary mt-1 leading-snug">{content.excerpt}</p>
        </div>
      </div>
    </article>
  );
}
