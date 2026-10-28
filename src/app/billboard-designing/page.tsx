import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("billboard-designing");

export default function BillBoardDesigningPage() {
  const data = getDesignPage("billboard-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
