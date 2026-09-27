import { getPhoneDisplay, getPhoneTelHref } from "@/lib/contact";

type PhoneLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function PhoneLink({ className, children }: PhoneLinkProps) {
  const href = getPhoneTelHref();
  const display = getPhoneDisplay();
  if (!href || !display) return null;
  return (
    <a href={href} className={className}>
      {children ?? display}
    </a>
  );
}
