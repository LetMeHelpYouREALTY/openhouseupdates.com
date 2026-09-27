import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Henderson Open House Tour Tips | Dr. Jan Duffy",
  description:
    "Practical tips for touring Henderson open houses this weekend—planning routes, questions to ask, and how to compare Green Valley, Anthem, Inspirada, Cadence, and MacDonald Ranch stops.",
  path: "/open-house-tour-tips",
  keywords: ["Henderson open house tips", "weekend home tour Henderson"],
});

const tips = [
  "Map three to five homes per half-day; Henderson spreads east to west—cluster by neighborhood.",
  "Screenshot each listing's open-house time; agents sometimes shorten hours on busy weekends.",
  "Wear easy-on shoes and bring water—model homes and resale tours can include stairs and outdoor yards.",
  "Note garage orientation, window placement, and street noise at each stop.",
  "Ask for seller disclosures, recent utility bills, and HOA resale packages before you write an offer.",
  "If a home is vacant, confirm utilities are on for HVAC and plumbing checks.",
];

export default function OpenHouseTourTipsPage() {
  return (
    <PageShell includeGlobalSchema={false}>
      <div className="container mx-auto px-4 pb-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Open house tour tips</h1>
        <p className="text-lg text-slate-600 mb-8">
          Henderson weekend tours run smoother with a simple plan. Use these reminders before you
          hit Green Valley, Anthem, Inspirada, Cadence, or MacDonald Ranch.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-slate-700 mb-10">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
        <p>
          Ready to build your route? Start with{" "}
          <Link href="/henderson-open-houses-this-weekend" className="text-blue-600 hover:underline">
            this weekend&apos;s Henderson open houses
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            request a guided tour
          </Link>
          .
        </p>
      </div>
    </PageShell>
  );
}
