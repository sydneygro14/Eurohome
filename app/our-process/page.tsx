import type { Metadata } from "next";
import { TemplatePage } from "../components";
import { templatePages } from "../site-content";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "The EuroHome Design Experience™ from listening and discovery through planning, visualization, implementation and support.",
};

export default function Page() {
  return <TemplatePage page={templatePages.process} />;
}
