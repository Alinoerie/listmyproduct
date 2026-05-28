"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Sparkle,
  GridFour,
  Coins,
  Translate,
  Image,
  VideoCamera,
  CaretDown,
  CaretUp,
  Plus,
  Minus,
  Storefront,
  ShoppingCart,
  TiktokLogo,
  AmazonLogo,
} from "@phosphor-icons/react";
import { NotifyMeForm } from "@/components/marketing/notify-me-form";

// ─── Reveal hook (IntersectionObserver) ───────────────────────────
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .stagger-item").forEach((el) => observer.observe(el));
    document.querySelectorAll("[data-stagger]").forEach((container) => {
      container.querySelectorAll(".stagger-item").forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `calc(${i} * 80ms)`;
        observer.observe(child);
      });
    });
    return () => observer.disconnect();
  }, []);
}

// ─── HERO SECTION ─────────────────────────────────────────────────
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = sectionRef.current?.querySelectorAll(".hero-reveal");
    if (!els) return;
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 100 + i * 120);
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-[55%_45%] lg:gap-20">

          {/* LEFT: copy stack */}
          <div className="flex flex-col gap-0">
            <p className="hero-reveal reveal text-sm font-semibold uppercase tracking-[0.18em] text-[#F59E0B] mb-5">
              For Amazon sellers
            </p>
            <h1
              className="hero-reveal reveal text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F0E0D] leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
            >
              One photo.<br />Infinite listings.
            </h1>
            <p className="hero-reveal reveal mt-6 text-lg text-[#787774] max-w-md leading-relaxed">
              AI generates Amazon listing copy, A+ content images, and video — from a single product photo.
            </p>
            <div className="hero-reveal reveal mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/login"
                className="bg-[#F59E0B] text-[#0F0E0D] rounded-md px-7 py-3.5 text-sm font-semibold hover:bg-[#D97706] transition-colors text-center btn"
              >
                Start free — 10 credits
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#0F0E0D] border border-[#EAEAEA] rounded-md hover:bg-[#F9F9F8] transition-colors"
              >
                See outputs →
              </Link>
            </div>
            <p className="hero-reveal reveal mt-4 text-xs text-[#787774]">
              Amazon US · UK · DE &nbsp;|&nbsp; eBay &nbsp;|&nbsp; Walmart
            </p>
          </div>

          {/* RIGHT: staggered floating cards — upload → AI → output */}
          <div className="relative hidden lg:block h-[480px]">
            {/* Card 1 — Upload */}
            <div
              className="absolute right-0 top-0 rotate-[2.5deg] z-30 w-[78%] hero-reveal"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="bg-white rounded-[8px] border border-[#EAEAEA] overflow-hidden shadow-sm">
                <div className="bg-[#F9F9F8] border-b border-[#EAEAEA] px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                  </div>
                  <span className="text-xs text-[#787774] ml-2">Upload your product</span>
                </div>
                <div className="p-5 flex flex-col items-center gap-3">
                  <div className="w-full aspect-square bg-[#F9F9F8] border-2 border-dashed border-[#EAEAEA] rounded-[8px] flex flex-col items-center justify-center gap-2">
                    <ArrowUp size={28} weight="bold" className="text-[#F59E0B]" />
                    <span className="text-xs text-[#787774]">Drop your photo here</span>
                  </div>
                  <div className="flex gap-2 w-full">
                    <div className="flex-1 h-8 bg-[#F9F9F8] rounded-md border border-[#EAEAEA]" />
                    <div className="flex-1 h-8 bg-[#F9F9F8] rounded-md border border-[#EAEAEA]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — AI Processing (middle) */}
            <div
              className="absolute right-8 top-28 rotate-[-1deg] z-20 w-[78%] hero-reveal"
              style={{ transitionDelay: "450ms" }}
            >
              <div className="bg-white rounded-[8px] border border-[#EAEAEA] overflow-hidden shadow-sm">
                <div className="bg-[#0F0E0D] border-b border-[#27272A] px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#787774]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#787774]" />
                  </div>
                  <span className="text-xs text-[#787774] ml-2">AI processing…</span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <Sparkle size={18} weight="bold" className="text-[#F59E0B]" />
                    <span className="text-xs text-[#787774]">Generating listing copy…</span>
                    <div className="ml-auto w-16 h-1.5 bg-[#EAEAEA] rounded-full overflow-hidden">
                      <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: "65%" }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image size={18} weight="bold" className="text-[#F59E0B]" />
                    <span className="text-xs text-[#787774]">Creating A+ images…</span>
                    <div className="ml-auto w-16 h-1.5 bg-[#EAEAEA] rounded-full overflow-hidden">
                      <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: "40%" }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <VideoCamera size={18} weight="bold" className="text-[#F59E0B]" />
                    <span className="text-xs text-[#787774]">Rendering video…</span>
                    <div className="ml-auto w-16 h-1.5 bg-[#EAEAEA] rounded-full overflow-hidden">
                      <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: "20%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 — Output (front) */}
            <div
              className="absolute right-4 top-52 rotate-[0.5deg] z-10 w-[78%] hero-reveal"
              style={{ transitionDelay: "600ms" }}
            >
              <div className="bg-white rounded-[8px] border border-[#EAEAEA] overflow-hidden shadow-sm">
                <div className="bg-[#F9F9F8] border-b border-[#EAEAEA] px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                  </div>
                  <span className="text-xs text-[#787774] ml-2">Your outputs</span>
                  <span className="ml-auto text-[10px] font-bold text-[#F59E0B] border border-[#F59E0B] rounded px-1.5 py-0.5">DEMO OUTPUT</span>
                </div>
                <div className="p-4 space-y-2">
                  <div className="h-16 bg-[#F9F9F8] rounded-md border border-[#EAEAEA]" />
                  <div className="h-16 bg-[#F9F9F8] rounded-md border border-[#EAEAEA]" />
                  <div className="flex gap-2">
                    <div className="flex-1 h-10 bg-[#F9F9F8] rounded-md border border-[#EAEAEA]" />
                    <div className="flex-1 h-10 bg-[#F9F9F8] rounded-md border border-[#EAEAEA]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURES BENTO SECTION ───────────────────────────────────────
