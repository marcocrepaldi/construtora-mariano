import type { MetadataRoute } from "next";
import { servicesData } from "./servicos/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.construtoramariano.com.br";

  const staticRoutes = [
    "",
    "/#sobre",
    "/#servicos",
    "/#galeria",
    "/#contato",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/servicos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
