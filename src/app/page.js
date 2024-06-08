import dynamic from "next/dynamic";
import { headers as nextHeader } from "next/headers";

import { seoApi } from "@/services";
import { generateMeta, getLocale } from "@/helpers/utils/server";

const HomeModules = dynamic(() => import('@/modules/home'))

export async function generateMetadata() {
  const headers = nextHeader();
  const locale = await getLocale();
  const dataSeo = await seoApi.server.getSeoInfo({
    url: headers.get("x-pathname"),
    locale,
  });
  return generateMeta(dataSeo?.data?.seo, dataSeo?.data?.setting);
}

export default async function Home() {
  return (
    <>
      <HomeModules />
    </>
  );
}
