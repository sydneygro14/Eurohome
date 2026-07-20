import type { Metadata } from "next";
import { TemplatePage } from "../components";
import { templatePages } from "../site-content";

export const metadata: Metadata = {
  title: "Design Services",
  description:
    "EuroHome Design service structure for whole-home design, renovation, new construction, furniture planning and 3D visualization.",
};

export default function Page() {
  return <TemplatePage page={templatePages.designServices} />;
}
