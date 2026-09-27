"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/henderson-open-houses-this-weekend", label: "This Weekend" },
  { href: "/listings", label: "Homes for Sale" },
  { href: "/open-house-tour-tips", label: "Tour Tips" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const neighborhoodLinks = [
  { href: "/neighborhoods/green-valley", label: "Green Valley" },
  { href: "/neighborhoods/anthem", label: "Anthem" },
  { href: "/neighborhoods/inspirada", label: "Inspirada" },
  { href: "/neighborhoods/cadence", label: "Cadence" },
  { href: "/neighborhoods/macdonald-ranch", label: "MacDonald Ranch" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <span className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
              {siteConfig.name}
            </span>
            <span className="text-xs text-slate-500 hidden sm:block">
              Henderson open houses
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-blue-600 font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-slate-700 hover:text-blue-600 font-medium text-sm"
                onClick={() => setAreasOpen((v) => !v)}
                aria-expanded={areasOpen}
              >
                Areas <ChevronDown className="h-4 w-4" />
              </button>
              {areasOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-white border rounded-lg shadow-lg py-2">
                  {neighborhoodLinks.map((n) => (
                    <Link
                      key={n.href}
                      href={n.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                      onClick={() => setAreasOpen(false)}
                    >
                      {n.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Button asChild size="sm">
              <Link href="/contact">Schedule a showing</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pt-4 pb-2 border-t mt-3 space-y-2">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-slate-800 font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <p className="text-xs font-semibold text-slate-500 pt-2">Henderson areas</p>
            {neighborhoodLinks.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="block py-1 text-slate-700"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Schedule a showing
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
