import type { Metadata } from "next";
import { ProjectsPage } from "../components";

export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "Project storytelling templates for EuroHome Design, showing client-centered decisions and Better Home Experiences™ outcomes.",
};

export default function Page() {
  return <ProjectsPage />;
}
