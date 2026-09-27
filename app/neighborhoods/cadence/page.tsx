import { NeighborhoodOpenHousePage } from "@/components/site/NeighborhoodOpenHousePage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Cadence Open Houses & Model Homes | Henderson NV",
  description:
    "Cadence Henderson open houses and model home hours. Eastern Henderson new construction with Central Park events—ask for current pricing.",
  path: "/neighborhoods/cadence",
  keywords: ["Cadence Henderson model homes", "Cadence open houses"],
});

export default function CadenceOpenHousesPage() {
  return (
    <NeighborhoodOpenHousePage
      slug="cadence"
      title="Cadence open houses & model homes"
      description="Weekend tours in Cadence, Henderson NV."
      intro="Cadence is a newer Henderson master plan with builder models and resale inventory. Weekend traffic often clusters around Central Park—plan driving routes east from the 215."
      touringTips={[
        "Builder models may require sign-in; bring ID and arrive before posted closing time.",
        "Ask which community fees apply to the specific lot—not all Cadence villages share the same HOA.",
        "Construction activity continues in parts of Cadence; confirm lot views and noise sources.",
      ]}
    />
  );
}
