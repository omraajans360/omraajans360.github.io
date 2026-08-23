import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.omraajans360.com";
  const now = new Date();
  const core: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/drone-cekimi`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/qr-menu`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/dijital`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/hakkimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/kvkk`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/gizlilik`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cerez-politikasi`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
  return [...core, ...servicePages.map((item) => ({ url: `${base}/hizmet/${item.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 }))];
}
