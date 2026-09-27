import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { agentInfo, officeInfo } from "@/lib/site-config";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "About Dr. Jan Duffy | Henderson Open House Agent",
  description:
    "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, helps Henderson buyers plan open-house tours in Green Valley, Anthem, Inspirada, Cadence, and MacDonald Ranch.",
  path: "/about",
  keywords: ["Dr. Jan Duffy Henderson", "Henderson REALTOR"],
});

export default function AboutPage() {
  return (
    <PageShell includeGlobalSchema={false}>
      <div className="container mx-auto px-4 pb-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">About Dr. Jan Duffy</h1>
        <p className="text-lg text-slate-600 mb-6">
          {agentInfo.name} is a Nevada real estate agent (license {agentInfo.license}) with{" "}
          {officeInfo.name}. This site is built for buyers who tour Henderson open houses on
          weekends and want a local guide—not a generic valley-wide search.
        </p>
        <p className="text-slate-700 mb-6">
          Dr. Duffy helps you compare listings, confirm open-house times, and line up private
          showings when public hours do not fit your schedule. Office address: {officeInfo.address.full}.
        </p>
        <Link href="/contact" className="text-blue-600 font-medium hover:underline">
          Contact &amp; schedule a showing →
        </Link>
      </div>
    </PageShell>
  );
}
