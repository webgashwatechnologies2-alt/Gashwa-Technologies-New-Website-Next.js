import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("static-web-designing");

export default function StaticWebDesigningPage() {
  const data = getDesignPage("static-web-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
