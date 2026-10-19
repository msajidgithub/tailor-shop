import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Nastaliq_Urdu, Outfit } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asif Ladies Tailors | Lyari, Karachi",
  description:
    "Custom ladies stitching in Lyari, Karachi with pickup and delivery. Bridal, suits, alterations, and fittings.",
  openGraph: {
    title: "Asif Ladies Tailors",
    description:
      "Custom ladies stitching with pickup and delivery across Lyari and nearby Karachi.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${urdu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
