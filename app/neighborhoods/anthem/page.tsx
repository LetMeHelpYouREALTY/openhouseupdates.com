import { NeighborhoodOpenHousePage } from "@/components/site/NeighborhoodOpenHousePage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Anthem Open Houses This Weekend | Henderson NV",
  description:
    "Anthem Henderson open houses this weekend across villages and golf communities. Browse live listings and plan your tour.",
  path: "/neighborhoods/anthem",
  keywords: ["Anthem open houses", "Anthem Henderson open house"],
});

export default function AnthemOpenHousesPage() {
  return (
    <NeighborhoodOpenHousePage
      slug="anthem"
      title="Anthem open houses this weekend"
      description="Weekend open houses in Anthem, Henderson NV."
      intro="Anthem spans multiple villages in southern Henderson. Guard-gated sections may require agent registration—confirm access before you arrive."
      touringTips={[
        "Note which village you are in; street patterns and amenities differ across Anthem.",
        "Golf-adjacent homes may have additional association layers—request fee breakdowns.",
        "Combine Anthem stops with nearby Henderson retail for meal breaks between tours.",
      ]}
    />
  );
}
