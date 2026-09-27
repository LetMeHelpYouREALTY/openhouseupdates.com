import { PageShell } from "@/components/site/PageShell";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/page-metadata";
import { MapPin, Mail } from "lucide-react";

export const metadata = pageMetadata({
  title: "Contact Dr. Jan Duffy | Henderson Open Houses",
  description:
    "Schedule a Henderson showing or ask about this weekend's open houses. Contact form and Calendly scheduling—no phone required.",
  path: "/contact",
  keywords: ["contact Dr. Jan Duffy Henderson", "schedule Henderson showing"],
});

export default function ContactPage() {
  return (
    <PageShell includeGlobalSchema={false}>
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact &amp; scheduling</h1>
          <p className="text-lg text-slate-600">
            Questions about Henderson open houses this weekend? Use the form or book a time on
            Calendly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Send a message</h2>
            <LeadCaptureForm
              source={siteConfig.leadSource}
              formType="contact"
              defaultTags={["henderson-open-house", "openhouseupdates"]}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Book on Calendly</h2>
            <CalendlyWidget url={siteConfig.calendlyUrl} />
            <div className="mt-8 space-y-4 text-slate-700">
              <p className="font-semibold text-slate-900">{agentInfo.name}</p>
              <p className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{officeInfo.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                <a href={`mailto:${agentInfo.email}`} className="text-blue-600 hover:underline">
                  {agentInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
