import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("business-email-companies");

export default function BuisnessEmailPage() {
  const data = getDesignPage("business-email-companies");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
