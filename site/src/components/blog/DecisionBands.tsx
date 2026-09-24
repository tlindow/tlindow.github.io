type ImpactTile = {
  number: string;
  label: string;
};

type DecisionBandsProps = {
  call?: string;
  impact?: ImpactTile[];
  steps?: string[];
  belief?: string;
};

const labelClass =
  "text-xs font-mono font-bold uppercase tracking-widest text-indigo-dark";

function filled(value: string | undefined) {
  const text = value?.trim();
  return text ? text : undefined;
}

export default function DecisionBands({
  call,
  impact,
  steps,
  belief,
}: DecisionBandsProps) {
  const callText = filled(call);
  const beliefText = filled(belief);
  const tiles = (impact ?? []).filter(
    (tile) => filled(tile.number) && filled(tile.label)
  );
  const stepText = (steps ?? []).map((step) => step.trim()).filter(Boolean);

  if (!callText && tiles.length === 0 && stepText.length === 0 && !beliefText) {
    return null;
  }

  return (
    <div className="mb-12 space-y-8 font-mono">
      {callText ? (
        <section aria-label="The call" className="space-y-3">
          <p className={labelClass}>The call</p>
          <blockquote className="border-l-4 border-indigo-dark pl-4 text-lg sm:text-xl font-medium italic leading-snug text-indigo-dark">
            {callText}
          </blockquote>
        </section>
      ) : null}

      {tiles.length > 0 ? (
        <section aria-label="Impact" className="space-y-3">
          <p className={labelClass}>Impact</p>
          <div
            className={`grid grid-cols-1 gap-3 ${
              tiles.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
            }`}
          >
            {tiles.map((tile) => (
              <div
                key={`${tile.number}-${tile.label}`}
                className="rounded-xl border border-border bg-surface px-4 py-3"
              >
                <p className="text-xl font-bold tracking-tight text-foreground">
                  {tile.number.trim()}
                </p>
                <p className="pt-1 text-xs leading-relaxed text-muted">
                  {tile.label.trim()}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {stepText.length > 0 ? (
        <section aria-label="How I led it" className="space-y-3">
          <p className={labelClass}>How I led it</p>
          <ol className="space-y-3">
            {stepText.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm sm:text-base leading-relaxed">
                <span className="shrink-0 font-bold text-indigo-dark">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {beliefText ? (
        <section aria-label="What I believe" className="space-y-3">
          <p className={labelClass}>What I believe</p>
          <p className="text-base sm:text-lg font-medium leading-relaxed text-foreground">
            {beliefText}
          </p>
        </section>
      ) : null}

      <div className="flex items-center gap-3 pt-2">
        <div className="h-px w-8 shrink-0 bg-foreground/30" aria-hidden="true" />
        <p className={`${labelClass} shrink-0`}>The full story</p>
        <div className="h-px min-w-8 flex-1 bg-foreground/30" aria-hidden="true" />
      </div>
    </div>
  );
}
