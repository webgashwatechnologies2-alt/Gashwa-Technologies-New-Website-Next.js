import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("brochure-designing");

export default function BrochureDesigningPage() {
  const data = getDesignPage("brochure-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
