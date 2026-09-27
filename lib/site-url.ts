/** Canonical site URL — www primary for openhouseupdates.com */
const DEFAULT_SITE_URL = "https://www.openhouseupdates.com";

export function getSiteUrl(): string {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    "";
  if (!fromEnv) return DEFAULT_SITE_URL;
  const normalized = fromEnv.replace(/\/$/, "");
  if (normalized.startsWith("http://")) {
    return normalized.replace("http://", "https://");
  }
  return normalized.startsWith("https://") ? normalized : `https://${normalized}`;
}

export function getCanonicalUrl(path = "/"): string {
  const base = getSiteUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === "/") return base;
  return `${base}${cleanPath}`;
}
