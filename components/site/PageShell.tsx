import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { JsonLd } from "./JsonLd";
import { localBusinessJsonLd, realEstateAgentJsonLd } from "@/lib/json-ld";

type PageShellProps = {
  children: React.ReactNode;
  extraJsonLd?: Record<string, unknown> | Record<string, unknown>[];
  includeGlobalSchema?: boolean;
};

export function PageShell({
  children,
  extraJsonLd,
  includeGlobalSchema = true,
}: PageShellProps) {
  return (
    <>
      {includeGlobalSchema && (
        <>
          <JsonLd data={realEstateAgentJsonLd()} />
          <JsonLd data={localBusinessJsonLd()} />
        </>
      )}
      {extraJsonLd && <JsonLd data={extraJsonLd} />}
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </>
  );
}
