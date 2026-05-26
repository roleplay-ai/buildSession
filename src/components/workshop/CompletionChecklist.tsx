import { useState } from "react";
import { Check } from "lucide-react";

export function CompletionChecklist({
  items,
  activityId,
}: {
  items: string[];
  activityId: string;
}) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggle = (i: number) =>
    setChecked((c) => ({ ...c, [i]: !c[i] }));

  return (
    <div className="rounded-2xl border-2 border-ink bg-white shadow-comic overflow-hidden">
      <div className="border-b-2 border-ink bg-[var(--green-brand)] px-4 py-3 text-white">
        <h4 className="font-extrabold uppercase tracking-wide">Final Checklist</h4>
      </div>
      <ul className="p-4 space-y-2">
        {items.map((item, i) => {
          const isChecked = !!checked[i];
          return (
            <li key={`${activityId}-${i}`}>
              <button
                type="button"
                onClick={() => toggle(i)}
                className="btn-press w-full flex items-center gap-3 rounded-xl border-2 border-ink bg-white px-3 py-2 text-left text-ink shadow-comic-sm"
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md border-2 border-ink transition-colors ${
                    isChecked ? "bg-[var(--green-brand)]" : "bg-white"
                  }`}
                >
                  {isChecked && <Check className="h-4 w-4 text-white" />}
                </span>
                <span className={`font-semibold ${isChecked ? "line-through opacity-60" : ""}`}>
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
