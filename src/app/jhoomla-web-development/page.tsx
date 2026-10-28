import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("jhoomla-web-development");

export default function JhoomlaWebDevelopmentPage() {
  const data = getDesignPage("jhoomla-web-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
