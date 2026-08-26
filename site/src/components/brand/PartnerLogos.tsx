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
    <div
      className={`inline-flex items-center gap-2 text-base sm:text-lg tracking-tight text-foreground ${className}`}
      style={{
        fontFamily: '"Fraunces", var(--font-fraunces), "Plus Jakarta Sans", Georgia, "Times New Roman", serif',
        fontVariationSettings: '"SOFT" 100, "WONK" 0, "opsz" 144',
        fontWeight: 600,
      }}
    >
      <BeginnerSeedMark className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg shrink-0 shadow-xs" />
      <span className="leading-none lowercase tracking-tight">beginner</span>
    </div>
  );
}

export function GalvanizeLogo({ className = "h-4 sm:h-5 w-auto" }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${basePath}/galvanize-logo.svg`}
      alt="Galvanize"
      width={130}
      height={30}
      className={`object-contain ${className}`}
      loading="eager"
    />
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

export function NorthwesternLogo({ className = "h-5 sm:h-6 md:h-7 w-auto" }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${basePath}/northwestern-formal-wordmark.png`}
      alt="Northwestern University"
      width={160}
      height={39}
      className={`object-contain ${className}`}
      loading="eager"
    />
  );
}

export function HackReactorLogo({ className = "h-4 sm:h-5 w-auto" }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${basePath}/hack-reactor-logo.svg`}
      alt="Hack Reactor"
      width={130}
      height={28}
      className={`object-contain ${className}`}
      loading="eager"
    />
  );
}

export function DeepAtlasLogo({ className = "h-3.5 sm:h-4.5 w-auto" }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${basePath}/deep-atlas-logo.svg`}
      alt="Deep Atlas"
      width={120}
      height={26}
      className={`object-contain ${className}`}
      loading="eager"
    />
  );
}

export function TrustedPartnersBar() {
  return (
    <div className="pt-8 sm:pt-10 pb-1 flex flex-col items-center gap-3.5 text-center">
      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-muted font-bold">
        Previous Employers
      </span>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-7 text-foreground/80 hover:text-foreground transition-colors">
        {/* Beginner Partner Badge */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <BeginnerLogo />
        </div>

        {/* Affirm Partner Badge */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <AffirmLogo className="h-5 sm:h-6 w-auto" />
        </div>

        {/* Galvanize Badge */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <GalvanizeLogo className="h-4 sm:h-5 w-auto" />
        </div>

        {/* The Tech Interactive Badge */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <TheTechLogo className="h-5 sm:h-6 w-auto" />
        </div>

        {/* Computer History Museum Badge */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <CHMLogo className="h-5 sm:h-6 w-auto" />
        </div>

        {/* UC San Diego Badge */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <UCSDLogo className="h-4 sm:h-5 w-auto" />
        </div>
      </div>
    </div>
  );
}

export function EducationInstitutionsBar() {
  return (
    <div className="pt-4 pb-2 flex flex-col items-center gap-3.5 text-center">
      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-muted font-bold">
        Educational Institutions
      </span>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-9 text-foreground/80 hover:text-foreground transition-colors">
        {/* UC San Diego Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <UCSDLogo className="h-4 sm:h-5 w-auto" />
        </div>

        {/* Northwestern University Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <NorthwesternLogo className="h-5 sm:h-6 md:h-7 w-auto" />
        </div>

        {/* Hack Reactor Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <HackReactorLogo className="h-4 sm:h-5 w-auto" />
        </div>

        {/* Deep Atlas Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl hover:bg-surface-alt transition-colors">
          <DeepAtlasLogo className="h-3.5 sm:h-4.5 w-auto" />
        </div>
      </div>
    </div>
  );
}
