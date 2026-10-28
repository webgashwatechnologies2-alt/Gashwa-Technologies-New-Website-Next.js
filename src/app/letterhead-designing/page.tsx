import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("letterhead-designing");

export default function LetterheadDesigningPage() {
  const data = getDesignPage("letterhead-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
