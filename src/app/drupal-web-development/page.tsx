import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("drupal-web-development");

export default function DrupalWebDevelopmentPage() {
  const data = getDesignPage("drupal-web-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
