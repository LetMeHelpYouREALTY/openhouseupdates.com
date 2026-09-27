import { PageShell } from "@/components/site/PageShell";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { pageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Henderson Home Value Request | Selling in Henderson",
  description:
    "Request a Henderson home value review before you list. Dr. Jan Duffy can discuss pricing, open-house strategy, and timing in Green Valley, Anthem, Inspirada, Cadence, and MacDonald Ranch.",
  path: "/home-valuation",
  keywords: ["Henderson home value", "sell home Henderson NV"],
});

export default function HomeValuationPage() {
  return (
    <PageShell includeGlobalSchema={false}>
      <div className="container mx-auto px-4 pb-16 max-w-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Home value &amp; listing consult</h1>
        <p className="text-lg text-slate-600 mb-8">
          Thinking about selling in Henderson? Share your property details for a pricing conversation.
          Market conditions change—ask for current comps rather than relying on old averages.
        </p>
        <LeadCaptureForm
          source={siteConfig.leadSource}
          formType="home-valuation"
          defaultTags={["henderson-seller", "home-valuation"]}
        />
      </div>
    </PageShell>
  );
}
