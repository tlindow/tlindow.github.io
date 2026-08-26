import { getAnalytics, isSupported, logEvent, Analytics } from "firebase/analytics";
import { getFirebaseApp, isFirebaseConfigured } from "./config";

let analyticsInstance: Analytics | null = null;
let isAnalyticsInitialized = false;

export async function initAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null;
  if (analyticsInstance) return analyticsInstance;
  if (isAnalyticsInitialized) return null;

  isAnalyticsInitialized = true;

  const app = getFirebaseApp();
  if (!app || !isFirebaseConfigured) {
    if (process.env.NODE_ENV === "development") {
      console.info("[Analytics] Running in local mock mode (no Firebase credentials).");
    }
    return null;
  }

  try {
    const supported = await isSupported();
    if (supported) {
      analyticsInstance = getAnalytics(app);
      return analyticsInstance;
    }
  } catch (err) {
    console.warn("[Analytics] Initialization error:", err);
  }

  return null;
}

export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV === "development") {
    console.log(`📊 [Analytics Event] ${eventName}`, eventParams || {});
  }

  if (analyticsInstance) {
    try {
      logEvent(analyticsInstance, eventName, eventParams);
    } catch (err) {
      console.warn(`[Analytics] Failed to log event "${eventName}":`, err);
    }
  }
}

// ----------------------------------------------------------------------
// Specific Typed Event Telemetry Helpers
// ----------------------------------------------------------------------

export interface RecruitClickParams {
  location: "navbar" | "hero" | "floating_trigger" | "footer" | "launch_wallet" | "other";
  label?: string;
  variant?: string;
  destination?: string;
}

export function logRecruitClick(params: RecruitClickParams) {
  trackEvent("recruit_me_click", {
    event_category: "conversion",
    event_label: params.label || "Recruit Me",
    location: params.location,
    variant: params.variant || "default",
    destination: params.destination || "https://www.linkedin.com/in/tlindow",
  });
}

export function logResumeView(source: "hero_cta" | "nav" | "footer" | "direct" | "download_pdf") {
  trackEvent("resume_view", {
    event_category: "navigation",
    source,
  });
}

export function logMarketplaceInteraction(
  action: "scroll_left" | "scroll_right" | "sort_toggle" | "card_click" | "company_filter",
  details?: Record<string, unknown>
) {
  trackEvent("skills_marketplace_interaction", {
    event_category: "engagement",
    action,
    ...details,
  });
}

export function logOutboundClick(
  platform: "linkedin" | "github" | "email" | "llms_txt" | "other",
  destination: string
) {
  trackEvent("outbound_click", {
    event_category: "outbound",
    platform,
    destination,
  });
}

export function logScrollDepth(percent: number) {
  trackEvent("scroll_depth", {
    event_category: "engagement",
    depth_percent: percent,
  });
}
