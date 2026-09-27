import Link from "next/link";
import { PageShell } from "./PageShell";
import { RealScoutWidget } from "./RealScoutWidget";
import { hendersonAreas } from "@/lib/site-config";
import { webPageJsonLd } from "@/lib/json-ld";

type NeighborhoodOpenHousePageProps = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  touringTips: string[];
};

export function NeighborhoodOpenHousePage({
  slug,
  title,
  description,
  intro,
  touringTips,
}: NeighborhoodOpenHousePageProps) {
  const area = hendersonAreas.find((a) => a.slug === slug);
  const path = `/neighborhoods/${slug}`;

  return (
    <PageShell
      extraJsonLd={webPageJsonLd(path, title, description)}
      includeGlobalSchema={false}
    >
      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        <p className="text-blue-600 font-semibold text-sm mb-2">Henderson open houses</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-600 mb-8">{intro}</p>
        {area && (
          <p className="text-slate-700 mb-8 bg-slate-50 border border-slate-200 rounded-lg p-4">
            {area.blurb}
          </p>
        )}

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Live listings</h2>
          <p className="text-slate-600 mb-4">
            Search current Henderson homes for sale. Filter by area name when browsing open-house
            times published in MLS.
          </p>
          <RealScoutWidget kind="listings" className="min-h-[480px]" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Weekend tour tips</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            {touringTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <p className="text-slate-600">
          Planning a multi-stop route? Read{" "}
          <Link href="/open-house-tour-tips" className="text-blue-600 hover:underline">
            open house tour tips
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            request a showing
          </Link>
          .
        </p>
      </div>
    </PageShell>
  );
}
