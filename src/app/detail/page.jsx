import { COMPONENT_KEYS } from "@/constants";
import { headers as nextHeader } from "next/headers";
import { generateMeta, getLocale } from "@/helpers/utils/server";
import { MainLayout } from "@/layouts";
import TourDetailModule from "@/modules/tour/detail";
import { postApi, seoApi } from "@/services";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

export async function generateMetadata({ searchParams}) {
  const headers = nextHeader();
  const locale = await getLocale();
  const dataSeo = await seoApi.server.getSeoInfo({
    url: headers.get("x-pathname"),
    locale,
  });
  const { tour } = searchParams;
  const id = tour.split("-").at(-1);
  const postRes = await postApi.server.getPostById({
    id,
    include: "type,categories,trademark",
  });

  return generateMeta(
    dataSeo?.data?.seo,
    dataSeo?.data?.setting,
    postRes?.data
  );
}

const DetailPage = async ({ searchParams }) => {
  const { tour } = searchParams;
  const id = tour.split("-").at(-1);

  const postRes = await postApi.server.getPostById({
    id,
    include: "type,categories,trademark",
  });

  if (!postRes) {
    notFound();
  }

  const renderPage = () => {
    if (postRes.data.type?.data?.slug === COMPONENT_KEYS.TOUR.TOURS) {
      return dynamic(() => import("@/modules/tour/detail"));
    }
  };
  const Module = renderPage();
  return <>{Module && <Module data={postRes.data} />}</>;
};

DetailPage.Layout = MainLayout;

export default DetailPage;
