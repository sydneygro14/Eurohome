import type { Metadata } from "next";
import "./globals.css";
import { SiteFrame } from "./components";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "EuroHome Furniture | Better Home Experiences™",
    template: "%s | EuroHome Furniture",
  },
  description:
    "EuroHome Furniture creates warm modern rooms with thoughtful furniture, planning, and design guidance.",
  openGraph: {
    title: "EuroHome Furniture | Better Home Experiences™",
    description:
      "Modern furniture. Thoughtful rooms. Better living.",
    images: [{ url: "/og.webp", width: 1200, height: 630 }],
    siteName: "EuroHome Furniture",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EuroHome Furniture | Better Home Experiences™",
    description: "Modern furniture. Thoughtful rooms. Better living.",
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
