import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("wordpress-development");

export default function WordpressDevelopmentPage() {
  const data = getDesignPage("wordpress-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
