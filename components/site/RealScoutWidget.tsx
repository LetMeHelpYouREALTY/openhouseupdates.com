import { REALSCOUT_AGENT_ID } from "@/lib/site-config";

type RealScoutWidgetProps = {
  kind: "search" | "listings";
  className?: string;
};

export function RealScoutWidget({ kind, className }: RealScoutWidgetProps) {
  const html =
    kind === "search"
      ? `<realscout-simple-search agent-encoded-id="${REALSCOUT_AGENT_ID}"></realscout-simple-search>`
      : `<realscout-office-listings agent-encoded-id="${REALSCOUT_AGENT_ID}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC"></realscout-office-listings>`;

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
