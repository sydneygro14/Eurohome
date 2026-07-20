import type { Metadata } from "next";
import { FAQPage } from "../components";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "High-intent EuroHome Design questions about process, services, investment, delivery, furniture, materials and care.",
};

export default function Page() {
  return <FAQPage />;
}
