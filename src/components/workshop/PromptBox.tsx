import { CopyButton } from "./CopyButton";

export function PromptBox({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <div className="rounded-2xl border-2 border-ink bg-white shadow-comic overflow-hidden">
      <div className="flex items-center justify-between border-b-2 border-ink bg-[var(--light-yellow)] px-4 py-3">
        <h4 className="font-extrabold text-ink uppercase tracking-wide text-sm">
          {label}
        </h4>
        <CopyButton text={content} />
      </div>
      <pre className="whitespace-pre-wrap break-words p-4 text-sm text-ink font-mono leading-relaxed max-h-[420px] overflow-auto">
        {content}
      </pre>
    </div>
  );
}
