import { PlayIcon } from "./icons/PhaseIcon";

type Props = {
  title: string;
  subtitle?: string;
  durationLabel?: string;
};

export function VideoPlaceholder({ title, subtitle, durationLabel = "90 sec" }: Props) {
  return (
    <button
      type="button"
      aria-label={`Riproduci video: ${title}${durationLabel ? ` (${durationLabel})` : ""}`}
      className="relative w-full rounded-2xl overflow-hidden text-left aspect-video bg-gradient-to-br from-teal-primary to-teal-primary-strong active:scale-[0.99] transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <circle cx="80" cy="20" r="35" fill="white" />
          <circle cx="15" cy="85" r="25" fill="white" />
        </svg>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <div className="flex items-end justify-between gap-3">
          <div>
            {subtitle && (
              <p className="text-[11px] font-bold uppercase tracking-wider opacity-80 mb-1">
                {subtitle}
              </p>
            )}
            <p className="text-[15px] font-semibold leading-tight">{title}</p>
          </div>
          <span className="text-[11px] font-semibold bg-white/20 backdrop-blur rounded-md px-2 py-0.5 shrink-0">
            {durationLabel}
          </span>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-white/95 text-teal-primary flex items-center justify-center shadow-lg">
          <PlayIcon className="w-7 h-7" />
        </div>
      </div>
    </button>
  );
}
