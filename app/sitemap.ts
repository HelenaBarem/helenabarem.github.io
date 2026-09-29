import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getPublicSiteUrl();
  if (!siteUrl) return [];
  return [{ url: siteUrl.toString() }];
}
