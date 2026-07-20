import type { Metadata } from "next";
import { BeginProjectPage } from "../components";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Start a EuroHome Furniture project conversation.",
};

export default function Page() {
  return <BeginProjectPage />;
}
