import { cn } from "@/lib/cn";

const TONE = {
  teal: "bg-teal-light text-teal-primary-strong",
  coral: "bg-coral/15 text-coral",
  purple: "bg-kid-purple/20 text-kid-purple",
  green: "bg-success/15 text-success",
};

type Props = {
  name: string;
  age?: number;
  tone: keyof typeof TONE;
  size?: "sm" | "md" | "lg";
};

export function Avatar({ name, age, tone, size = "md" }: Props) {
  const initials = name
    .replace(/\([^)]*\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 1)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const sizeCls =
    size === "sm" ? "w-9 h-9 text-[13px]" : size === "lg" ? "w-14 h-14 text-[20px]" : "w-11 h-11 text-[15px]";

  const isKid = typeof age === "number" && age < 14;
  const emoji = isKid ? (age && age <= 10 ? "👦" : "🧒") : null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "rounded-full flex items-center justify-center font-bold shrink-0",
        TONE[tone],
        sizeCls,
      )}
    >
      {emoji ?? initials}
    </div>
  );
}
