import type { Metadata } from "next";
import { TemplatePage } from "../components";
import { templatePages } from "../site-content";

export const metadata: Metadata = {
  title: "Design Services",
  description:
    "Furniture, room planning, renovation support and 3D visualization from EuroHome Furniture.",
};

export default function Page() {
  return <TemplatePage page={templatePages.designServices} />;
}
