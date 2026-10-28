import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("android-app-development");

export default function AndroidAppDevelopmentPage() {
  const data = getDesignPage("android-app-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
