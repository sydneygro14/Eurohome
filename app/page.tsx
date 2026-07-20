import type { Metadata } from "next";
import { HomePage } from "./components";

export const metadata: Metadata = {
  title: "EuroHome Design | Better Home Experiences™",
  description:
    "EuroHome Design creates personalized modern interiors through intentional planning, thoughtful guidance, and a complete design experience focused on better everyday living.",
};

export default function Home() {
  return <HomePage />;
}
