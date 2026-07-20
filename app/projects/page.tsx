import type { Metadata } from "next";
import { ProjectsPage } from "../components";

export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "EuroHome Furniture project stories for rooms planned around comfort, beauty and daily life.",
};

export default function Page() {
  return <ProjectsPage />;
}
