import { categoryApi, widgetApi } from "@/services";
import Content from "./Content";

export const MainLayout = async ({ children }) => {
  const categoriesRes = await categoryApi.server.getAllCategories({
    type_id: 1,
  });
  const layoutWidget =await widgetApi.server.getWidgetInfo({
    key: 'layout',
  })
  return <Content categoriesRes={categoriesRes} layoutWidget={layoutWidget?.['layout']?.data?.field}>{children}</Content>;
};

export default MainLayout;
