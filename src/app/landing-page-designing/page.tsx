import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("landing-page-designing");

export default function LandingpageDesigningPage() {
  const data = getDesignPage("landing-page-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
