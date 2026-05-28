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
  // IntersectionObserver for scroll reveals
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Make all elements visible immediately
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once revealed, stop observing (one-shot)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all reveal elements
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
      observer.observe(el);
    });

    // Observe stagger containers
    document.querySelectorAll(".stagger-children").forEach((container) => {
      observer.observe(container);
    });

    // Apply stagger delays to stagger-children
    document.querySelectorAll(".stagger-children").forEach((container, ci) => {
      const children = Array.from(container.children) as HTMLElement[];
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 80}ms`;
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      {/* Film grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <SiteHeader />

      <main id="main">{children}</main>

      <SiteFooter />
    </div>
  );
}
