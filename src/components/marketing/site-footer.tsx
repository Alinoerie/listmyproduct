"use client";

import Link from "next/link";
import { TwitterLogo, LinkedinLogo, YoutubeLogo, GithubLogo } from "@phosphor-icons/react";

const FOOTER_LINKS = {
  Product: [
    { href: "/pricing", label: "Pricing" },
    { href: "/gallery", label: "Gallery" },
    { href: "/compare", label: "Compare" },
    { href: "/how-it-works", label: "How It Works" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#0F0E0D] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="#F59E0B" />
                <path d="M10 8h7a4 4 0 010 8h-3v8h-4V8z" fill="white" />
              </svg>
              <span
                className="text-lg font-semibold text-white tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                ListMyProduct
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              One photo. Infinite listings. AI-powered content generation for Amazon sellers.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {[
                { icon: <TwitterLogo size={20} weight="fill" />, label: "Twitter" },
                { icon: <LinkedinLogo size={20} weight="fill" />, label: "LinkedIn" },
                { icon: <YoutubeLogo size={20} weight="fill" />, label: "YouTube" },
                { icon: <GithubLogo size={20} weight="fill" />, label: "GitHub" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white/40 transition-colors hover:text-white hover:bg-white/5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3
                className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {category}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} ListMyProduct. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built for Amazon sellers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
