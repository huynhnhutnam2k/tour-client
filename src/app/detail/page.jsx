import { COMPONENT_KEYS } from "@/constants";
import { MainLayout } from "@/layouts";
import TourDetailModule from "@/modules/tour/detail";
import { postApi } from "@/services";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const DetailPage = async ({ searchParams }) => {
  const { tour } = searchParams;
  const id = tour.split("-").at(-1);

  const postRes = await postApi.server.getPostById({
    id,
    include: "type,categories",
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
  return <>{Module && <Module data={postRes.data}/>}</>;
};

DetailPage.Layout = MainLayout;

export default DetailPage;
