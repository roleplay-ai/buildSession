import type { Step } from "@/lib/activities";
import { CheckCircle2 } from "lucide-react";

export function StepCard({ index, step, color }: { index: number; step: Step; color: string }) {
  return (
    <div className="rounded-2xl border-2 border-ink bg-white shadow-comic overflow-hidden">
      <div className="flex items-center gap-3 border-b-2 border-ink px-4 py-3" style={{ background: color }}>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-ink bg-white font-extrabold text-ink">
          {index + 1}
        </div>
        <h4 className="font-extrabold text-ink">{step.title}</h4>
      </div>
      <div className="space-y-3 p-4 text-ink">
        <p className="font-semibold">{step.instruction}</p>
        {step.details.length > 0 && (
          <ul className="ml-1 space-y-1 text-sm">
            {step.details.map((d, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-start gap-2 rounded-xl border-2 border-ink bg-[var(--light-yellow)] p-3 text-sm">
          <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
          <span><span className="font-bold">Success: </span>{step.success}</span>
        </div>
      </div>
    </div>
  );
}
