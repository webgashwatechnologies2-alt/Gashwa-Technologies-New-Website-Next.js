import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("responsive-web-designing");

export default function ResponsiveWebDesigningPage() {
  const data = getDesignPage("responsive-web-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
