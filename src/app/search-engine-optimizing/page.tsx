import DesignServicePage from "@/components/sections/DesignServicePage";
import SeoPackagesSection from "@/components/sections/SeoPackagesSection";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("search-engine-optimizing");

export default function SearchEngineOptimizingPage() {
  const data = getDesignPage("search-engine-optimizing");
  if (!data) return null;
  return (
    <>
      <DesignServicePage data={data} />
      <SeoPackagesSection />
    </>
  );
}
