import { BottomNav } from "@/components/BottomNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] pb-[calc(env(safe-area-inset-bottom)+76px)]">
      {children}
      <BottomNav />
    </div>
  );
}
