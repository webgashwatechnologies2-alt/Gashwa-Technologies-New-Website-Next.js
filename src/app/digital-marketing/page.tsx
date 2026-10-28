import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("digital-marketing");

export default function DigitalMarkeingPage() {
  const data = getDesignPage("digital-marketing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
