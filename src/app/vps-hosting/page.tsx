import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("vps-hosting");

export default function VpsHostingPage() {
  const data = getDesignPage("vps-hosting");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
