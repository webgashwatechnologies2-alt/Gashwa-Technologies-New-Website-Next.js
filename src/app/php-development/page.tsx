import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("php-development");

export default function phpDevelopmentPage() {
  const data = getDesignPage("php-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
