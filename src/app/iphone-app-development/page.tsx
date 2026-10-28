import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("iphone-app-development");

export default function IPhoneAppDevelopmentgPage() {
  const data = getDesignPage("iphone-app-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
