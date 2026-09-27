import { NeighborhoodOpenHousePage } from "@/components/site/NeighborhoodOpenHousePage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "MacDonald Ranch Open Houses This Weekend | Henderson NV",
  description:
    "MacDonald Ranch Henderson open houses across Sunridge, Sun City, and foothill villages. Live listings and tour planning.",
  path: "/neighborhoods/macdonald-ranch",
  keywords: ["MacDonald Ranch open houses", "MacDonald Ranch Henderson"],
});

export default function MacDonaldRanchOpenHousesPage() {
  return (
    <NeighborhoodOpenHousePage
      slug="macdonald-ranch"
      title="MacDonald Ranch open houses this weekend"
      description="Weekend open houses in MacDonald Ranch, Henderson NV."
      intro="MacDonald Ranch is an umbrella master plan in southeast Henderson with villages ranging from 55+ Sun City to hillside custom homes. Open-house logistics vary by gate and elevation."
      touringTips={[
        "Confirm whether a listing sits in a guard-gated village before you drive uphill.",
        "Foothill homes may have stepped interiors—note how stairs fit your daily routine.",
        "Allow extra drive time between valley-floor and hillside stops.",
      ]}
    />
  );
}
