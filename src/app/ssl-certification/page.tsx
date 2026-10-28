import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("ssl-certification");

export default function SslCertificationPage() {
  const data = getDesignPage("ssl-certification");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
