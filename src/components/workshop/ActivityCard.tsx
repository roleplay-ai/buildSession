import type { Activity } from "@/lib/activities";
import { fgFor } from "@/lib/activities";
import { ArrowRight } from "lucide-react";

export function ActivityCard({
  activity,
  onOpen,
}: {
  activity: Activity;
  onOpen: () => void;
}) {
  const Icon = activity.icon;
  const fg = fgFor(activity.color);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="card-hover text-left rounded-3xl border-2 border-ink shadow-comic p-5 flex flex-col gap-4"
      style={{ background: activity.color, color: fg }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-ink bg-white text-ink">
          <Icon className="h-6 w-6" />
        </div>
        <span
          className="rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-ink"
        >
          Ready
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-extrabold leading-tight">{activity.title}</h3>
        <p className="text-sm font-semibold opacity-90">{activity.tool}</p>
        <p className="text-sm leading-snug">{activity.outcome}</p>
      </div>

      <div className="mt-auto">
        <span
          className="btn-press inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-ink px-4 py-2 text-sm font-extrabold text-white shadow-comic-sm"
        >
          Open activity <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}
