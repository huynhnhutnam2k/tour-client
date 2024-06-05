
import { COOKIE_KEYS } from "@/constants";
import { SEO_FAVICON } from "@/constants/common";
import { cookies, headers as nextHeader } from "next/headers";
/**
 * Lấy cấu hình ngôn ngữ hiện tại
 *
 * @returns {String}
 */
export async function getLocale() {
  const locale = await cookies().get(COOKIE_KEYS.LOCALE);
  if (locale) {
    return locale;
  }

  return process.env.NEXT_PUBLIC_LOCALE_DEFAULT || "vi";
}

export function generateMeta(seo, setting, data = null) {
    const headers = nextHeader();
    const url = headers.get("x-url");
    
    const title = seo?.title || data?.title || setting?.site_name || "";
    const type = seo?.type || "website";
    const description =
        seo?.description ||
        data?.description ||
        setting?.site_description ||
        "";
    const image = seo?.image || data?.image || setting?.site_logo || "";
    const keywords =
        seo?.keyword || data?.keyword || setting?.site_keyword || "";
    const author = data?.author || setting?.site_name;
    const copyright = data?.copyright || setting?.site_name;
    const robot = data?.robot === false ? false : true;
    const favicon = seo?.site_favicon || setting?.site_favicon || SEO_FAVICON

    return {
        metadataBase: new URL(headers.get("x-domain")),
        author,
        copyright,
        title,
        keywords,
        description,
        openGraph: {
            title,
            siteName: setting?.site_name || title,
            description,
            type,
            images: [image],
            url,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            type,
            images: [image],
            url,
        },
        robots: {
            index: robot,
            follow: robot,
            googleBot: {
                index: robot,
                follow: robot,
            },
        },
        alternates: {
            canonical: url,
        },
        icons: {
            icon: favicon
        }
    };
}