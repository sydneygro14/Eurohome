import type { Metadata } from "next";
import { JournalPage } from "../components";

export const metadata: Metadata = {
  title: "Design Journal",
  description:
    "Short EuroHome Furniture ideas for planning rooms, choosing furniture and living better at home.",
};

export default function Page() {
  return <JournalPage />;
}
