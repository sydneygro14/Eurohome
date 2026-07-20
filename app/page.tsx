import type { Metadata } from "next";
import { HomePage } from "./components";

export const metadata: Metadata = {
  title: "EuroHome Furniture | Better Home Experiences™",
  description:
    "EuroHome Furniture creates warm modern rooms with thoughtful furniture, planning, and design guidance.",
};

export default function Home() {
  return <HomePage />;
}
