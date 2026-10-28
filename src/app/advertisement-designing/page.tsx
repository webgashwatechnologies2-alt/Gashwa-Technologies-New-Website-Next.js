import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("advertisement-designing");

export default function AdvertisementDesigningPage() {
  const data = getDesignPage("advertisement-designing");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
