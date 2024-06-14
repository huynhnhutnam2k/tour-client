"use client";
import { useSelector } from "react-redux";

import { Footer, Header } from "@/components/layouts";
import QuickView from "@/components/product/QuickView";
import ButtonPhone from "./ButtonPhone";
import ButtonScroll from "@/components/common/buttonScroll";
import ButtonSocial from "./ButtonSocial";
import FooterAction from "@/components/layouts/FooterAction";

const Content = ({ categoriesRes, layoutWidget, children }) => {
  const { isQuickView, quickViewData } = useSelector(
    (store) => store.productReducer
  );
  const { value } = useSelector((store) => store.settingReducer);
  return (
    <div
      className={`relative mb-[60px] md:mb-0 ${
        isQuickView ? "overflow-hidden h-screen" : ""
      }`}
    >
      <Header data={categoriesRes?.data} />
      {children}
      <Footer
        data={categoriesRes?.data}
        copyRight={value?.data?.copyright}
        layoutWidget={layoutWidget}
        phone={value?.data?.site_hotline}
        email={value?.data?.site_email}
      />
      <QuickView product={quickViewData} isShow={isQuickView} />

      <ButtonPhone phone={value?.data?.site_hotline} />
      <ButtonScroll />
      <ButtonSocial
        facebook={value?.data?.social_facebook || ""}
        zalo={value?.data?.social_zalo || ""}
        address={value?.data?.company_address || ""}
      />
      <FooterAction
        phone={value?.data?.site_hotline}
        facebook={value?.data?.social_facebook || ""}
        zalo={value?.data?.social_zalo || ""}
        address={value?.data?.company_address || ""}
      />
    </div>
  );
};

export default Content;
