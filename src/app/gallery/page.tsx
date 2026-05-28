"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { NotifyMeForm } from "@/components/marketing/notify-me-form";

type Category = "all" | "listing" | "aplus" | "video";

const GALLERY_ITEMS = [
  { id: "1", seed: "watch-listing", category: "listing" as Category, aspectRatio: "landscape" as const },
  { id: "2", seed: "headphones-aplus", category: "aplus" as Category, aspectRatio: "portrait" as const },
  { id: "3", seed: "sneakers-listing", category: "listing" as Category, aspectRatio: "square" as const },
  { id: "4", seed: "kitchen-aplus", category: "aplus" as Category, aspectRatio: "landscape" as const },
  { id: "5", seed: "perfume-listing", category: "listing" as Category, aspectRatio: "portrait" as const },
  { id: "6", seed: "toys-aplus", category: "aplus" as Category, aspectRatio: "square" as const },
  { id: "7", seed: "book-listing", category: "listing" as Category, aspectRatio: "landscape" as const },
  { id: "8", seed: "camera-aplus", category: "aplus" as Category, aspectRatio: "portrait" as const },
  { id: "9", seed: "shoes-listing", category: "listing" as Category, aspectRatio: "square" as const },
];

const CATEGORY_LABELS: Record<Exclude<Category, "all">, string> = {
  listing: "Amazon Listing",
  aplus: "A+ Content",
  video: "Video",
};

function AspectRatioBox({ ratio }: { ratio: "landscape" | "portrait" | "square" }) {
  const paddingBottom =
    ratio === "landscape" ? "56.25%" : ratio === "portrait" ? "125%" : "100%";
  return <div style={{ paddingBottom }} className="relative w-full" />;
}

function GalleryCard({ item, index }: { item: { id: string; seed: string; category: Category; aspectRatio: "landscape" | "portrait" | "square" }; index: number }) {
  const delay = (index % 3) * 80;

  return (
    <div
      className="overflow-hidden group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative rounded-[8px] border border-[#EAEAEA] overflow-hidden bg-[#F9F9F8]">
        <AspectRatioBox ratio={item.aspectRatio} />
        <div className="absolute inset-0">
          <img
            src={`https://picsum.photos/seed/${item.seed}/800/600`}
            alt={`Sample output: ${CATEGORY_LABELS[item.category as Exclude<Category, "all">]}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        {/* DEMO OUTPUT badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#F59E0B] text-[#0F0E0D] text-[10px] font-bold px-2 py-0.5 rounded">
            DEMO OUTPUT
          </span>
        </div>
        {/* Category label */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/90 text-[#0F0E0D] text-[10px] font-semibold px-2 py-0.5 rounded">
            {CATEGORY_LABELS[item.category as Exclude<Category, "all">]}
          </span>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative pb-3 text-sm font-medium transition-colors whitespace-nowrap ${
        active ? "text-[#0F0E0D]" : "text-[#787774] hover:text-[#0F0E0D]"
      }`}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F59E0B] rounded-full" />
      )}
    </button>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .stagger-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="bg-[#F59E0B] text-[#0F0E0D] text-xs font-bold px-3 py-1 rounded-full">
              DEMO OUTPUTS
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#0F0E0D] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            Gallery
          </h1>
          <p className="mt-4 text-lg text-[#787774] max-w-xl mx-auto">
            See what ListMyProduct generates from a single product photo — listings, A+ content, and video.
          </p>
          <p className="mt-2 text-sm text-[#787774] opacity-60">
            Demo generations — real seller outputs coming at launch
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <section className="px-4 mb-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex border-b border-[#EAEAEA] gap-6 overflow-x-auto">
            {(["all", "listing", "aplus", "video"] as Category[]).map((cat) => (
              <TabButton
                key={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === "all" ? "All" : CATEGORY_LABELS[cat as Exclude<Category, "all">]}
              </TabButton>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-[#787774]">
              <p>No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F0E0D] py-20 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            Want to generate your own?
          </h2>
          <p className="mt-4 text-[#787774] text-lg">
            Join the waitlist and be first to generate real outputs with ListMyProduct.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <NotifyMeForm
              placeholder="you@seller.com"
              buttonText="Reserve my free credits"
              variant="primary"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
