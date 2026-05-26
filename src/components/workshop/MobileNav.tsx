import { activities, fgFor } from "@/lib/activities";
import { Home } from "lucide-react";

export function MobileNav({
  selected,
  onSelect,
  onHome,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
  onHome: () => void;
}) {
  return (
    <div className="lg:hidden sticky top-0 z-30 border-b-2 border-ink bg-ink">
      <div className="flex items-center gap-2 px-3 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-ink bg-[var(--yellow-brand)] text-ink font-black">
          N
        </div>
        <p className="text-white font-extrabold text-sm">Nudgeable Workshop</p>
      </div>
      <div className="flex gap-2 overflow-x-auto px-3 pb-3">
        <button
          type="button"
          onClick={onHome}
          className={`btn-press shrink-0 flex items-center gap-2 rounded-xl border-2 border-ink px-3 py-2 text-sm font-bold shadow-comic-sm ${
            selected === null ? "bg-[var(--yellow-brand)] text-ink" : "bg-white text-ink"
          }`}
        >
          <Home className="h-4 w-4" /> Home
        </button>
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
              className="btn-press shrink-0 flex items-center gap-2 rounded-xl border-2 border-ink px-3 py-2 text-sm font-bold shadow-comic-sm"
              style={{ background: bg, color: fg }}
            >
              <Icon className="h-4 w-4" />
              <span className="max-w-[140px] truncate">{a.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
