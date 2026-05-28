"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { List, X } from "@phosphor-icons/react";
import { gsap } from "gsap";

const NAV_LINKS = [
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/compare", label: "Compare" },
  { href: "/how-it-works", label: "How It Works" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP hamburger → X morph
  useEffect(() => {
    if (!line1Ref.current || !line2Ref.current || !line3Ref.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (mobileOpen) {
      gsap.to(line1Ref.current, { y: 6, rotation: 45, duration: 0.3, ease: "power2.out" });
      gsap.to(line2Ref.current, { opacity: 0, duration: 0.2 });
      gsap.to(line3Ref.current, { y: -6, rotation: -45, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to([line1Ref.current, line3Ref.current], { y: 0, rotation: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(line2Ref.current, { opacity: 1, duration: 0.2 });
    }
  }, [mobileOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto mt-6 w-max">
          <div
            className="flex items-center gap-1 rounded-full border border-white/20 bg-white/70 px-3 py-2.5 backdrop-blur-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 pl-1 pr-3">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="#F59E0B" />
                <path d="M10 8h7a4 4 0 010 8h-3v8h-4V8z" fill="white" />
              </svg>
              <span
                className="text-base font-semibold text-[#0F0E0D] tracking-tight whitespace-nowrap"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                ListMyProduct
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 px-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-[#0F0E0D]/70 hover:text-[#0F0E0D] transition-colors rounded-lg hover:bg-[#F9F9F8] whitespace-nowrap"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2 pl-2 pr-1.5">
              <Link
                href="/login"
                className="px-4 py-2 text-sm text-[#0F0E0D]/70 hover:text-[#0F0E0D] transition-colors rounded-lg hover:bg-[#F9F9F8]"
              >
                Sign in
              </Link>
              <Link
                href="/login"
                className="bg-[#0F0E0D] text-white rounded-lg px-5 py-2 text-sm font-medium hover:bg-[#27272A] transition-colors btn-press whitespace-nowrap"
              >
                Start Free
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              ref={hamburgerRef}
              className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full bg-[#F9F9F8] p-2 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                ref={line1Ref}
                className="block h-0.5 w-4 origin-center rounded-full bg-[#0F0E0D] transition-transform"
              />
              <span
                ref={line2Ref}
                className="block h-0.5 w-4 rounded-full bg-[#0F0E0D] transition-opacity"
              />
              <span
                ref={line3Ref}
                className="block h-0.5 w-4 origin-center rounded-full bg-[#0F0E0D] transition-transform"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col backdrop-blur-3xl bg-white/90">
          <div className="flex justify-end px-6 pt-6">
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F9F9F8]"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} weight="bold" className="text-[#0F0E0D]" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-[#EAEAEA] py-5 text-2xl font-semibold text-[#0F0E0D] transition-colors hover:text-[#F59E0B]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-6 pb-12 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center border border-[#EAEAEA] rounded-xl py-4 text-base font-medium text-[#0F0E0D] transition-colors hover:bg-[#F9F9F8]"
            >
              Sign in
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center bg-[#0F0E0D] text-white rounded-xl py-4 text-base font-medium transition-colors hover:bg-[#27272A]"
            >
              Start Free
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
