"use client";

import { useState } from "react";
import Link from "next/link";
import { Image, VideoCamera, GridFour, Plus, Minus } from "@phosphor-icons/react";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";

const TABS = ["All", "Amazon Listing", "A+ Content", "Video"] as const;
type Tab = (typeof TABS)[number];

// Demo outputs: each is a placeholder "mockup" card
const DEMO_OUTPUTS: Array<{
  id: number;
  type: "listing" | "aplus" | "video";
  label: string;
  color: string;
  aspect: string;
  title: string;
}> = [
  { id: 1, type: "listing", label: "Amazon Listing", color: "#F9F9F8", aspect: "aspect-[4/3]", title: "Product Listing Copy" },
  { id: 2, type: "aplus", label: "A+ Content", color: "#FAFAF7", aspect: "aspect-[16/9]", title: "Lifestyle Module" },
  { id: 3, type: "video", label: "Video", color: "#F8F7F5", aspect: "aspect-[9/16]", title: "Short-form Video" },
  { id: 4, type: "listing", label: "Amazon Listing", color: "#F9F9F8", aspect: "aspect-[4/3]", title: "Backend Keywords" },
  { id: 5, type: "aplus", label: "A+ Content", color: "#FAFAF7", aspect: "aspect-[1/1]", title: "Comparison Chart" },
  { id: 6, type: "listing", label: "Amazon Listing", color: "#F9F9F8", aspect: "aspect-[4/3]", title: "Title Optimization" },
  { id: 7, type: "video", label: "Video", color: "#F8F7F5", aspect: "aspect-[9/16]", title: "Product Video" },
  { id: 8, type: "aplus", label: "A+ Content", color: "#FAFAF7", aspect: "aspect-[16/9]", title: "Feature Highlights" },
  { id: 9, type: "listing", label: "Amazon Listing", color: "#F9F9F8", aspect: "aspect-[4/3]", title: "Bullet Points" },
  { id: 10, type: "aplus", label: "A+ Content", color: "#FAFAF7", aspect: "aspect-[4/3]", title: "Brand Story" },
  { id: 11, type: "video", label: "Video", color: "#F8F7F5", aspect: "aspect-[9/16]", title: "Unboxing Video" },
  { id: 12, type: "listing", label: "Amazon Listing", color: "#F9F9F8", aspect: "aspect-[4/3]", title: "Description Copy" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered = activeTab === "All"
    ? DEMO_OUTPUTS
    : activeTab === "Amazon Listing"
    ? DEMO_OUTPUTS.filter((d) => d.type === "listing")
    : activeTab === "A+ Content"
    ? DEMO_OUTPUTS.filter((d) => d.type === "aplus")
    : DEMO_OUTPUTS.filter((d) => d.type === "video");

  return (
    <MarketingPageShell>
      {/* Hero */}
      <section className="bg-white pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-5">
            Demo Outputs
          </p>
          <h1
            className="reveal text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F0E0D] leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What AI can create
          </h1>
          <p className="reveal mt-5 text-lg text-[#0F0E0D]/55 max-w-xl mx-auto">
            From a single product photo, ListMyProduct generates complete Amazon content — listings, A+ images, and video.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white pb-8 sticky top-[88px] z-20 border-b border-[#EAEAEA] backdrop-blur-xl bg-white/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab
                    ? "bg-[#0F0E0D] text-white"
                    : "text-[#0F0E0D]/50 hover:text-[#0F0E0D] hover:bg-[#F9F9F8]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="reveal group cursor-pointer"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="card-shell">
                  <div className="card-core overflow-hidden">
                    {/* Image area */}
                    <div
                      className={`${item.aspect} w-full flex flex-col items-center justify-center gap-3 relative`}
                      style={{ backgroundColor: item.color }}
                    >
                      {/* Type icon */}
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B] border border-[#F59E0B]/25 rounded px-1.5 py-0.5 bg-white/80">
                          Demo Output
                        </span>
                      </div>
                      {item.type === "video" ? (
                        <VideoCamera size={32} weight="duotone" className="text-[#0F0E0D]/20" />
                      ) : item.type === "aplus" ? (
                        <GridFour size={32} weight="duotone" className="text-[#0F0E0D]/20" />
                      ) : (
                        <Image size={32} weight="duotone" className="text-[#0F0E0D]/20" />
                      )}
                      <p className="text-xs text-[#0F0E0D]/30 font-medium">{item.title}</p>
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-3 border-t border-[#EAEAEA] flex items-center justify-between">
                      <span className="text-xs font-medium text-[#0F0E0D]/50">{item.label}</span>
                      <span className="text-[10px] text-[#0F0E0D]/25">{item.aspect.replace("aspect-", "")}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#0F0E0D]/40">No outputs in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F0E0D] py-20 md:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2
            className="reveal text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Create your own outputs
          </h2>
          <p className="reveal mt-3 text-[#787774] text-base max-w-md mx-auto">
            Upload a single product photo and let AI generate your entire Amazon content stack.
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
