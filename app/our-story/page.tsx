import type { Metadata } from "next";
import { TemplatePage } from "../components";
import { templatePages } from "../site-content";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The EuroHome Furniture story: warm modern design, practical guidance and European collections.",
};

export default function Page() {
  return <TemplatePage page={templatePages.story} />;
}
