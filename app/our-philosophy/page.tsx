import type { Metadata } from "next";
import { PhilosophyPage } from "../components";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description:
    "The approved EuroHome Design philosophy for intentional design, optimized spaces and Better Home Experiences™.",
};

export default function Page() {
  return <PhilosophyPage />;
}
