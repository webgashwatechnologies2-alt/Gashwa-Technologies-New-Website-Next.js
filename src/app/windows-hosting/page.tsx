import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("windows-hosting");

export default function WindowsHostingPage() {
  const data = getDesignPage("windows-hosting");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
