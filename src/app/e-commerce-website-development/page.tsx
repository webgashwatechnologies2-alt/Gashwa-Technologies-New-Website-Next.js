import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("e-commerce-website-development");

export default function ECommerceWEbsiteDevelopmentPage() {
  const data = getDesignPage("e-commerce-website-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
