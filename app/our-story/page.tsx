import type { Metadata } from "next";
import { TemplatePage } from "../components";
import { templatePages } from "../site-content";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "EuroHome Design story structure for relationship-first design, local guidance and trusted expertise.",
};

export default function Page() {
  return <TemplatePage page={templatePages.story} />;
}
