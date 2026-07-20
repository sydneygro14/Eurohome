import type { Metadata } from "next";
import { PhilosophyPage } from "../components";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description:
    "The EuroHome Furniture philosophy for warm modern rooms and Better Home Experiences™.",
};

export default function Page() {
  return <PhilosophyPage />;
}
