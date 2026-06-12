import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: "https://www.construtoramariano.com.br/sitemap.xml",
    host: "https://www.construtoramariano.com.br",
  };
}
