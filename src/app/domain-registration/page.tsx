import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("domain-registration");

export default function DomainREgistrationgPage() {
  const data = getDesignPage("domain-registration");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
