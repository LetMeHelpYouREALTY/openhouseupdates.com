import Link from "next/link";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import { PhoneLink } from "@/components/site/PhoneLink";

const footerLinks = [
  { href: "/henderson-open-houses-this-weekend", label: "Open houses this weekend" },
  { href: "/listings", label: "Homes for sale" },
  { href: "/buyers", label: "Buyer guide" },
  { href: "/home-valuation", label: "Home value" },
  { href: "/new-construction", label: "New construction" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <p className="text-white font-semibold text-lg mb-2">{siteConfig.name}</p>
          <p className="text-sm leading-relaxed">
            Henderson-only open house planning for buyers touring Green Valley, Anthem,
            Inspirada, Cadence, and MacDonald Ranch.
          </p>
          <p className="text-sm mt-4">
            Also touring Las Vegas? See{" "}
            <a
              href={siteConfig.sisterSite.href}
              className="text-blue-400 hover:underline"
              rel="noopener noreferrer"
            >
              {siteConfig.sisterSite.label}
            </a>{" "}
            on openhouseupdate.com.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">{agentInfo.name}</p>
          <p className="text-sm">{agentInfo.title}</p>
          <p className="text-sm">Nevada license {agentInfo.license}</p>
          <p className="text-sm mt-2">{officeInfo.name}</p>
          <p className="text-sm mt-2">{officeInfo.address.full}</p>
          <p className="text-sm mt-2">
            <Link href="/contact" className="text-blue-400 hover:underline">
              Contact form &amp; scheduling
            </Link>
          </p>
          <PhoneLink className="text-sm mt-2 block text-blue-400 hover:underline" />
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 pt-6 border-t border-slate-700 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {agentInfo.name}. {officeInfo.name}. Equal
          Housing Opportunity. All material presented herein is intended for information
          purposes only. Listing data is deemed reliable but not guaranteed.
        </p>
      </div>
    </footer>
  );
}
