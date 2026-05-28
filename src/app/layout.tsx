import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://listmyproduct.com"),
  title: "ListMyProduct — AI listing studio for Amazon sellers",
  description:
    "Upload one product photo. AI generates Amazon listing copy, A+ content images, and video — from a single product photo.",
  openGraph: {
    title: "ListMyProduct — AI listing studio for Amazon sellers",
    description:
      "Upload one product photo. AI generates Amazon listing copy, A+ content images, and video — from a single product photo.",
    siteName: "ListMyProduct",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ListMyProduct — AI listing studio for Amazon sellers",
    description:
      "Upload one product photo. AI generates Amazon listing copy, A+ content images, and video.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <MarketingPageShell>{children}</MarketingPageShell>
      </body>
    </html>
  );
}
