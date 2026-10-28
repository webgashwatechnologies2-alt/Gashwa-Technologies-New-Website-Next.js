import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("oscommerce-web-development");

export default function OSCommerceWebDevelopmentPage() {
  const data = getDesignPage("oscommerce-web-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
