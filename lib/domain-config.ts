/**
 * Single-domain configuration — openhouseupdates.com only.
 */

export interface DomainConfig {
  domain: string;
  neighborhood: string;
  tagline: string;
  description: string;
  heroHeadline: string;
  heroSubheadline: string;
  keywords: string[];
  pageType: "search";
  realscoutAgentId: string;
  ctaBadge: string;
  ctaHeadline: string;
  ctaSubheadline: string;
}

const REALSCOUT_AGENT_ID = "QWdlbnQtMjI1MDUw";

export const DOMAIN_CONFIGS: Record<string, DomainConfig> = {
  "openhouseupdates.com": {
    domain: "openhouseupdates.com",
    neighborhood: "Henderson",
    tagline: "Henderson open houses this weekend",
    description:
      "Henderson NV open houses this weekend in Green Valley, Anthem, Inspirada, Cadence, and MacDonald Ranch.",
    heroHeadline: "Henderson Open Houses This Weekend",
    heroSubheadline:
      "Henderson-only open house search for buyers touring Green Valley, Anthem, Inspirada, Cadence, and MacDonald Ranch.",
    keywords: [
      "Henderson open houses this weekend",
      "Henderson NV open houses",
      "Inspirada open houses",
      "Cadence Henderson model homes",
      "Green Valley open houses",
    ],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Henderson open houses",
    ctaHeadline: "Plan your weekend tour",
    ctaSubheadline:
      "Use the live search below or request a private showing through the contact form.",
  },
};

export const DEFAULT_CONFIG: DomainConfig = DOMAIN_CONFIGS["openhouseupdates.com"];

export function getDomainConfig(hostname: string): DomainConfig {
  const clean = hostname.replace(/^www\./, "").toLowerCase();
  return DOMAIN_CONFIGS[clean] ?? DEFAULT_CONFIG;
}
