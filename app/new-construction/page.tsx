import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { RealScoutWidget } from "@/components/site/RealScoutWidget";
import { pageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Henderson New Construction Model Homes | Cadence & Inspirada",
  description:
    "Explore new construction and model homes in Henderson NV, including Cadence and Inspirada builders. Ask for current pricing, incentives, and model home open hours.",
  path: "/new-construction",
  keywords: ["Cadence Henderson model homes", "Inspirada new construction", "Henderson model homes"],
});

export default function NewConstructionPage() {
  return (
    <PageShell includeGlobalSchema={false}>
      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          New construction model homes in Henderson
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Cadence and Inspirada continue to add builder inventory in Henderson. Model homes often
          host weekend open hours separate from resale listings. Incentives, base prices, and lot
          premiums change—ask for current pricing before you tour.
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
          <li>Builder sales teams represent the seller; your agent can review contracts and options.</li>
          <li>Compare energy features, structural warranties, and estimated closing timelines.</li>
          <li>Pair model tours with nearby resale open houses to understand the broader neighborhood.</li>
        </ul>
        <RealScoutWidget kind="listings" className="min-h-[480px] mb-8" />
        <p>
          <Link href="/neighborhoods/cadence" className="text-blue-600 hover:underline">
            Cadence open houses
          </Link>{" "}
          ·{" "}
          <Link href="/neighborhoods/inspirada" className="text-blue-600 hover:underline">
            Inspirada open houses
          </Link>{" "}
          ·{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Schedule a showing
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
