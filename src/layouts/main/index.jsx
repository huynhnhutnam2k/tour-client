import { Footer, Header } from "@/components/layouts";
import { categoryApi } from "@/services";

export const MainLayout = async ({ children }) => {
  const categoriesRes = await categoryApi.server.getAllCategories({
    type_id: 1,
  });
  return (
    <div>
      <Header data={categoriesRes?.data}/>
      {children}
      <Footer data={categoriesRes?.data}/>
    </div>
  );
};

export default MainLayout;
