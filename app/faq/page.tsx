import type { Metadata } from "next";
import { FAQPage } from "../components";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Quick answers about EuroHome Furniture services, timing, investment, delivery and materials.",
};

export default function Page() {
  return <FAQPage />;
}
