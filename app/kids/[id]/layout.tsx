export default function KidsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-[100dvh]"
      style={{
        background:
          "linear-gradient(180deg, var(--kid-sky-light) 0%, #ffffff 60%, var(--kid-orange-light) 100%)",
        fontFamily: "var(--font-nunito), system-ui, sans-serif",
        color: "var(--kid-text)",
      }}
    >
      {children}
    </div>
  );
}
