import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";
import { PricingCards, FaqItem } from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing — ListMyProduct",
  description: "Simple, transparent pricing. No subscription. Pay only for what you generate.",
};

const FAQS = [
  {
    q: "How do generation credits work?",
    a: "One credit is consumed each time you generate a complete output set — listing copy, A+ images, or video — for a single product. Credits are consumed immediately and never expire.",
  },
  {
    q: "Can I try ListMyProduct for free?",
    a: "Yes. Every new account receives 10 free generation credits. No credit card required.",
  },
  {
    q: "When will credit purchases be available?",
    a: "Credit purchases are coming soon. Leave your email above and we will notify you the moment checkout opens.",
  },
  {
    q: "Does it work for Amazon EU marketplaces?",
    a: "Yes. ListMyProduct supports Amazon US, UK, and DE. Content is generated in the appropriate language and format for each marketplace.",
  },
];

const FEATURE_ROWS = [
  { feature: "Generation credits", starter: "10", pro: "50 / month", agency: "200 / month" },
  { feature: "Marketplaces", starter: "Amazon US & UK", pro: "All marketplaces", agency: "All marketplaces" },
  { feature: "Listing copy", starter: true, pro: true, agency: true },
  { feature: "A+ content images", starter: false, pro: true, agency: true },
  { feature: "Video generation", starter: false, pro: true, agency: true },
  { feature: "Priority support", starter: false, pro: true, agency: true },
  { feature: "Dedicated account manager", starter: false, pro: false, agency: true },
  { feature: "Custom AI styles", starter: false, pro: false, agency: true },
];

function CheckCell({ value }: { value: boolean }) {
  if (value) {
    return (
      <span className="inline-flex justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    );
  }
  return <span className="text-[#EAEAEA] inline-flex justify-center">—</span>;
}

export default function PricingPage() {
  return (
    <MarketingPageShell>
      {/* Hero */}
      <section className="bg-white pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-5">
            Pricing
          </p>
          <h1
            className="reveal text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F0E0D] leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Simple, transparent pricing
          </h1>
          <p className="reveal mt-5 text-lg text-[#0F0E0D]/55 max-w-xl mx-auto">
            €2 per generation. No monthly commitment. Start with 10 free credits.
          </p>
        </div>
      </section>

      <PricingCards />

      {/* Feature Comparison Table */}
      <section className="border-t border-[#EAEAEA] py-20 md:py-28 bg-[#FAFAF9]">
        <div className="mx-auto max-w-3xl px-6">
          <h2
            className="reveal text-3xl md:text-4xl font-bold text-[#0F0E0D] mb-10"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Feature comparison
          </h2>
          <div className="reveal">
            {FEATURE_ROWS.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-4 gap-4 py-4 border-b border-[#EAEAEA] items-center"
              >
                <span className="text-sm text-[#0F0E0D]/60 col-span-1">{row.feature}</span>
                {([row.starter, row.pro, row.agency] as const).map((val, i) => (
                  <span key={i} className="text-sm font-medium text-[#0F0E0D] col-span-1 text-center">
                    {typeof val === "boolean" ? (
                      <CheckCell value={val} />
                    ) : (
                      <span className="text-xs">{val}</span>
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <div className="reveal mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-3">
              FAQ
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0F0E0D] leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Common pricing questions
            </h2>
          </div>

          <div className="reveal">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
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
            Start free — 10 credits
          </h2>
          <p className="reveal mt-3 text-[#787774] text-base">
            No credit card. No commitment.
          </p>
          <div className="reveal mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="bg-[#F59E0B] text-[#0F0E0D] rounded-xl px-8 py-4 text-base font-semibold hover:bg-[#D97706] transition-colors"
            >
              Get started →
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center border border-white/15 text-white rounded-xl px-8 py-4 text-base font-medium hover:border-white/30 transition-colors"
            >
              See examples
            </Link>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
