import type { Metadata } from "next";
import Link from "next/link";
import { NotifyMeForm } from "@/components/marketing/notify-me-form";

export const metadata: Metadata = {
  title: "Pricing — ListMyProduct",
  description: "Simple, transparent pricing. No subscription. Pay only for what you generate.",
};

const PLANS: Array<{
  name: string;
  credits: string;
  price: string;
  featured: boolean;
  bullets: string[];
  badge?: string;
}> = [
  {
    name: "Starter",
    credits: "10 credits",
    price: "Free",
    featured: false,
    bullets: [
      "10 generation credits",
      "Amazon US & UK export",
      "Email support",
    ],
  },
  {
    name: "Pro",
    credits: "50 credits / month",
    price: "€79",
    featured: true,
    badge: "Most popular",
    bullets: [
      "50 generation credits",
      "All marketplaces (Amazon, eBay, Walmart)",
      "A+ content generation",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    credits: "200 credits / month",
    price: "€199",
    featured: false,
    bullets: [
      "200 generation credits",
      "Everything in Pro",
      "Dedicated account manager",
      "Custom AI styles",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F59E0B] mb-4">
            Pricing
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#0F0E0D] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            Simple, transparent
          </h1>
          <p className="mt-4 text-lg text-[#787774]">
            €2 per generation. No monthly commitment. Start with 10 free credits.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-5">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[8px] p-7 ${
                  plan.featured
                    ? "bg-white border-2 border-[#F59E0B]"
                    : "bg-white border border-[#EAEAEA]"
                }`}
                style={{ minWidth: "280px", maxWidth: "340px" }}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#F59E0B] text-[#0F0E0D] text-xs font-bold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-semibold text-[#0F0E0D] text-base">{plan.name}</h3>
                  <p className="text-sm text-[#787774] mt-1">{plan.credits}</p>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span
                      className="text-4xl font-bold text-[#0F0E0D]"
                      style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
                    >
                      {plan.price}
                    </span>
                    {plan.price !== "Free" && (
                      <span className="text-sm text-[#787774]">/mo</span>
                    )}
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-[#787774]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                <NotifyMeForm
                  placeholder="Your email"
                  buttonText="Notify me when checkout opens"
                  variant={plan.featured ? "primary" : "outline"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#EAEAEA] py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0F0E0D] mb-10"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            Frequently asked
          </h2>
          <div className="space-y-0">
            {[
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
            ].map((faq) => (
              <div key={faq.q} className="accordion-item py-5">
                <p className="font-semibold text-[#0F0E0D] text-base mb-2">{faq.q}</p>
                <p className="text-sm text-[#787774] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0F0E0D] py-16 px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
        >
          Start free — 10 credits
        </h2>
        <p className="mt-3 text-[#787774]">No credit card. No commitment.</p>
        <Link
          href="/login"
          className="mt-8 inline-block bg-[#F59E0B] text-[#0F0E0D] rounded-md px-8 py-3.5 text-sm font-semibold hover:bg-[#D97706] transition-colors"
        >
          Get started
        </Link>
      </section>
    </div>
  );
}
