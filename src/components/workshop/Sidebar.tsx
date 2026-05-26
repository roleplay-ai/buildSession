import { activities, fgFor } from "@/lib/activities";
import { Home } from "lucide-react";

export function Sidebar({
  selected,
  onSelect,
  onHome,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
  onHome: () => void;
}) {
  return (
    <aside className="hidden lg:flex w-72 shrink-0 flex-col gap-4 border-r-2 border-ink bg-[#2E2730] p-4 sticky top-0 h-screen overflow-y-auto shadow-[inset_-1px_0_0_rgba(255,255,255,0.04)]">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-ink bg-[var(--yellow-brand)] text-ink font-black text-xl shadow-comic-sm">
          N
        </div>
        <div className="leading-tight">
          <p className="text-white font-extrabold">Nudgeable</p>
          <p className="text-white/60 text-xs">Workshop</p>
        </div>
      </div>

      {/* Home */}
      <button
        type="button"
        onClick={onHome}
        className={`btn-press flex items-center gap-3 rounded-xl border-2 border-ink px-3 py-2 font-bold shadow-comic-sm ${
          selected === null ? "bg-[var(--yellow-brand)] text-ink" : "bg-white text-ink"
        }`}
      >
        <Home className="h-4 w-4" />
        Home
      </button>

      <div className="mt-2 text-xs uppercase tracking-wider text-white/50 font-bold">
        Activities
      </div>

      <nav className="flex flex-col gap-3">
        {activities.map((a) => {
          const Icon = a.icon;
          const isActive = selected === a.id;
          const bg = isActive ? a.color : "#FFF6CF";
          const fg = isActive ? fgFor(a.color) : "#221D23";
          return (
            <button
              key={a.id}
              type="button"
              onClick={() => onSelect(a.id)}
              className="card-hover text-left rounded-2xl border-2 border-ink p-3 shadow-comic-sm flex gap-3 items-start"
              style={{ background: bg, color: fg }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-ink"
                style={{ background: a.color, color: fgFor(a.color) }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-sm">{a.title}</p>
                <p className="text-xs opacity-80 mt-0.5">{a.tool}</p>
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
