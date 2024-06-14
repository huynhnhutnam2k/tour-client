
import {  createLinkPost } from "@/helpers/utils";
import { searchApi, settingApi } from "@/services";

export const revalidate = 60;

async function GET() {
    const setting = await settingApi.getSetting();
    const postRes = await searchApi.search(
        {
            limit: 200,
            page: 1,
            sitemap: true,
            include: "type",
        },
    );
    const paginate = postRes.meta.pagination;
    const baseUrl = setting?.data.site_url;
    let content = '';
    
    if (paginate.total_pages > 1) {
        content = `<?xml version="1.0" encoding="UTF-8"?>
        <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${Array.from({ length: paginate.total_pages }, (_, i) => i + 1)
                .map((id) => {
                    const url = `${baseUrl}/sitemap/${id}.xml`;
                    return `<sitemap><loc>${url}</loc></sitemap>`;
                })
                .join("")}
        </sitemapindex>`;
    } else {
        const time = new Date().toISOString();
        content = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${postRes.data
                    .map((post) => {
                        const url = baseUrl.concat(
                            createLinkPost(post),
                        );
                        return `<url>
                            <loc>${url}</loc>
                            <lastmod>${time}</lastmod>
                        </url>`;
                    })
                    .join("")}
            </urlset>`;
    }

    return new Response(content, {
        headers: { "Content-Type": "text/xml" },
    });
}

export { GET } 