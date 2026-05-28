"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "@phosphor-icons/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // Simulate magic link send
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen bg-white">

      {/* ─── LEFT: Brand panel (dark) ─── */}
      <div className="hidden w-1/2 flex-col justify-between bg-[#0F0E0D] p-12 lg:flex">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#F59E0B" />
            <path d="M10 8h7a4 4 0 010 8h-3v8h-4V8z" fill="white" />
          </svg>
          <span
            className="text-lg font-semibold text-white tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            ListMyProduct
          </span>
        </Link>

        {/* Decorative element — abstract grid */}
        <div className="relative flex-1 flex items-center justify-center py-12">
          {/* Background grid decoration */}
          <div className="absolute inset-0 grid grid-cols-4 gap-3 opacity-5">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-white"
                style={{ opacity: Math.random() > 0.5 ? 0.3 : 0 }}
              />
            ))}
          </div>
          {/* Floating product card stack */}
          <div className="relative w-64">
            <div className="absolute -top-4 -left-4 w-full rotate-[-4deg]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="h-24 rounded-lg bg-white/10 mb-3" />
                <div className="h-3 w-24 rounded bg-white/10 mb-2" />
                <div className="h-2 w-16 rounded bg-white/5" />
              </div>
            </div>
            <div className="absolute top-4 left-4 w-full rotate-[1deg]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="h-24 rounded-lg bg-white/10 mb-3" />
                <div className="h-3 w-24 rounded bg-white/10 mb-2" />
                <div className="h-2 w-16 rounded bg-white/5" />
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F59E0B] mb-4">
            AI Listing Studio
          </p>
          <h2
            className="text-4xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            One photo.<br />Infinite listings.
          </h2>
          <p className="mt-4 text-sm text-white/40 max-w-xs leading-relaxed">
            AI generates Amazon listing copy, A+ content images, and video — from a single product photo.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "10 free credits on signup",
              "Amazon US, UK, DE supported",
              "No credit card required",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/40">
                <Check size={14} weight="bold" className="text-[#F59E0B]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-white/20">© {new Date().getFullYear()} ListMyProduct</p>
      </div>

      {/* ─── RIGHT: Auth form panel ─── */}
      <main className="flex flex-1 flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-sm">

          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-10 lg:hidden">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#F59E0B" />
              <path d="M10 8h7a4 4 0 010 8h-3v8h-4V8z" fill="white" />
            </svg>
            <span
              className="text-base font-semibold text-[#0F0E0D] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              ListMyProduct
            </span>
          </Link>

          <h1
            className="text-3xl font-bold text-[#0F0E0D]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-[#0F0E0D]/50">
            Sign in to your account to continue.
          </p>

          {/* Google sign in */}
          <a
            href="#"
            className="mt-8 flex items-center justify-center gap-3 rounded-xl border border-[#EAEAEA] bg-white py-3.5 text-sm font-medium text-[#0F0E0D] hover:bg-[#FAFAF9] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </a>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#EAEAEA]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-[#0F0E0D]/35">or continue with email</span>
            </div>
          </div>

          {/* Magic link form */}
          {submitted ? (
            <div className="rounded-2xl border border-[#EAEAEA] bg-[#FAFAF9] p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B]/12">
                <Check size={22} weight="bold" className="text-[#F59E0B]" />
              </div>
              <h3
                className="text-base font-semibold text-[#0F0E0D]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Check your inbox
              </h3>
              <p className="mt-2 text-sm text-[#0F0E0D]/50">
                We sent a magic link to <strong className="text-[#0F0E0D]">{email}</strong>. Click it to sign in.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs text-[#F59E0B] hover:underline"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-[#EAEAEA] bg-[#FAFAF9] px-4 py-3.5 text-sm text-[#0F0E0D] placeholder:text-[#0F0E0D]/30 focus:border-[#F59E0B]/50 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/10 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 bg-[#0F0E0D] text-white rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-[#27272A] transition-colors disabled:opacity-60 btn-press"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  "Send Magic Link"
                )}
              </button>
            </form>
          )}

          {/* Bottom link */}
          <p className="mt-6 text-center text-sm text-[#0F0E0D]/40">
            Don&apos;t have an account?{" "}
            <Link href="/login" className="font-medium text-[#F59E0B] hover:underline">
              Sign up free
            </Link>
          </p>

          <p className="mt-6 text-center text-xs text-[#0F0E0D]/25">
            By continuing you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-2 hover:text-[#0F0E0D]/50">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-[#0F0E0D]/50">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
