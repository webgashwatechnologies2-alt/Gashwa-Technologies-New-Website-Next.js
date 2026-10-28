import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("online-reputation-management");

export default function OnlineReputationManagementPage() {
  const data = getDesignPage("online-reputation-management");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
