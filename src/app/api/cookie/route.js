import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { COOKIE_KEYS } from "@/constants";
import { getLocale } from "@/helpers/utils/server";

export async function POST(req) {
    const body = await req.json();
    const locale = body.locale || getLocale();

    await cookies().set(COOKIE_KEYS.LOCALE, locale);

    return NextResponse.json({ locale });
}
