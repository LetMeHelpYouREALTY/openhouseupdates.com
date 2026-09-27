import { NeighborhoodOpenHousePage } from "@/components/site/NeighborhoodOpenHousePage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Inspirada Open Houses This Weekend | Henderson NV",
  description:
    "Inspirada Henderson open houses and new construction tours. Live MLS search and weekend planning tips.",
  path: "/neighborhoods/inspirada",
  keywords: ["Inspirada open houses", "Inspirada Henderson homes"],
});

export default function InspiradaOpenHousesPage() {
  return (
    <NeighborhoodOpenHousePage
      slug="inspirada"
      title="Inspirada open houses this weekend"
      description="Weekend open houses in Inspirada, Henderson NV."
      intro="Inspirada mixes resale homes with active builder phases. Model homes may run separate hours from MLS open houses—check both when you plan your route."
      touringTips={[
        "Trail and park access varies by village—walk the paths near any home you like.",
        "Compare builder warranties on new phases vs resale inspection timelines.",
        "Sloan Canyon access is nearby; factor extra time if you want a post-tour hike.",
      ]}
    />
  );
}
