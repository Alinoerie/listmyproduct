import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#0F0E0D]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: wordmark */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="#F59E0B" />
                <path d="M10 8h7a4 4 0 010 8h-3v8h-4V8z" fill="white" />
              </svg>
              <span
                className="text-base font-semibold text-white tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
              >
                ListMyProduct
              </span>
            </div>
            <p className="text-sm text-[#787774] mt-1">One photo. Infinite listings.</p>
          </div>

          {/* Right: links */}
          <div className="flex items-center gap-6 text-sm text-[#787774]">
            <a
              href="mailto:hello@listmyproduct.com"
              className="hover:text-white transition-colors"
            >
              hello@listmyproduct.com
            </a>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#27272A]">
          <p className="text-sm text-[#787774]">© 2025 ListMyProduct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
