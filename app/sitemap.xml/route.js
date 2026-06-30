const baseUrl = "https://misaldo.lat";
const routes = [""];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = `${baseUrl}${route}`;
    const priority = route === "" ? "1.0" : "0.8";
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n")}
</urlset>`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
