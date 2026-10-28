import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("magento-web-development");

export default function ManagentoWebDevelopmentPage() {
  const data = getDesignPage("magento-web-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