const FEATURES = [
  {
    icon: <ArrowUp size={22} weight="bold" className="text-[#F59E0B]" />,
    title: "One upload, everything",
    desc: "Upload a single product photo. Our AI adapts it for every marketplace format.",
    colSpan: 2,
  },
  {
    icon: <Storefront size={22} weight="bold" className="text-[#F59E0B]" />,
    title: "Amazon-ready content",
    desc: "Listings, A+ content, and video that meets Amazon's guidelines out of the box.",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    icon: <Translate size={22} weight="bold" className="text-[#F59E0B]" />,
    title: "Multi-marketplace",
    desc: "Export to Amazon US, UK, DE, eBay, and Walmart from one source.",
    colSpan: 1,
  },
  {
    icon: <Sparkle size={22} weight="bold" className="text-[#F59E0B]" />,
    title: "AI studio quality",
    desc: "Every output is generated to look professionally lit and styled.",
    colSpan: 1,
  },
  {
    icon: <GridFour size={22} weight="bold" className="text-[#F59E0B]" />,
    title: "A+ content modules",
    desc: "Complete module sets for Amazon A+ content with lifestyle and comparison charts.",
    colSpan: 1,
  },
  {
    icon: <Coins size={22} weight="bold" className="text-[#F59E0B]" />,
    title: "Credits, not subscription",
    desc: "Pay per generation. No monthly commitment. Start with 10 free credits.",
    colSpan: 2,
  },
];

