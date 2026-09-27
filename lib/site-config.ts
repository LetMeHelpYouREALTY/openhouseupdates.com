import { getSiteUrl } from "./site-url";

export const REALSCOUT_AGENT_ID = "QWdlbnQtMjI1MDUw";

export const siteConfig = {
  domain: "openhouseupdates.com",
  name: "Open House Updates",
  siteUrl: getSiteUrl(),
  /** @deprecated use siteUrl — kept for legacy schema helpers */
  url: getSiteUrl(),
  /** Verbatim from angles_v2 */
  defaultTitle: "Henderson NV Open Houses This Weekend | Dr. Jan Duffy",
  homeH1: "Henderson Open Houses This Weekend",
  primaryKeyword: "Henderson open houses this weekend",
  secondaryKeywords: [
    "Henderson NV open houses",
    "Inspirada open houses",
    "Cadence Henderson model homes",
    "Green Valley open houses",
  ],
  description:
    "Browse Henderson NV open houses this weekend in Green Valley, Anthem, Inspirada, Cadence, and MacDonald Ranch. Live listing search and tour planning with Dr. Jan Duffy, REALTOR®.",
  calendlyUrl: "https://calendly.com/drjanduffy/showing",
  leadSource: "openhouseupdates.com",
  sisterSite: {
    label: "Las Vegas open houses this weekend",
    href: "https://www.openhouseupdate.com/",
  },
};

export const agentInfo = {
  name: "Dr. Jan Duffy",
  title: "REALTOR®",
  license: "S.0197614.LLC",
  email: "homes@drjanduffy.com",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
};

export const officeInfo = {
  name: "Berkshire Hathaway HomeServices Nevada Properties",
  address: {
    street: "9406 W Lake Mead Blvd",
    city: "Las Vegas",
    state: "NV",
    zip: "89134",
    full: "9406 W Lake Mead Blvd, Las Vegas, NV 89134",
  },
  coordinates: {
    lat: 36.1893,
    lng: -115.2821,
  },
};

export const hendersonAreas = [
  {
    name: "Green Valley",
    slug: "green-valley",
    blurb:
      "Established Henderson areas including Green Valley Ranch and surrounding villages—mature landscaping, parks, and retail near The District at Green Valley Ranch.",
  },
  {
    name: "Anthem",
    slug: "anthem",
    blurb:
      "Large master-planned community in southern Henderson with a mix of villages, golf, and 55+ options. Many resale homes host weekend open houses.",
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    blurb:
      "Master-planned Henderson community with trails, parks, and ongoing new construction. Open-house schedules update as builders and resellers publish MLS times.",
  },
  {
    name: "Cadence",
    slug: "cadence",
    blurb:
      "Newer Henderson master plan on the east side with Central Park events and multiple builders. Model homes and resale listings often hold weekend open houses.",
  },
  {
    name: "MacDonald Ranch",
    slug: "macdonald-ranch",
    blurb:
      "Southeast Henderson foothills master plan with villages such as Sunridge and Sun City MacDonald Ranch. Hillside and valley-floor homes may show on different weekends.",
  },
] as const;
