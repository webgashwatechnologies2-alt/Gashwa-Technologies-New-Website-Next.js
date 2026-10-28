import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("logo-designing");

export default function LogoDesigningPage() {
  const data = getDesignPage("logo-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
