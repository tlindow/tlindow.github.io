import { BeginnerSeedMark } from "./BeginnerMarks";

export function AffirmLogo({ className = "h-5 sm:h-6 w-auto" }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${basePath}/affirm-logo.png`}
      alt="Affirm"
      width={100}
      height={40}
      className={`object-contain ${className}`}
      loading="eager"
    />
  );
}

export function BeginnerLogo({ className = "h-6 sm:h-7" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 font-mono font-bold text-sm sm:text-base tracking-tight text-foreground ${className}`}>
      <BeginnerSeedMark className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg shrink-0 shadow-xs" />
      <span className="leading-none">beginner</span>
    </div>
  );
}

export function TheTechLogo({ className = "h-5 sm:h-6 w-auto" }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${basePath}/the-tech-interactive-logo.png`}
      alt="The Tech Interactive"
      width={120}
      height={40}
      className={`object-contain ${className}`}
      loading="eager"
    />
  );
}

export function CHMLogo({ className = "h-5 sm:h-6 w-auto" }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${basePath}/chm-logo.svg`}
      alt="Computer History Museum"
      width={120}
      height={40}
      className={`object-contain ${className}`}
      loading="eager"
    />
  );
}

export function UCSDLogo({ className = "h-4 sm:h-5 w-auto" }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${basePath}/ucsd-logo.svg`}
      alt="UC San Diego"
      width={120}
      height={30}
      className={`object-contain ${className}`}
      loading="eager"
    />
  );
}

export function TrustedPartnersBar() {
  return (
    <div className="pt-8 sm:pt-10 pb-2 flex flex-col items-center gap-3.5 text-center">
      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-muted font-bold">
        Previous Employers
      </span>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-foreground/80 hover:text-foreground transition-colors">
        {/* Beginner Partner Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <BeginnerLogo />
        </div>

        {/* Affirm Partner Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <AffirmLogo className="h-5 sm:h-6 w-auto" />
        </div>

        {/* The Tech Interactive Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <TheTechLogo className="h-5 sm:h-6 w-auto" />
        </div>

        {/* Computer History Museum Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <CHMLogo className="h-5 sm:h-6 w-auto" />
        </div>

        {/* UC San Diego Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <UCSDLogo className="h-4 sm:h-5 w-auto" />
        </div>
      </div>
    </div>
  );
}
