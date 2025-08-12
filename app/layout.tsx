import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "One Page English - Learn English Fast with One Page a Day",
  description:
    "Boost your English in record time with One Page English. Practice reading, pronunciation, grammar, vocabulary, and writing – all on one page a day. Perfect for beginners and intermediate learners.",
  keywords: [
    "Learn English",
    "English course",
    "English reading practice",
    "Improve pronunciation",
    "English grammar",
    "Learn vocabulary",
    "English for beginners",
    "One Page English",
    "Online English lessons",
  ],
  openGraph: {
    title: "One Page English – Learn English Fast with One Page a Day",
    description:
      "Master English step-by-step with our unique one-page-a-day method. Improve reading, speaking, grammar, and writing skills faster than ever.",
    url: "https://pageglish.com", // Remplace par ton URL
    siteName: "One Page English",
    images: [
      {
        url: "https://pageglish.com/og-image.jpg", // Image 1200x630px pour réseaux sociaux
        width: 1200,
        height: 630,
        alt: "One Page English - Learn English Fast",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Page English - Learn English Fast with One Page a Day",
    description:
      "Improve your English step-by-step with our one-page-a-day method. Perfect for beginners and intermediate learners.",
    images: ["https://pageglish.com/og-image.jpg"], // Même image que pour openGraph
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(monaSans.className)}>{children}</body>
    </html>
  );
}
