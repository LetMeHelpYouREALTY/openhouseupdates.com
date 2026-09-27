import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  const paths = [
    "/",
    "/henderson-open-houses-this-weekend",
    "/listings",
    "/open-house-tour-tips",
    "/new-construction",
    "/buyers",
    "/home-valuation",
    "/faq",
    "/about",
    "/contact",
    "/neighborhoods/green-valley",
    "/neighborhoods/anthem",
    "/neighborhoods/inspirada",
    "/neighborhoods/cadence",
    "/neighborhoods/macdonald-ranch",
  ];

  return paths.map((path) => ({
    url: path === "/" ? baseUrl : `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "/listings" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
