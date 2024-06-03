"use client";
import { Footer, Header } from "@/components/layouts";
import QuickView from "@/components/product/QuickView";
import { useSelector } from "react-redux";
import ButtonPhone from "./ButtonPhone";
import ButtonScroll from "@/components/common/buttonScroll";
import ButtonSocial from "./ButtonSocial";
import FooterAction from "@/components/layouts/FooterAction";

const Content = ({ categoriesRes, children }) => {
  const { isQuickView, quickViewData } = useSelector(
    (store) => store.productReducer
  );
  return (
    <div
      className={`relative mb-[60px] md:mb-0 ${isQuickView ? "overflow-hidden h-screen" : ""}`}
    >
      <Header data={categoriesRes?.data} />
      {children}
      <Footer data={categoriesRes?.data} />
      <QuickView product={quickViewData} isShow={isQuickView} />

      <ButtonPhone />
      <ButtonScroll />
      <ButtonSocial />
      <FooterAction />
    </div>
  );
};

export default Content;
