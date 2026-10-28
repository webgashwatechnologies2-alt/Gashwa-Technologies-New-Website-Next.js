import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("website-maintenance");

export default function WebMaintenancePage() {
  const data = getDesignPage("website-maintenance");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
