import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { RealScoutWidget } from "@/components/site/RealScoutWidget";
import { hendersonAreas, siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.description,
  path: "/",
  keywords: [siteConfig.primaryKeyword, ...siteConfig.secondaryKeywords],
});

export default function HomePage() {
  return (
    <PageShell>
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-blue-300 font-semibold mb-3">Henderson only</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{siteConfig.homeH1}</h1>
          <p className="text-lg text-white/85 mb-8">
            Plan a Henderson weekend tour in Green Valley, Anthem, Inspirada, Cadence, or
            MacDonald Ranch. Live MLS search below—times change, so confirm before you go.
          </p>
          <RealScoutWidget kind="search" className="flex justify-center mb-8" />
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/henderson-open-houses-this-weekend"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Weekend open house guide
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium"
            >
              Schedule a showing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
          Henderson areas on your tour list
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
          Hyperlocal pages for buyers who want open houses in specific Henderson master plans.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hendersonAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/neighborhoods/${area.slug}`}
              className="border border-slate-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{area.name}</h3>
              <p className="text-slate-600 text-sm">{area.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Touring Las Vegas too?</h2>
          <p className="text-slate-600 mb-6">
            This site stays Henderson-focused. For valley-wide open houses, visit our sister
            resource.
          </p>
          <a
            href={siteConfig.sisterSite.href}
            className="text-blue-600 font-medium hover:underline"
            rel="noopener noreferrer"
          >
            {siteConfig.sisterSite.label} → openhouseupdate.com
          </a>
        </div>
      </section>
    </PageShell>
  );
}
