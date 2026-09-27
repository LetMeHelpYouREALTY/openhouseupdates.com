import { NeighborhoodOpenHousePage } from "@/components/site/NeighborhoodOpenHousePage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Green Valley Open Houses This Weekend | Henderson NV",
  description:
    "Green Valley Henderson open houses this weekend—tour established villages near The District and mature parks. Live listings and tour tips.",
  path: "/neighborhoods/green-valley",
  keywords: ["Green Valley open houses", "Green Valley Henderson open house"],
});

export default function GreenValleyOpenHousesPage() {
  return (
    <NeighborhoodOpenHousePage
      slug="green-valley"
      title="Green Valley open houses this weekend"
      description="Weekend open houses in Green Valley and Green Valley Ranch, Henderson NV."
      intro="Green Valley pairs established streets with retail and parks. Many resale listings publish Saturday or Sunday open-house windows—cluster stops near The District or Paseo Verde Park to save time."
      touringTips={[
        "Parking can fill near popular retail corridors—arrive early on Sunday afternoons.",
        "Compare lot size and orientation; mature trees can shade yards differently block to block.",
        "Ask when the roof, HVAC, and water heater were last updated on older resales.",
      ]}
    />
  );
}
