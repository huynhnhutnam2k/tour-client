import locales from "@/locales";

/**
 * Dịch ngôn ngũ
 *
 * @param {String} locale vi|en|...
 * @param {String} key Chuỗi dữ liệu
 * @param {String} name Nhóm dữ liệu (Mặc định: nhóm chính)
 * @returns {String}
 */
export function __(locale, key, name = "default") {
    let lang = locale in locales ? locales[locale] : {};
    return lang[key];
}