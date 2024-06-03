import { categoryApi } from "@/services";
import Content from "./Content";

export const MainLayout = async ({ children }) => {
  const categoriesRes = await categoryApi.server.getAllCategories({
    type_id: 1,
  });
  return <Content categoriesRes={categoriesRes}>{children}</Content>;
};

export default MainLayout;
