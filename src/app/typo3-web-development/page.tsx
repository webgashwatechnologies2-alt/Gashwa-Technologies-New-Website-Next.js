import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("typo3-web-development");

export default function Typeo3WebDevelopmentPage() {
  const data = getDesignPage("typo3-web-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
