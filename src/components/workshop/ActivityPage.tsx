import type { Activity } from "@/lib/activities";
import { fgFor } from "@/lib/activities";
import { StepCard } from "./StepCard";
import { PromptBox } from "./PromptBox";
import { Troubleshooting } from "./Troubleshooting";
import { CompletionChecklist } from "./CompletionChecklist";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-white text-xl lg:text-2xl font-extrabold mb-4 mt-10 first:mt-0">
      {children}
    </h2>
  );
}

function InfoCardView({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border-2 border-ink bg-white shadow-comic p-5 text-ink">
      <h4 className="font-extrabold text-lg leading-tight">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export function ActivityPage({ activity }: { activity: Activity }) {
  const Icon = activity.icon;
  const fg = fgFor(activity.color);

  return (
    <div className="animate-fade-up px-4 py-8 lg:px-10 lg:py-12 max-w-5xl mx-auto">
      {/* Header card */}
      <div
        className="rounded-3xl border-2 border-ink shadow-comic-lg p-6 lg:p-8"
        style={{ background: activity.color, color: fg }}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink bg-white text-ink shadow-comic-sm">
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest opacity-80">
              {activity.tool}
            </p>
            <h1 className="text-2xl lg:text-3xl font-black leading-tight">
              {activity.title}
            </h1>
          </div>
        </div>
        <p className="mt-5 text-base lg:text-lg font-semibold leading-snug max-w-3xl">
          {activity.outcome}
        </p>
      </div>

      {/* Concept */}
      {activity.concept && (
        <>
          <SectionTitle>Concept</SectionTitle>
          <InfoCardView {...activity.concept} />
        </>
      )}

      {/* Three ways */}
      {activity.threeWays && (
        <>
          <SectionTitle>Three ways to build</SectionTitle>
          <div className="grid gap-4 md:grid-cols-3">
            {activity.threeWays.map((c, i) => (
              <InfoCardView key={i} {...c} />
            ))}
          </div>
        </>
      )}

      {/* Variables concept */}
      {activity.variablesConcept && (
        <>
          <SectionTitle>Variables</SectionTitle>
          <InfoCardView {...activity.variablesConcept} />
        </>
      )}

      {/* App logic */}
      {activity.appLogic && (
        <>
          <SectionTitle>App logic</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {activity.appLogic.map((c, i) => (
              <InfoCardView key={i} {...c} />
            ))}
          </div>
        </>
      )}

      {/* Ideas */}
      {activity.ideas && (
        <>
          <SectionTitle>Sample ideas</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            {activity.ideas.map((idea, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-ink bg-white shadow-comic p-5 text-ink"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-extrabold leading-tight">{idea.title}</h4>
                  <span className="shrink-0 rounded-full border-2 border-ink bg-[var(--blue-brand)] px-2 py-0.5 text-xs font-bold text-white">
                    {idea.tech}
                  </span>
                </div>
                <p className="mt-2 text-sm">{idea.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Prompt intro */}
      {activity.promptIntro && (
        <div className="mt-10 rounded-2xl border-2 border-ink bg-[var(--light-yellow)] p-4 text-ink font-semibold">
          {activity.promptIntro}
        </div>
      )}

      {/* Prompts */}
      {activity.prompts && activity.prompts.length > 0 && (
        <>
          <SectionTitle>Prompts</SectionTitle>
          <div className="space-y-4">
            {activity.prompts.map((p, i) => (
              <PromptBox key={i} label={p.label} content={p.content} />
            ))}
          </div>
        </>
      )}

      {/* Steps */}
      <SectionTitle>Build steps</SectionTitle>
      <div className="space-y-4">
        {activity.steps.map((s, i) => (
          <div key={i} className="space-y-3">
            <StepCard index={i} step={s} color={activity.color} />
            {s.prompt && (
              <div className="pl-0 md:pl-6">
                <PromptBox label={s.prompt.label} content={s.prompt.content} />
              </div>
            )}
          </div>
        ))}
      </div>


      {/* Build options */}
      {activity.buildOptions && (
        <>
          <SectionTitle>Build options</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            {activity.buildOptions.map((opt, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-ink bg-white shadow-comic p-5 text-ink space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-extrabold leading-tight">{opt.title}</h4>
                  <span className="shrink-0 rounded-full border-2 border-ink bg-[var(--purple-brand)] px-2 py-0.5 text-xs font-bold text-white">
                    {opt.difficulty}
                  </span>
                </div>
                <p className="text-sm"><span className="font-bold">Trigger: </span>{opt.trigger}</p>
                <p className="text-sm">{opt.what}</p>
                <p className="text-sm"><span className="font-bold">Variables: </span>{opt.variables}</p>
                <p className="text-sm"><span className="font-bold">Final action: </span>{opt.finalAction}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Troubleshooting */}
      {activity.troubleshooting && (
        <>
          <SectionTitle>Troubleshooting</SectionTitle>
          <Troubleshooting items={activity.troubleshooting} />
        </>
      )}

      {/* Checklist */}
      <SectionTitle>Final checklist</SectionTitle>
      <CompletionChecklist items={activity.checklist} activityId={activity.id} />
    </div>
  );
}
