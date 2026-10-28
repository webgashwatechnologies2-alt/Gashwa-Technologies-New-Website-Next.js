import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("catalogue-designing");

export default function CaltalogueDesigningPage() {
  const data = getDesignPage("catalogue-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
