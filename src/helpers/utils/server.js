
import { COOKIE_KEYS } from "@/constants";
import { cookies } from "next/headers";
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
