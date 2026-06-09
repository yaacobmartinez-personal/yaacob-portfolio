import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base =
    process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ??
    "https://yaacobmartinez.dev";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // no need to index the JSON API route
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
