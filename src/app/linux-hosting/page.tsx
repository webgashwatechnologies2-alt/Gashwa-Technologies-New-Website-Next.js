import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("linux-hosting");

export default function LinuxHostingPage() {
  const data = getDesignPage("linux-hosting");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
