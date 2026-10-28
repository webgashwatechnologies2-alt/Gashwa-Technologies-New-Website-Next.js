import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("shopify-development");

export default function ShopifyDevelopmentPage() {
  const data = getDesignPage("shopify-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
