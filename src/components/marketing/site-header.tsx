"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EAEAEA]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#0F0E0D]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill="#F59E0B" />
            <path d="M10 8h7a4 4 0 010 8h-3v8h-4V8z" fill="white" />
          </svg>
          <span
            className="text-lg font-semibold text-[#0F0E0D] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            ListMyProduct
          </span>
        </Link>

        {/* Spacer */}
        <div className="w-10 md:hidden" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/gallery" className="text-sm text-[#787774] hover:text-[#0F0E0D] transition-colors">
            Gallery
          </Link>
          <Link href="/pricing" className="text-sm text-[#787774] hover:text-[#0F0E0D] transition-colors">
            Pricing
          </Link>
          <Link href="/how-it-works" className="text-sm text-[#787774] hover:text-[#0F0E0D] transition-colors">
            How it works
          </Link>
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#0F0E0D] border border-[#EAEAEA] rounded-md hover:bg-[#F9F9F8] transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/login"
            className="bg-[#F59E0B] text-[#0F0E0D] rounded-md px-5 py-2 text-sm font-semibold hover:bg-[#D97706] transition-colors btn"
          >
            Get started
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#EAEAEA] bg-white px-4 py-6 flex flex-col gap-4">
          <Link
            href="/gallery"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-[#0F0E0D] py-2"
          >
            Gallery
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-[#0F0E0D] py-2"
          >
            Pricing
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-[#0F0E0D] py-2"
          >
            How it works
          </Link>
          <div className="border-t border-[#EAEAEA] pt-4 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[#0F0E0D] py-2 text-center border border-[#EAEAEA] rounded-md"
            >
              Sign in
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="bg-[#F59E0B] text-[#0F0E0D] rounded-md px-5 py-2.5 text-sm font-semibold text-center hover:bg-[#D97706] transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
