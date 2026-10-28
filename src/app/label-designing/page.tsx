import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("label-designing");

export default function LabelDesigningPage() {
  const data = getDesignPage("label-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
