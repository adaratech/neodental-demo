type Props = {
  title: string;
  body: string;
  tone?: "info" | "today" | "warning";
};

export function NotificationBanner({ title, body, tone = "info" }: Props) {
  const map = {
    info: "bg-teal-light border-teal-mid/30 text-teal-primary-strong",
    today: "bg-teal-primary text-white border-transparent",
    warning: "bg-coral/10 border-coral/30 text-coral",
  };
  return (
    <div className={`rounded-2xl border px-4 py-3 ${map[tone]}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl shrink-0 leading-none mt-0.5">
          {tone === "warning" ? "⚠️" : "🔔"}
        </span>
        <div className="flex-1">
          <p className="text-[14px] font-semibold leading-tight">{title}</p>
          <p
            className={`text-[13px] leading-snug mt-0.5 ${tone === "today" ? "text-white/85" : "opacity-85"}`}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
