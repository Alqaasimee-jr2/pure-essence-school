import type { MetadataRoute } from "next";

const BASE = "https://pure-essence-school.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/about`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/academics`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/philosophy`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/student-life`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/admissions`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${BASE}/events`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE}/contact`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/careers`, priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
