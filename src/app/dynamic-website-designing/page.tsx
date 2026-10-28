import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("dynamic-website-designing");

export default function DynamicWebsiteDesigningPage() {
  const data = getDesignPage("dynamic-website-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
