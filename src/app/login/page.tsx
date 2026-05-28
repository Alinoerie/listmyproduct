import Link from "next/link";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/lib/auth";
import { GoogleSignInForm } from "@/components/auth/google-sign-in-form";
import { EmailSignInForm } from "@/components/auth/email-sign-in-form";
import { ListMyProductLogo } from "@/components/brand/productpixl-logo";

function safeCallbackUrl(raw?: string) {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return "/studio";
  return raw;
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const session = await auth();
  const params = await searchParams;
  const callbackUrl = safeCallbackUrl(params.callbackUrl);

  if (session?.user?.id) {
    redirect(callbackUrl);
  }

  const errorMessage =
    params.error === "OAuthAccountNotLinked"
      ? "That email is already linked to another sign-in method."
      : params.error === "Verification"
      ? "That sign-in link expired or was already used. Request a new one."
      : params.error
      ? "Sign-in failed. Please try again."
      : null;

  async function signInWithGoogle() {
    "use server";
    await signIn("google", { redirectTo: callbackUrl });
  }

  async function signInWithEmail(formData: FormData) {
    "use server";
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    if (!email) return;
    await signIn("email", { email, redirectTo: callbackUrl });
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left panel — decorative (hidden on mobile) */}
      <div className="hidden w-1/2 flex-col justify-between bg-[#0F0E0D] p-12 lg:flex">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#F59E0B" />
            <path d="M10 8h7a4 4 0 010 8h-3v8h-4V8z" fill="white" />
          </svg>
          <span
            className="text-lg font-semibold text-white tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            ListMyProduct
          </span>
        </Link>

        {/* Copy */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F59E0B] mb-4">
            For Amazon sellers
          </p>
          <h2
            className="text-4xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            One photo.<br />Infinite listings.
          </h2>
          <p className="mt-4 text-sm text-[#787774] max-w-sm">
            AI generates Amazon listing copy, A+ content images, and video — from a single product photo.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "10 free credits on signup",
              "Amazon US, UK, DE supported",
              "No credit card required",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-[#787774]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-[#787774]">© 2025 ListMyProduct</p>
      </div>

      {/* Right panel — auth form */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-10 lg:hidden">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#F59E0B" />
              <path d="M10 8h7a4 4 0 010 8h-3v8h-4V8z" fill="white" />
            </svg>
            <span
              className="text-base font-semibold text-[#0F0E0D] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
            >
              ListMyProduct
            </span>
          </Link>

          <h1
            className="text-3xl font-bold text-[#0F0E0D]"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif" }}
          >
            Sign in
          </h1>
          <p className="mt-2 text-sm text-[#787774]">
            Continue with Google or get a one-click email link — no password.
          </p>

          {errorMessage && (
            <div className="mt-6 rounded-[8px] border border-[#EAEAEA] bg-[#F9F9F8] px-4 py-3 text-sm text-[#0F0E0D]">
              {errorMessage}
            </div>
          )}

          <div className="mt-8">
            <GoogleSignInForm
              action={signInWithGoogle}
              errorDescribedBy={undefined}
            />
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#EAEAEA]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-[#787774]">or continue with email</span>
            </div>
          </div>

          <EmailSignInForm action={signInWithEmail} />

          <p className="mt-6 text-center text-xs text-[#787774]">
            By signing in you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-2 hover:text-[#0F0E0D]">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-[#0F0E0D]">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
