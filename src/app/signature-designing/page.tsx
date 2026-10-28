import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("signature-designing");

export default function SignatureDesigningPage() {
  const data = getDesignPage("signature-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
