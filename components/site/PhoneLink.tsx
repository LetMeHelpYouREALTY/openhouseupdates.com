import { SITE_PHONE } from "@/lib/site-config";

type PhoneLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function PhoneLink({ className, children }: PhoneLinkProps) {
  if (!SITE_PHONE) return null;
  const tel = SITE_PHONE.replace(/\D/g, "");
  return (
    <a href={`tel:+1${tel}`} className={className}>
      {children ?? SITE_PHONE}
    </a>
  );
}
