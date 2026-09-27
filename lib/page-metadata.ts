import type { Metadata } from "next";
import { getCanonicalUrl } from "./site-url";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetaInput): Metadata {
  const canonical = getCanonicalUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
  };
}
