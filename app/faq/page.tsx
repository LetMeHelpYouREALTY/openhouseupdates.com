import { PageShell } from "@/components/site/PageShell";
import { JsonLd } from "@/components/site/JsonLd";
import { faqPageJsonLd } from "@/lib/json-ld";
import { openHouseFaqs } from "@/lib/openhouse-faq";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Henderson Open House FAQ | Dr. Jan Duffy",
  description:
    "Answers about Henderson NV open houses this weekend—schedules, neighborhoods, and how to tour Green Valley, Anthem, Inspirada, Cadence, and MacDonald Ranch.",
  path: "/faq",
  keywords: ["Henderson open house FAQ", "weekend open houses Henderson"],
});

export default function FaqPage() {
  return (
    <PageShell includeGlobalSchema={false}>
      <JsonLd data={faqPageJsonLd(openHouseFaqs)} />
      <div className="container mx-auto px-4 pb-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Frequently asked questions</h1>
        <div className="space-y-8">
          {openHouseFaqs.map((item) => (
            <div key={item.question}>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">{item.question}</h2>
              <p className="text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
