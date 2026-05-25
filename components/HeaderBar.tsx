import Link from "next/link";
import { ToothLogo } from "./icons/PhaseIcon";

type Props = {
  variant?: "default" | "back";
  title?: string;
  subtitle?: string;
  backHref?: string;
};

export function HeaderBar({ variant = "default", title, subtitle, backHref = "/home" }: Props) {
  if (variant === "back") {
    return (
      <header className="sticky top-0 z-30 bg-enamel-warm/90 backdrop-blur-md px-4 pt-[calc(env(safe-area-inset-top)+12px)] pb-3">
        <div className="flex items-center gap-3">
          <Link
            href={backHref as never}
            className="w-9 h-9 rounded-full bg-white border border-border-soft flex items-center justify-center text-text-primary active:scale-95 transition-transform"
            aria-label="Indietro"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="flex-1 min-w-0">
            {subtitle && (
              <p className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">
                {subtitle}
              </p>
            )}
            {title && (
              <h1 className="text-[17px] font-semibold text-text-primary truncate leading-tight">
                {title}
              </h1>
            )}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="px-5 pt-[calc(env(safe-area-inset-top)+16px)] pb-2 flex items-center justify-between">
      <div className="flex items-center gap-2 text-teal-primary">
        <ToothLogo className="w-7 h-7" />
        <div>
          <p className="text-[15px] font-bold text-text-primary leading-tight">Tiziano Odontoiatria</p>
          <p className="text-[11px] text-text-tertiary leading-tight">Il tuo percorso di cura</p>
        </div>
      </div>
      <Link
        href="/profilo"
        className="w-9 h-9 rounded-full bg-teal-light text-teal-primary flex items-center justify-center font-semibold text-[14px]"
        aria-label="Profilo"
      >
        R
      </Link>
    </header>
  );
}
