import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("website-redesigning");

export default function WebsiteReDesigning() {
  const data = getDesignPage("website-redesigning");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}