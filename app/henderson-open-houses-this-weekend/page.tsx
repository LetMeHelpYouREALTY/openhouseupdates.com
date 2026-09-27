import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { RealScoutWidget } from "@/components/site/RealScoutWidget";
import { pageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site-config";
import { webPageJsonLd } from "@/lib/json-ld";

export const metadata = pageMetadata({
  title: "Henderson Open Houses This Weekend | Schedule & Search",
  description:
    "See how Henderson NV open houses work this weekend, browse live listings, and plan tours in Green Valley, Anthem, Inspirada, Cadence, and MacDonald Ranch.",
  path: "/henderson-open-houses-this-weekend",
  keywords: [siteConfig.primaryKeyword, ...siteConfig.secondaryKeywords],
});

export default function HendersonOpenHousesWeekendPage() {
  return (
    <PageShell
      extraJsonLd={webPageJsonLd(
        "/henderson-open-houses-this-weekend",
        "Henderson open houses this weekend",
        siteConfig.description
      )}
      includeGlobalSchema={false}
    >
      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Henderson open houses this weekend
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Listing agents publish open-house windows in MLS—usually Saturday and Sunday. Times
          can shift or cancel, so treat this page as your starting point and confirm each home
          before you drive.
        </p>

        <div className="prose prose-slate max-w-none mb-10">
          <h2>How weekend open houses work in Henderson</h2>
          <ol>
            <li>Search active Henderson listings below and note homes with published open-house times.</li>
            <li>Group stops by area—Green Valley, Anthem, Inspirada, Cadence, or MacDonald Ranch—to save drive time.</li>
            <li>Arrive within posted hours; bring a photo ID if a guard gate requires registration.</li>
            <li>Ask the hosting agent about HOA documents, builder warranties, and any offer deadlines.</li>
          </ol>
          <p>
            Need a route or private preview?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Use the contact form or Calendly
            </Link>
            .
          </p>
        </div>

        <RealScoutWidget kind="listings" className="min-h-[520px] mb-10" />

        <p className="text-sm text-slate-500">
          Las Vegas valley tours:{" "}
          <a
            href={siteConfig.sisterSite.href}
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            {siteConfig.sisterSite.label}
          </a>
        </p>
      </div>
    </PageShell>
  );
}
