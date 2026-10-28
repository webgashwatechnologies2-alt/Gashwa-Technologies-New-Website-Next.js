import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("woocommerce-development");

export default function WooCommerceDevelopmentPage() {
  const data = getDesignPage("woocommerce-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
