"use client";

import { useEffect } from "react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";

export function MarketingPageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

    // Observe stagger containers
    document.querySelectorAll(".stagger-item, .reveal").forEach((el) => {
      observer.observe(el);
    });

    // Observe children of stagger containers individually
    document.querySelectorAll("[data-stagger]").forEach((container) => {
      const children = container.querySelectorAll(".stagger-item");
      children.forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `calc(${i} * 80ms)`;
        observer.observe(child);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen bg-white grain ${className}`}>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
