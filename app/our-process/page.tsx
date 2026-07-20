import type { Metadata } from "next";
import { TemplatePage } from "../components";
import { templatePages } from "../site-content";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How EuroHome Furniture moves from first conversation to furniture, planning, visualization and installation support.",
};

export default function Page() {
  return <TemplatePage page={templatePages.process} />;
}
