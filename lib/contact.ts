/**
 * Single source for public phone display on openhouseupdates.com.
 * When null, UI and schema must not render tel links or phone text.
 */
export const SITE_PHONE: string | null = null;

export function getPhoneDisplay(): string | null {
  return SITE_PHONE;
}

export function getPhoneTelHref(): string | null {
  if (!SITE_PHONE) return null;
  const digits = SITE_PHONE.replace(/\D/g, "").replace(/^1/, "");
  if (!digits) return null;
  return `tel:+1${digits}`;
}
