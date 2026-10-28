import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("responsive-web-development");

export default function ResponsiveWebDevelopmentPage() {
  const data = getDesignPage("responsive-web-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
