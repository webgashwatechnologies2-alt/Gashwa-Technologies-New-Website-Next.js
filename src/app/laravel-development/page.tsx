import DesignServicePage from "@/components/sections/DesignServicePage";
import { getDesignPage, getDesignPageMetadata } from "@/data/designPages";

export const metadata = getDesignPageMetadata("laravel-development");

export default function LaravelDevelopmentPage() {
  const data = getDesignPage("laravel-development");
  if (!data) return null;
  return <DesignServicePage data={data} />;
}
