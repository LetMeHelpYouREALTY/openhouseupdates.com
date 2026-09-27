import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Henderson Home Buyer Guide | Open House Buyers",
  description:
    "Buyer guide for touring Henderson open houses—financing prep, offer basics, and how to compare neighborhoods from Green Valley to MacDonald Ranch.",
  path: "/buyers",
  keywords: ["Henderson home buyer guide", "buying a home Henderson NV"],
});

export default function BuyersGuidePage() {
  return (
    <PageShell includeGlobalSchema={false}>
      <div className="container mx-auto px-4 pb-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Henderson buyer guide</h1>
        <p className="text-lg text-slate-600 mb-8">
          Open houses are a fast way to compare floor plans, but buying in Henderson still
          requires financing, disclosures, and neighborhood fit. Use this checklist before you
          write an offer.
        </p>
        <section className="space-y-6 text-slate-700">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Before you tour</h2>
            <p>
              Connect with a lender for a pre-approval letter, define must-haves vs nice-to-haves,
              and pick target areas—Green Valley, Anthem, Inspirada, Cadence, or MacDonald Ranch.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">During open houses</h2>
            <p>
              Confirm HOA and master-plan fees for the specific address, test cell signal, and ask
              about recent updates or builder warranties on new construction.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">After you tour</h2>
            <p>
              Compare commute routes, lot orientation, and listing history. Request disclosures
              before removing contingencies.
            </p>
          </div>
        </section>
        <p className="mt-10">
          <Link href="/henderson-open-houses-this-weekend" className="text-blue-600 hover:underline">
            See Henderson open houses this weekend
          </Link>{" "}
          ·{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact Dr. Jan Duffy
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
