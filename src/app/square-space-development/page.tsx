import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("square-space-development");

export default function SquareSpaceDevelopmentPage() {
  const data = getDesignPage("square-space-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
