import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("flyer-designing");

export default function FlayerDesigningPage() {
  const data = getDesignPage("flyer-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
