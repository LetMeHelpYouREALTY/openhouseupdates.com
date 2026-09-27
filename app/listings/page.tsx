import { PageShell } from "@/components/site/PageShell";
import { RealScoutWidget } from "@/components/site/RealScoutWidget";
import { pageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Henderson Homes for Sale | MLS Listings",
  description:
    "Search Henderson NV homes for sale with live MLS listings. Use filters to find properties with upcoming open houses in Green Valley, Anthem, Inspirada, Cadence, and MacDonald Ranch.",
  path: "/listings",
  keywords: ["Henderson homes for sale", "Henderson NV MLS", ...siteConfig.secondaryKeywords],
});

export default function ListingsPage() {
  return (
    <PageShell includeGlobalSchema={false}>
      <div className="container mx-auto px-4 pb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Henderson homes for sale</h1>
        <p className="text-lg text-slate-600 max-w-3xl mb-8">
          Live MLS search for Henderson buyers. Open-house times appear on individual listings
          when agents publish them—confirm schedules before touring.
        </p>
        <RealScoutWidget kind="listings" className="min-h-[560px]" />
      </div>
    </PageShell>
  );
}
