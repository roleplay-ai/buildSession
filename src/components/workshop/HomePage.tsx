import { activities } from "@/lib/activities";
import { ActivityCard } from "./ActivityCard";

export function HomePage({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="animate-fade-up px-4 py-8 lg:px-10 lg:py-12 max-w-7xl mx-auto">
      <div className="mb-10 lg:mb-12">
        <span className="inline-block rounded-full border-2 border-ink bg-[var(--yellow-brand)] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-ink shadow-comic-sm">
          Nudgeable GenAI
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
          Welcome to the GenAI Hands-on AI Agent & Automation Building Session
        </h1>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {activities.map((a) => (
          <ActivityCard key={a.id} activity={a} onOpen={() => onSelect(a.id)} />
        ))}
      </div>
    </div>
  );
}
