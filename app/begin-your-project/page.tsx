import type { Metadata } from "next";
import { BeginProjectPage } from "../components";

export const metadata: Metadata = {
  title: "Begin Your Project",
  description:
    "A calm project inquiry experience for qualified EuroHome Design conversations.",
};

export default function Page() {
  return <BeginProjectPage />;
}
