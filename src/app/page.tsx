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
  Plus,
  Minus,
  Star,
  Check,
  CaretDown,
} from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";
import { NotifyMeForm } from "@/components/marketing/notify-me-form";

gsap.registerPlugin(ScrollTrigger);

// ─── Hero Section ─────────────────────────────────────────────────
function HeroSection() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      [eyebrowRef.current, h1Ref.current, subRef.current, ctasRef.current, visualRef.current].forEach((el) => {
        if (el) el.classList.add("visible");
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial states
      gsap.set(eyebrowRef.current, { opacity: 0, y: 30 });
      gsap.set(h1Ref.current?.querySelectorAll(".hero-word") ?? [], { opacity: 0, y: 40 });
      gsap.set(subRef.current, { opacity: 0, y: 20 });
      gsap.set(ctasRef.current?.children ?? [], { opacity: 0, y: 20 });
      gsap.set(visualRef.current, { opacity: 0, x: 60 });

      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6 })
        .to(
          h1Ref.current?.querySelectorAll(".hero-word") ?? [],
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          "-=0.3"
        )
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(
          ctasRef.current?.children ?? [],
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        )
        .to(visualRef.current, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.5");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white pt-40 pb-24 md:pt-52 md:pb-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[55%_45%] lg:gap-20">

          {/* LEFT: copy stack */}
          <div className="flex flex-col gap-0">
            {/* Eyebrow */}
            <p
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B] w-max mb-6"
            >
              <Sparkle size={12} weight="fill" />
              AI Listing Studio
            </p>

            {/* H1 — word-by-word animation */}
            <h1
              ref={h1Ref}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#0F0E0D] leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {["One", "photo.", "Infinite", "listings."].map((word, i) => (
                <span
                  key={i}
                  className="hero-word inline-block mr-[0.2em]"
                  style={{ display: "inline-block" }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              ref={subRef}
              className="mt-6 text-lg text-[#0F0E0D]/55 max-w-xl leading-relaxed"
            >
              AI generates Amazon listing copy, A+ content images, and video — from a single product photo.
            </p>

            {/* CTAs */}
            <div ref={ctasRef} className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/login"
                className="bg-[#0F0E0D] text-white rounded-lg px-8 py-4 text-base font-medium hover:bg-[#27272A] transition-colors text-center btn-press"
              >
                Start Creating — Free
              </Link>
              <Link
                href="/gallery"
                className="border border-[#EAEAEA] text-[#0F0E0D] rounded-lg px-8 py-4 text-base font-medium hover:bg-[#F9F9F8] transition-colors text-center"
              >
                See Examples →
              </Link>
            </div>

            <p className="mt-5 text-xs text-[#0F0E0D]/35">
              Amazon US · UK · DE &nbsp;|&nbsp; eBay &nbsp;|&nbsp; Walmart &nbsp;|&nbsp; No credit card required
            </p>
          </div>

          {/* RIGHT: abstract bento grid of 4 product cards */}
          <div ref={visualRef} className="relative hidden lg:block h-[520px]">
            {/* Card 1 — Upload (back-right) */}
            <div className="absolute right-0 top-0 rotate-[2.5deg] z-30 w-[80%]">
              <div className="card-shell">
                <div className="card-core overflow-hidden">
                  <div className="bg-[#F9F9F8] border-b border-[#EAEAEA] px-4 py-2.5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                    </div>
                    <span className="text-xs text-[#787774] ml-2">Upload your product</span>
                  </div>
                  <div className="p-5 flex flex-col items-center gap-3">
                    <div className="w-full aspect-square border-2 border-dashed border-[#EAEAEA] rounded-xl flex flex-col items-center justify-center gap-2 bg-[#FAFAF9]">
                      <ArrowUp size={28} weight="bold" className="text-[#F59E0B]" />
                      <span className="text-xs text-[#787774]">Drop your photo here</span>
                    </div>
                    <div className="flex gap-2 w-full">
                      <div className="flex-1 h-8 bg-[#F9F9F8] rounded-lg border border-[#EAEAEA]" />
                      <div className="flex-1 h-8 bg-[#F9F9F8] rounded-lg border border-[#EAEAEA]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — AI Processing (middle) */}
            <div className="absolute right-8 top-28 rotate-[-1deg] z-20 w-[80%]">
              <div className="card-shell">
                <div className="card-core overflow-hidden">
                  <div className="bg-[#0F0E0D] border-b border-[#27272A] px-4 py-2.5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#787774]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#787774]" />
                    </div>
                    <span className="text-xs text-[#787774] ml-2">AI processing…</span>
                  </div>
                  <div className="p-5 space-y-3">
                    {[
                      { icon: <Sparkle size={16} weight="bold" className="text-[#F59E0B]" />, label: "Generating listing copy…", w: "72%" },
                      { icon: <Image size={16} weight="bold" className="text-[#F59E0B]" />, label: "Creating A+ images…", w: "48%" },
                      { icon: <VideoCamera size={16} weight="bold" className="text-[#F59E0B]" />, label: "Rendering video…", w: "28%" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        {item.icon}
                        <span className="text-xs text-[#787774]">{item.label}</span>
                        <div className="ml-auto w-16 h-1.5 bg-[#27272A] rounded-full overflow-hidden">
                          <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: item.w }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 — Output (front) */}
            <div className="absolute right-4 top-56 rotate-[0.5deg] z-10 w-[80%]">
              <div className="card-shell">
                <div className="card-core overflow-hidden">
                  <div className="bg-[#F9F9F8] border-b border-[#EAEAEA] px-4 py-2.5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                    </div>
                    <span className="text-xs text-[#787774] ml-2">Your outputs</span>
                    <span className="ml-auto text-[10px] font-bold text-[#F59E0B] border border-[#F59E0B]/30 rounded px-1.5 py-0.5 bg-[#F59E0B]/8 uppercase tracking-wider">Demo Output</span>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="h-14 bg-[#F9F9F8] rounded-lg border border-[#EAEAEA]" />
                    <div className="h-14 bg-[#F9F9F8] rounded-lg border border-[#EAEAEA]" />
                    <div className="flex gap-2">
                      <div className="flex-1 h-9 bg-[#F9F9F8] rounded-lg border border-[#EAEAEA]" />
                      <div className="flex-1 h-9 bg-[#F9F9F8] rounded-lg border border-[#EAEAEA]" />
                    </div>
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

// ─── Logo Bar (Social Proof) ───────────────────────────────────────
function LogoBarSection() {
  const LOGOS = ["Amazon", "Shopify", "Walmart", "TikTok Shop", "eBay", "Etsy"];

  return (
    <section className="border-y border-[#EAEAEA] py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-[#0F0E0D]/30 mb-8">
          Trusted by 2,400+ Amazon sellers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {LOGOS.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-[#0F0E0D]/25 hover:text-[#0F0E0D]/60 transition-colors cursor-default"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works (3-Step Bento) ──────────────────────────────────
function HowItWorksSection() {
  const STEPS = [
    {
      num: "01",
      icon: <ArrowUp size={24} weight="bold" className="text-[#F59E0B]" />,
      title: "Upload your product photo",
      desc: "Drag and drop or click. Any photo format works — our AI normalises it automatically.",
    },
    {
      num: "02",
      icon: <Sparkle size={24} weight="bold" className="text-[#F59E0B]" />,
      title: "AI generates your content",
      desc: "Listing copy, A+ content images, and video are created simultaneously from your single photo.",
    },
    {
      num: "03",
      icon: <Check size={24} weight="bold" className="text-[#F59E0B]" />,
      title: "Export and publish",
      desc: "Download in marketplace-ready formats or push directly to Amazon, eBay, and Walmart.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
            How It Works
          </p>
          <div className="h-px flex-1 bg-[#EAEAEA]" />
          {["01", "02", "03"].map((n) => (
            <span
              key={n}
              className="text-xs font-mono text-[#0F0E0D]/20"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {n}
            </span>
          ))}
        </div>

        {/* 3 Cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STEPS.map((step) => (
            <div key={step.num} className="reveal">
              <div className="card-shell h-full">
                <div className="card-core p-8 flex flex-col gap-6">
                  {/* Icon + number row */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F59E0B]/8 border border-[#F59E0B]/15">
                      {step.icon}
                    </div>
                    <span
                      className="text-5xl font-bold text-[#F59E0B]/20 leading-none select-none"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold text-[#0F0E0D] mb-2"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#0F0E0D]/55 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features Bento Grid ──────────────────────────────────────────
function FeaturesBentoSection() {
  const LARGE_FEATURES = [
    "AI-powered listing copy generation",
    "A+ content image creation",
    "Short-form video rendering",
    "Multi-marketplace export (Amazon, eBay, Walmart)",
    "Brand consistency across all outputs",
    "Instant download — no waiting",
  ];

  return (
    <section className="bg-[#FAFAF9] py-24 md:py-36 border-y border-[#EAEAEA]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="reveal mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-3">
            Everything you need
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0F0E0D] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Launch in minutes, not days
          </h2>
          <p className="mt-3 text-[#0F0E0D]/55 max-w-lg text-base">
            From a single product photo to a full Amazon listing — all assets generated automatically.
          </p>
        </div>

        {/* Asymmetrical bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Large left card (col-span-8) */}
          <div className="reveal md:col-span-8">
            <div className="card-shell h-full">
              <div className="card-core p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <h3
                    className="text-2xl font-semibold text-[#0F0E0D] mb-6"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Complete Amazon content stack
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {LARGE_FEATURES.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[#0F0E0D]/70">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/12">
                          <Check size={12} weight="bold" className="text-[#F59E0B]" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex gap-3">
                  <Link
                    href="/login"
                    className="bg-[#0F0E0D] text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-[#27272A] transition-colors"
                  >
                    Start free →
                  </Link>
                  <Link
                    href="/gallery"
                    className="border border-[#EAEAEA] text-[#0F0E0D] rounded-lg px-6 py-3 text-sm font-medium hover:bg-white transition-colors"
                  >
                    View gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: two stacked cards (col-span-4) */}
          <div className="reveal md:col-span-4 flex flex-col gap-5">
            {/* Brand Consistency */}
            <div className="card-shell">
              <div className="card-core p-6 flex flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F59E0B]/8 border border-[#F59E0B]/15">
                  <GridFour size={20} weight="bold" className="text-[#F59E0B]" />
                </div>
                <h4
                  className="font-semibold text-[#0F0E0D]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Brand Consistency
                </h4>
                <p className="text-xs text-[#0F0E0D]/55 leading-relaxed">
                  Every output maintains your brand&apos;s visual language and tone — no drift across marketplace formats.
                </p>
              </div>
            </div>

            {/* Multi-marketplace */}
            <div className="card-shell">
              <div className="card-core p-6 flex flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F59E0B]/8 border border-[#F59E0B]/15">
                  <Translate size={20} weight="bold" className="text-[#F59E0B]" />
                </div>
                <h4
                  className="font-semibold text-[#0F0E0D]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Multi-marketplace
                </h4>
                <p className="text-xs text-[#0F0E0D]/55 leading-relaxed">
                  One source image adapts to Amazon US/UK/DE, eBay, Walmart, and TikTok Shop requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature chips row */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: <Coins size={16} weight="bold" className="text-[#F59E0B]" />, label: "Credits, not subscription" },
            { icon: <Image size={16} weight="bold" className="text-[#F59E0B]" />, label: "A+ content modules" },
            { icon: <VideoCamera size={16} weight="bold" className="text-[#F59E0B]" />, label: "Video generation" },
            { icon: <Translate size={16} weight="bold" className="text-[#F59E0B]" />, label: "EU marketplace ready" },
          ].map((chip) => (
            <div
              key={chip.label}
              className="reveal flex items-center gap-2.5 rounded-xl border border-[#EAEAEA] bg-white px-4 py-3"
            >
              {chip.icon}
              <span className="text-xs font-medium text-[#0F0E0D]/70">{chip.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing Teaser ────────────────────────────────────────────────
function PricingTeaserSection() {
  const PLANS = [
    {
      name: "Starter",
      price: "Free",
      suffix: "",
      credits: "10 credits",
      featured: false,
      cta: "Get Started Free",
      bullets: ["10 generation credits", "Amazon US & UK", "Email support"],
    },
    {
      name: "Pro",
      price: "€79",
      suffix: "/mo",
      credits: "50 credits",
      featured: true,
      badge: "Most Popular",
      cta: "Start 14-day Trial",
      bullets: ["50 generation credits", "All marketplaces", "A+ content", "Priority support"],
    },
    {
      name: "Agency",
      price: "€199",
      suffix: "/mo",
      credits: "200 credits",
      featured: false,
      cta: "Contact Sales",
      bullets: ["200 generation credits", "Everything in Pro", "Dedicated manager", "Custom AI styles"],
    },
  ];

  return (
    <section className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-3">
            Simple pricing
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0F0E0D] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Pay per generation
          </h2>
          <p className="mt-3 text-[#0F0E0D]/55 max-w-md mx-auto text-base">
            No monthly commitment. No credit card required. Start with 10 free credits.
          </p>
        </div>

        {/* 3 pricing cards */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`reveal relative flex flex-col rounded-2xl p-7 ${
                plan.featured
                  ? "bg-white ring-2 ring-[#F59E0B] ring-offset-4"
                  : "bg-white border border-[#EAEAEA]"
              }`}
              style={{ minWidth: "260px", maxWidth: "320px" }}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#F59E0B] text-[#0F0E0D] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-base font-semibold text-[#0F0E0D]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-[#0F0E0D]/45 mt-0.5">{plan.credits}</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span
                    className="text-5xl font-bold text-[#0F0E0D]"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {plan.price}
                  </span>
                  {plan.suffix && (
                    <span className="text-sm text-[#0F0E0D]/45">{plan.suffix}</span>
                  )}
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-[#0F0E0D]/60">
                    <Check size={14} weight="bold" className="text-[#F59E0B] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="/login"
                className={`flex items-center justify-center rounded-xl py-3.5 text-sm font-semibold transition-colors btn-press ${
                  plan.featured
                    ? "bg-[#0F0E0D] text-white hover:bg-[#27272A]"
                    : "border border-[#EAEAEA] text-[#0F0E0D] hover:bg-[#FAFAF9]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-xs text-[#0F0E0D]/30">
          All prices in EUR · Credits never expire · Cancel anytime
        </p>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────
function TestimonialsSection() {
  const TESTIMONIALS = [
    {
      quote:
        "I was spending €400 a month on product photography. ListMyProduct replaced the entire workflow in one afternoon.",
      author: "Sophie R.",
      role: "Home goods seller",
      location: "Berlin, Germany",
      stars: 5,
    },
    {
      quote:
        "The A+ content alone increased my conversion rate by 18%. Worth every cent of the subscription.",
      author: "Marcus T.",
      role: "Electronics accessories",
      location: "Manchester, UK",
      stars: 5,
    },
  ];

  return (
    <section className="bg-[#FAFAF9] py-24 md:py-36 border-y border-[#EAEAEA]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-3">
            Social proof
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0F0E0D] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Loved by sellers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="reveal">
              <div className="card-shell h-full">
                <div className="card-core p-8 flex flex-col gap-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={16} weight="fill" className="text-[#F59E0B]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote
                    className="text-lg text-[#0F0E0D] leading-relaxed font-medium flex-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-[#EAEAEA]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/15 text-[#F59E0B] text-sm font-bold">
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F0E0D]">{t.author}</p>
                      <p className="text-xs text-[#0F0E0D]/40">
                        {t.role} · {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Accordion ─────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="font-semibold text-[#0F0E0D] text-base">{q}</span>
        <span className="shrink-0 mt-0.5 text-[#F59E0B]">
          {open ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}
        </span>
      </button>
      {open && (
        <p className="mt-3 text-sm text-[#0F0E0D]/55 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

function FaqSection() {
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
    {
      q: "Do the outputs meet Amazon's guidelines?",
      a: "Yes. All generated content is built to meet Amazon's current content guidelines, including image size requirements, A+ content module specifications, and listing copy best practices.",
    },
  ];

  return (
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
            Frequently asked questions
          </h2>
        </div>

        <div className="reveal">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* Bottom CTA inside FAQ section */}
        <div className="mt-12 rounded-2xl border border-[#EAEAEA] bg-[#FAFAF9] p-6 text-center">
          <p className="text-sm text-[#0F0E0D]/55">
            Still have questions?{" "}
            <a href="mailto:hello@listmyproduct.com" className="text-[#F59E0B] font-medium hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Footer Band ───────────────────────────────────────────────
function CtaFooterBand() {
  return (
    <section className="bg-[#0F0E0D] py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2
          className="reveal text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Ready to transform your listings?
        </h2>
        <p className="reveal mt-4 text-[#787774] text-lg max-w-xl mx-auto">
          Get 10 free generation credits when you sign up. No credit card required.
        </p>
        <div className="reveal mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="bg-[#F59E0B] text-[#0F0E0D] rounded-xl px-8 py-4 text-base font-semibold hover:bg-[#D97706] transition-colors btn-press"
          >
            Start Free →
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
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <MarketingPageShell>
      <HeroSection />
      <LogoBarSection />
      <HowItWorksSection />
      <FeaturesBentoSection />
      <PricingTeaserSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaFooterBand />
    </MarketingPageShell>
  );
}
