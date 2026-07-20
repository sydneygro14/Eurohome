import type { Metadata } from "next";
import "./globals.css";
import { SiteFrame } from "./components";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "EuroHome Design | Better Home Experiences™",
    template: "%s | EuroHome Design",
  },
  description:
    "EuroHome Design creates personalized modern interiors through intentional planning, thoughtful guidance, and a complete design experience focused on better everyday living.",
  openGraph: {
    title: "EuroHome Design | Better Home Experiences™",
    description:
      "Intentional Design. Optimized Spaces. Better Home Experiences™.",
    images: [{ url: "/og.webp", width: 1200, height: 630 }],
    siteName: "EuroHome Design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EuroHome Design | Better Home Experiences™",
    description:
      "Intentional Design. Optimized Spaces. Better Home Experiences™.",
    images: ["/og.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
