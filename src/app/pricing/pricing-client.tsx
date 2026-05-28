"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Plus, Minus } from "@phosphor-icons/react";
import { NotifyMeForm } from "@/components/marketing/notify-me-form";

export function PricingCards() {
  const PLANS = [
    {
      name: "Starter",
      credits: "10 credits",
      price: "Free",
      suffix: "",
      featured: false,
      bullets: [
        "10 generation credits",
        "Amazon US & UK export",
        "Listing copy generation",
        "Email support",
      ],
    },
    {
      name: "Pro",
      credits: "50 credits / month",
      price: "€79",
      suffix: "/mo",
      featured: true,
      badge: "Most Popular",
      bullets: [
        "50 generation credits",
        "All marketplaces (Amazon, eBay, Walmart)",
        "A+ content generation",
        "Short-form video",
        "Priority support",
      ],
    },
    {
      name: "Agency",
      credits: "200 credits / month",
      price: "€199",
      suffix: "/mo",
      featured: false,
      bullets: [
        "200 generation credits",
        "Everything in Pro",
        "Dedicated account manager",
        "Custom AI styles",
        "Volume pricing on top-ups",
      ],
    },
  ];

  return (
    <section className="bg-white pb-24 md:pb-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`reveal relative flex flex-col rounded-2xl p-7 ${
                plan.featured
                  ? "bg-white ring-2 ring-[#F59E0B] ring-offset-4"
                  : "bg-white border border-[#EAEAEA]"
              }`}
              style={{ minWidth: "260px", maxWidth: "340px" }}
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

export function FaqItem({ q, a }: { q: string; a: string }) {
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
