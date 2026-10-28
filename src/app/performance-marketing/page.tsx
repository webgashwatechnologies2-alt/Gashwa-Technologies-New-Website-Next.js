import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("performance-marketing");

export default function PerformanceMarkeingPage() {
  const data = getDesignPage("performance-marketing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
