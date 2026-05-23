type Props = { iconKey: string; className?: string };

const stroke = "currentColor";

export function PhaseIcon({ iconKey, className }: Props) {
  const cls = className ?? "w-6 h-6";
  switch (iconKey) {
    case "welcome":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <path d="M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M3 7l9-5 9 5" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="13" r="1.4" fill={stroke} />
        </svg>
      );
    case "mirror":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <circle cx="9" cy="9" r="5" stroke={stroke} strokeWidth="2" />
          <path d="M12.5 12.5l7 7" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <circle cx="9" cy="9" r="2" fill={stroke} opacity="0.2" />
        </svg>
      );
    case "curette":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <path d="M5 19l8-8" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M12 12c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M3 21c1.5-.5 3-1.5 4-3" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case "curette-deep":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <path d="M4 18l7-7" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M7 21l7-7" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M11 11c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M14 14c1.2-1.2 3.2-1.2 4.4 0s1.2 3.2 0 4.4" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    case "tooth-check":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <path d="M12 3c-3.5 0-6 2-6 5.5 0 2.5 1 5 1.8 7.5.6 2 1 4 2.4 4 1.2 0 1.2-2 1.8-2s.6 2 1.8 2c1.4 0 1.8-2 2.4-4 .8-2.5 1.8-5 1.8-7.5C18 5 15.5 3 12 3z" stroke={stroke} strokeWidth="1.6" />
          <path d="M9.5 11l2 2 3.5-3.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chair":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <path d="M4 17v-3a3 3 0 0 1 3-3h3v-4a2 2 0 0 1 4 0v4h3a3 3 0 0 1 3 3v3" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
          <path d="M3 21h18" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M6 17v4M18 17v4" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "bandage":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <rect x="3" y="9" width="18" height="6" rx="3" stroke={stroke} strokeWidth="2" transform="rotate(-20 12 12)" />
          <circle cx="10" cy="12" r="0.8" fill={stroke} />
          <circle cx="14" cy="12" r="0.8" fill={stroke} />
          <circle cx="12" cy="10.5" r="0.8" fill={stroke} />
          <circle cx="12" cy="13.5" r="0.8" fill={stroke} />
        </svg>
      );
    case "calendar-tooth":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <rect x="3" y="5" width="18" height="16" rx="2" stroke={stroke} strokeWidth="2" />
          <path d="M3 10h18M8 3v4M16 3v4" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M12 13c-1.5 0-2.5 1-2.5 2.5 0 1 .4 2 .8 3 .3.7.5 1.5 1.2 1.5.5 0 .5-.8.5-.8s0 .8.5.8c.7 0 .9-.8 1.2-1.5.4-1 .8-2 .8-3 0-1.5-1-2.5-2.5-2.5z" stroke={stroke} strokeWidth="1.4" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="2" />
        </svg>
      );
  }
}

export function ToothLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 5c-4.5 0-8 2.8-8 7.2 0 3 1.3 6 2.4 9 .8 2.4 1.4 5 3.2 5 1.5 0 1.5-2.5 2.4-2.5s.9 2.5 2.4 2.5c1.8 0 2.4-2.6 3.2-5 1.1-3 2.4-6 2.4-9C24 7.8 21 5 16 5z"
        fill="currentColor"
      />
      <path d="M11 11c1.5-1 3-1.5 5-1.5s3.5.5 5 1.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 11l8-6 8 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function JourneyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 6h6a4 4 0 0 1 4 4v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function FamilyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M2 20c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13.5 19c.5-2 2-3 3.5-3s3 1 3.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
    </svg>
  );
}
