import { agentInfo, officeInfo, siteConfig, SITE_PHONE } from "./site-config";
import { getCanonicalUrl, getSiteUrl } from "./site-url";

export function realEstateAgentJsonLd() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${getSiteUrl()}/#agent`,
    name: agentInfo.name,
    jobTitle: agentInfo.title,
    identifier: agentInfo.license,
    url: getSiteUrl(),
    email: agentInfo.email,
    worksFor: {
      "@type": "RealEstateAgent",
      name: officeInfo.name,
    },
    areaServed: {
      "@type": "City",
      name: "Henderson",
      containedInPlace: { "@type": "State", name: "Nevada" },
    },
  };
  if (SITE_PHONE) {
    base.telephone = SITE_PHONE.replace(/\D/g, "").replace(/^1/, "+1-");
  }
  return base;
}

export function localBusinessJsonLd() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${getSiteUrl()}/#localbusiness`,
    name: `${agentInfo.name} — ${siteConfig.name}`,
    description: siteConfig.description,
    url: getSiteUrl(),
    image: `${getSiteUrl()}/images/agent/dr-jan-duffy.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: officeInfo.address.street,
      addressLocality: officeInfo.address.city,
      addressRegion: officeInfo.address.state,
      postalCode: officeInfo.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: officeInfo.coordinates.lat,
      longitude: officeInfo.coordinates.lng,
    },
  };
  if (SITE_PHONE) {
    base.telephone = SITE_PHONE;
  }
  return base;
}

export function faqPageJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageJsonLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: getCanonicalUrl(path),
    isPartOf: { "@id": `${getSiteUrl()}/#website` },
  };
}
