"use client";

import Link from "next/link";
import { Check, X } from "@phosphor-icons/react";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";

const COMPETITORS = [
  {
    name: "ListMyProduct",
    highlight: true,
    price: "From €0",
    priceSub: "10 free credits",
    cta: "Start free",
    ctaHref: "/login",
  },
  {
    name: "Ecomtent",
    highlight: false,
    price: "€99/mo",
    priceSub: "starting",
    cta: "Visit site",
    ctaHref: "#",
  },
  {
    name: "Pixii",
    highlight: false,
    price: "€149/mo",
    priceSub: "starting",
    cta: "Visit site",
    ctaHref: "#",
  },
  {
    name: "Amazon Native",
    highlight: false,
    price: "Included",
    priceSub: "with subscription",
    cta: "Learn more",
    ctaHref: "#",
  },
];

const FEATURES = [
  {
    category: "Pricing",
    items: [
      { feature: "Free plan", listmyproduct: true, ecomtent: false, pixii: false, amazonNative: false },
      { feature: "Pay per generation", listmyproduct: true, ecomtent: false, pixii: false, amazonNative: false },
      { feature: "No monthly commitment", listmyproduct: true, ecomtent: false, pixii: false, amazonNative: false },
    ],
  },
  {
    category: "AI Quality",
    items: [
      { feature: "GPT-4 Vision powered", listmyproduct: true, ecomtent: true, pixii: true, amazonNative: false },
      { feature: "Custom model fine-tuning", listmyproduct: false, ecomtent: true, pixii: true, amazonNative: false },
      { feature: "Brand style adaptation", listmyproduct: true, ecomtent: false, pixii: false, amazonNative: false },
    ],
  },
  {
    category: "Content Types",
    items: [
      { feature: "Listing copy", listmyproduct: true, ecomtent: true, pixii: true, amazonNative: true },
      { feature: "A+ content images", listmyproduct: true, ecomtent: true, pixii: false, amazonNative: false },
      { feature: "Short-form video", listmyproduct: true, ecomtent: false, pixii: false, amazonNative: false },
    ],
  },
  {
    category: "Marketplaces",
    items: [
      { feature: "Amazon US / UK / DE", listmyproduct: true, ecomtent: true, pixii: true, amazonNative: true },
      { feature: "eBay", listmyproduct: true, ecomtent: false, pixii: false, amazonNative: false },
      { feature: "Walmart", listmyproduct: true, ecomtent: false, pixii: false, amazonNative: false },
      { feature: "TikTok Shop", listmyproduct: true, ecomtent: false, pixii: false, amazonNative: false },
    ],
  },
  {
    category: "Brand Consistency",
    items: [
      { feature: "Brand kit", listmyproduct: true, ecomtent: false, pixii: false, amazonNative: false },
      { feature: "Style presets", listmyproduct: true, ecomtent: false, pixii: true, amazonNative: false },
      { feature: "Multi-product consistency", listmyproduct: true, ecomtent: false, pixii: false, amazonNative: false },
    ],
  },
];

function Cell({ value, highlight = false }: { value: boolean; highlight?: boolean }) {
  if (value) {
    return <Check size={18} weight="bold" className={highlight ? "text-[#F59E0B]" : "text-[#0F0E0D]/30"} />;
  }
  return <X size={18} weight="bold" className="text-[#EAEAEA]" />;
}

export default function ComparePage() {
  return (
    <MarketingPageShell>
      {/* Hero */}
      <section className="bg-white pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-5">
            Compare
          </p>
          <h1
            className="reveal text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F0E0D] leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            ListMyProduct vs Alternatives
          </h1>
          <p className="reveal mt-5 text-lg text-[#0F0E0D]/55 max-w-xl mx-auto">
            See how we stack up against the competition — on features, pricing, and AI quality.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white pb-24 md:pb-36">
        <div className="mx-auto max-w-6xl px-6">

          {/* Competitor header cards */}
          <div className="reveal mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {COMPETITORS.map((comp) => (
              <div
                key={comp.name}
                className={`rounded-2xl p-5 flex flex-col gap-3 ${
                  comp.highlight
                    ? "bg-[#0F0E0D] text-white"
                    : "bg-[#FAFAF9] border border-[#EAEAEA]"
                }`}
              >
                <div>
                  <p
                    className={`text-base font-semibold ${comp.highlight ? "text-white" : "text-[#0F0E0D]"}`}
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {comp.name}
                  </p>
                  <div className="mt-1">
                    <span
                      className={`text-2xl font-bold ${comp.highlight ? "text-white" : "text-[#0F0E0D]"}`}
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {comp.price}
                    </span>
                    <span className={`text-xs ml-1 ${comp.highlight ? "text-white/40" : "text-[#0F0E0D]/35"}`}>
                      {comp.priceSub}
                    </span>
                  </div>
                </div>
                <Link
                  href={comp.ctaHref}
                  className={`flex items-center justify-center rounded-xl py-2.5 text-xs font-semibold transition-colors btn-press ${
                    comp.highlight
                      ? "bg-[#F59E0B] text-[#0F0E0D] hover:bg-[#D97706]"
                      : "border border-[#EAEAEA] text-[#0F0E0D]/70 hover:bg-white"
                  }`}
                >
                  {comp.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Feature rows */}
          <div className="reveal">
            {FEATURES.map((group) => (
              <div key={group.category} className="mb-8">
                {/* Category header */}
                <div className="grid grid-cols-[200px_1fr_1fr_1fr_1fr] gap-4 py-3 border-b border-[#EAEAEA]">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0F0E0D]/30 col-span-1">
                    {group.category}
                  </p>
                  {COMPETITORS.map((comp) => (
                    <p
                      key={comp.name}
                      className={`text-xs font-semibold uppercase tracking-[0.15em] text-center ${
                        comp.highlight ? "text-[#F59E0B]" : "text-[#0F0E0D]/30"
                      }`}
                    >
                      {comp.name}
                    </p>
                  ))}
                </div>

                {/* Feature rows */}
                {group.items.map((item) => (
                  <div
                    key={item.feature}
                    className="grid grid-cols-[200px_1fr_1fr_1fr_1fr] gap-4 py-4 border-b border-[#EAEAEA] items-center hover:bg-[#FAFAF9]/50 transition-colors"
                  >
                    <span className="text-sm text-[#0F0E0D]/60">{item.feature}</span>
                    <div className="flex justify-center">
                      <Cell value={item.listmyproduct} highlight />
                    </div>
                    <div className="flex justify-center">
                      <Cell value={item.ecomtent} />
                    </div>
                    <div className="flex justify-center">
                      <Cell value={item.pixii} />
                    </div>
                    <div className="flex justify-center">
                      <Cell value={item.amazonNative} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0F0E0D] py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2
            className="reveal text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Still deciding?
          </h2>
          <p className="reveal mt-3 text-[#787774] text-base max-w-md mx-auto">
            Start with 10 free generation credits — no credit card, no commitment.
          </p>
          <div className="reveal mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="bg-[#F59E0B] text-[#0F0E0D] rounded-xl px-8 py-4 text-base font-semibold hover:bg-[#D97706] transition-colors btn-press"
            >
              Start free →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border border-white/15 text-white rounded-xl px-8 py-4 text-base font-medium hover:border-white/30 transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
