"use client";
import Top from "./Top";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";
import ProductList from "@/components/product/ProductList";
import { useState } from "react";
import ModalFeedback from "@/components/modal/ModalFeedback";

export const TourDetailModule = ({ data }) => {
  const [isShowModalFeedback, setIsShowModalFeedback] = useState(false);
  return (
    <section className="tour-detail">
      <div className="container">
        <Top data={data} />
      </div>

      <div className="mt-[30px] py-[30px] lg:bg-gray-primary">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-x-6">
            <SectionLeft
              data={data}
              setIsShowModalFeedback={setIsShowModalFeedback}
            />
            <SectionRight isShowModalFeedback={isShowModalFeedback} />
          </div>
        </div>
      </div>
      <div className="container pt-8">
        <h3 className="text-2xl">Các sản phẩm nổi bật</h3>
      </div>
      <ProductList />
      <ModalFeedback
        isOpen={isShowModalFeedback}
        handleClose={() => setIsShowModalFeedback(false)}
      />
    </section>
  );
};

export default TourDetailModule;
