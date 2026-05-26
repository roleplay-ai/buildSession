import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/workshop/Sidebar";
import { MobileNav } from "@/components/workshop/MobileNav";
import { HomePage } from "@/components/workshop/HomePage";
import { ActivityPage } from "@/components/workshop/ActivityPage";
import { getActivity } from "@/lib/activities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Nudgeable GenAI Hands-on AI Agent & Automation Building Session",
      },
      {
        name: "description",
        content:
          "Hands-on participant guide to build voice agents, AI workflows, artifacts, Claude Skills, and CX apps in one session.",
      },
      {
        property: "og:title",
        content:
          "Nudgeable GenAI Hands-on AI Agent & Automation Building Session",
      },
      {
        property: "og:description",
        content:
          "Pick an activity, follow the steps, copy the prompts, and build.",
      },
    ],
  }),
  component: WorkshopApp,
});

function WorkshopApp() {
  const [selected, setSelected] = useState<string | null>(null);
  const activity = selected ? getActivity(selected) : null;

  // Scroll to top whenever the view changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [selected]);

  const onSelect = (id: string) => setSelected(id);
  const onHome = () => setSelected(null);

  return (
    <div className="min-h-screen bg-ink flex">
      <Sidebar selected={selected} onSelect={onSelect} onHome={onHome} />
      <div className="flex-1 min-w-0 flex flex-col">
        <MobileNav selected={selected} onSelect={onSelect} onHome={onHome} />
        <main className="flex-1">
          {activity ? (
            <ActivityPage key={activity.id} activity={activity} />
          ) : (
            <HomePage onSelect={onSelect} />
          )}
        </main>
      </div>
    </div>
  );
}
