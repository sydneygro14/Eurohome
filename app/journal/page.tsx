import type { Metadata } from "next";
import { JournalPage } from "../components";

export const metadata: Metadata = {
  title: "Design Journal",
  description:
    "EuroHome Design journal structure for intentional design, planning, visualization and better everyday living.",
};

export default function Page() {
  return <JournalPage />;
}
