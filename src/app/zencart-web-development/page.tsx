import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("zencart-web-development");

export default function ZenCartWebDevelopmentPage() {
  const data = getDesignPage("zencart-web-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
