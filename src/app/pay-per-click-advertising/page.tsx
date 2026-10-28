import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("pay-per-click-advertising");

export default function PayPerClickAdvertisingPage() {
  const data = getDesignPage("pay-per-click-advertising");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
