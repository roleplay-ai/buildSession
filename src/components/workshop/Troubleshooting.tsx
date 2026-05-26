import { AlertTriangle } from "lucide-react";

export function Troubleshooting({
  items,
}: {
  items: { issue: string; fix: string }[];
}) {
  return (
    <div className="rounded-2xl border-2 border-ink bg-white shadow-comic overflow-hidden">
      <div className="flex items-center gap-2 border-b-2 border-ink bg-[var(--red-brand)] px-4 py-3 text-white">
        <AlertTriangle className="h-5 w-5" />
        <h4 className="font-extrabold uppercase tracking-wide">Troubleshooting</h4>
      </div>
      <ul className="divide-y-2 divide-ink/10">
        {items.map((it, i) => (
          <li key={i} className="p-4 text-ink">
            <p className="font-bold">{it.issue}</p>
            <p className="text-sm mt-1">{it.fix}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
