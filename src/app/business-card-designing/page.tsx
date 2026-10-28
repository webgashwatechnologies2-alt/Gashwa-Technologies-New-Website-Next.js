import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("business-card-designing");

export default function BusinessCardDesigningPage() {
  const data = getDesignPage("business-card-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