function FeaturesSection() {
  useReveal();

  return (
    <section className="bg-[#F9F9F8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.18em] text-[#F59E0B] mb-3">
            Features
          </p>
          <h2
            className="reveal text-4xl md:text-5xl font-bold text-[#0F0E0D] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            Everything a seller needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3" data-stagger>
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="stagger-item bg-white border border-[#EAEAEA] rounded-[8px] p-6 flex flex-col gap-4"
              style={{
                gridColumn: feature.colSpan > 1 ? `span ${feature.colSpan}` : undefined,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[#F9F9F8] border border-[#EAEAEA]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F0E0D] text-base">{feature.title}</h3>
                </div>
              </div>
              <p className="text-sm text-[#787774] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS SECTION ─────────────────────────────────────────
const HOW_STEPS = [
  {
    num: "01",
    title: "Upload your product photo",
    desc: "Drag and drop or click to upload. Any format works — our AI normalises it automatically.",
  },
  {
    num: "02",
    title: "AI generates your content",
    desc: "Listing copy, A+ content images, and video are created simultaneously from your single photo.",
  },
  {
    num: "03",
    title: "Export and publish",
    desc: "Download in marketplace-ready formats or push directly to Amazon, eBay, and Walmart.",
  },
];

function HowItWorksSection() {
  useReveal();

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.18em] text-[#F59E0B] mb-3">
            How it works
          </p>
          <h2
            className="reveal text-4xl md:text-5xl font-bold text-[#0F0E0D] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            Three steps to launch
          </h2>
        </div>

        {/* Steps with connecting line */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4" data-stagger>
          {/* Horizontal connector line */}
          <div className="hidden md:block absolute top-[52px] left-[20%] right-[20%] h-px bg-[#EAEAEA]" />

          {HOW_STEPS.map((step) => (
            <div key={step.num} className="stagger-item relative flex flex-col items-center text-center">
              <div
                className="text-[80px] font-bold text-[#F59E0B] leading-none mb-3 opacity-30 select-none"
                style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
              >
                {step.num}
              </div>
              <h3 className="font-semibold text-[#0F0E0D] text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-[#787774] leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING SECTION ───────────────────────────────────────────────
const PRICING_PLANS = [
  {
    name: "Starter",
    credits: "10 credits",
    price: "Free",
    badge: null,
    featured: false,
    bullets: ["10 generations", "Amazon US & UK", "Email support"],
  },
  {
    name: "Pro",
    credits: "50 credits/mo",
    price: "€79",
    badge: "Most popular",
    featured: true,
    bullets: ["50 generations", "All marketplaces", "A+ content", "Priority support"],
  },
  {
    name: "Scale",
    credits: "200 credits/mo",
    price: "€199",
    badge: null,
    featured: false,
    bullets: ["200 generations", "Everything in Pro", "Dedicated support", "Custom styles"],
  },
];

function PricingSection() {
  useReveal();

  return (
    <section className="bg-[#F9F9F8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.18em] text-[#F59E0B] mb-3">
            Pricing
          </p>
          <h2
            className="reveal text-4xl md:text-5xl font-bold text-[#0F0E0D] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            Pay per generation
          </h2>
          <p className="reveal mt-3 text-[#787774]">€2 per generation. No monthly fees. Cancel anytime.</p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4" data-stagger>
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`stagger-item relative flex flex-col rounded-[8px] p-6 ${
                plan.featured
                  ? "bg-white border-2 border-[#F59E0B]"
                  : "bg-white border border-[#EAEAEA]"
              }`}
              style={{ minWidth: "260px", maxWidth: "320px" }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#F59E0B] text-[#0F0E0D] text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
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

              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {plan.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-[#787774]">
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
  );
}

// ─── SOCIAL PROOF SECTION ─────────────────────────────────────────
const LOGOS = ["Amazon", "Shopify", "Walmart", "TikTok Shop"];

const TESTIMONIALS = [
  {
    quote:
      "I was spending €400 a month on product photography. ListMyProduct replaced the entire workflow in one afternoon.",
    author: "Sophie R.",
    role: "Home goods seller, Berlin",
  },
  {
    quote:
      "The A+ content alone increased my conversion rate by 18%. Worth every cent of the subscription.",
    author: "Marcus T.",
    role: "Electronics accessories, UK",
  },
];

function SocialProofSection() {
  useReveal();

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Logo wall */}
        <div className="mb-16">
          <p className="reveal text-center text-sm text-[#787774] uppercase tracking-widest mb-8">
            Trusted by sellers on
          </p>
          <div className="reveal flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {LOGOS.map((name) => (
              <span
                key={name}
                className="text-base md:text-lg font-semibold text-[#0F0E0D] tracking-tight opacity-60 hover:opacity-100 transition-opacity"
                style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-stagger>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="stagger-item bg-[#F9F9F8] border border-[#EAEAEA] rounded-[8px] p-8"
            >
              <blockquote className="text-[#0F0E0D] text-lg leading-relaxed font-medium">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#0F0E0D] text-sm font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F0E0D]">{t.author}</p>
                  <p className="text-xs text-[#787774]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ SECTION ───────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does AI generate my listing from just one photo?",
    a: "Our AI analyses your product photo to understand its category, style, and key features. It then generates marketplace-optimised copy and images that match your product's positioning — no manual input required beyond the initial upload.",
  },
  {
    q: "Which marketplaces are supported?",
    a: "ListMyProduct currently supports Amazon US, UK, and DE, as well as eBay and Walmart. Each marketplace has its own content requirements built into the generation pipeline.",
  },
  {
    q: "What is a generation credit?",
    a: "One credit is consumed each time you generate a complete set of outputs — listing copy, A+ content images, or video — for a single product. You receive 10 free credits when you sign up.",
  },
  {
    q: "Is there a monthly subscription?",
    a: "No. You pay per credit pack with no recurring commitment. Credit packs start at €29 for 10 credits and go down to ~€1 per credit at higher volumes.",
  },
  {
    q: "Can I export to Amazon EU marketplaces?",
    a: "Yes. Amazon UK and DE are fully supported alongside Amazon US. Content is generated in the appropriate language and format for each marketplace.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="font-semibold text-[#0F0E0D] text-base">{q}</span>
        <span className="shrink-0 text-[#F59E0B] mt-0.5">
          {open ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}
        </span>
      </button>
      {open && (
        <p className="mt-3 text-sm text-[#787774] leading-relaxed">{a}</p>
      )}
    </div>
  );
}

function FaqSection() {
  useReveal();

  return (
    <section className="bg-white py-20 md:py-28 border-t border-[#EAEAEA]">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-12">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.18em] text-[#F59E0B] mb-3">
            FAQ
          </p>
          <h2
            className="reveal text-4xl md:text-5xl font-bold text-[#0F0E0D] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            Common questions
          </h2>
        </div>

        <div className="reveal">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ───────────────────────────────────────────────────
function CtaSection() {
  useReveal();

  return (
    <section className="bg-[#0F0E0D] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2
          className="reveal text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
        >
          Ready to stop paying for photoshoots?
        </h2>
        <p className="reveal mt-4 text-[#787774] text-lg max-w-xl mx-auto">
          Get 10 free generation credits when you sign up. No credit card required.
        </p>
        <div className="reveal mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="bg-[#F59E0B] text-[#0F0E0D] rounded-md px-8 py-3.5 text-sm font-semibold hover:bg-[#D97706] transition-colors btn"
          >
            Start generating free
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white border border-[#27272A] rounded-md hover:border-[#787774] transition-colors"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <SocialProofSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
