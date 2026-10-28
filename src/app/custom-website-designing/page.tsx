import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("custom-website-designing");

export default function CustomWebsiteDesigningPage() {
  const data = getDesignPage("custom-website-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
