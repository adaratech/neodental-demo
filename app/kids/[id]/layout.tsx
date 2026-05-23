export default function KidsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-[100dvh] font-kid text-kid-text"
      style={{
        background:
          "linear-gradient(180deg, var(--kid-sky-light) 0%, #ffffff 60%, var(--kid-orange-light) 100%)",
      }}
    >
      {children}
    </div>
  );
}
