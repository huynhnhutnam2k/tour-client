import Top from "./Top";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";
import ProductList from "@/components/product/ProductList";

export const TourDetailModule = ({ data }) => {
  return (
    <section className="tour-detail">
      <div className="container">
        <Top data={data} />
      </div>
      <div className="mt-[30px] py-[30px] bg-gray-primary">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-x-6">
            <SectionLeft data={data} />
            <SectionRight />
          </div>
        </div>
      </div>
      <div className="container pt-8">
        <h3 className="text-2xl">Các sản phẩm nổi bật</h3>
      </div>
      <ProductList />
    </section>
  );
};

export default TourDetailModule;
