import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { ImgCustom } from "../common/imgCustom";
import ButtonCustom from "../common/buttonCustom";

import { calcDiscount, createLinkPost, parseCurrency } from "@/helpers/utils";

// images
import Acreage from "@/assets/img/acreage.png";
import Bedroom from "@/assets/img/bedroom.png";
import Toilet from "@/assets/img/toilet.png";
import People from "@/assets/img/people.png";
import Skeleton from "react-loading-skeleton";
import QuickView from "./QuickView";
import { useState } from "react";

const ProductItem = ({ product, isLoading }) => {
  const [isQuickView, setIsQuickView] = useState(false);
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full mt-[30px] px-3 lg:px-4 relative">
        {product?.product?.discount?.id ? (
          <div className="absolute top-4 -left-[10px] px-4 py-1 text-center uppercase leading-[1.5] text-[17px] rounded bg-gradient-flash-sale text-white z-[1000]">
            Flash sale
          </div>
        ) : null}
        <div className="img w-full aspect-square relative overflow-hidden rounded-lg">
          {product?.product?.discount?.id ? (
            <div className="absolute bottom-0 right-0 px-4 py-1 text-center uppercase leading-[1.5] text-[17px] bg-orange-600 rounded-br-lg text-white z-[1000] line-through shadow-oldPrice">
              {parseCurrency(product?.product?.price, "")}
            </div>
          ) : null}
          {isLoading ? (
            <Skeleton width="100%" height="100%" count={1} />
          ) : (
            <ImgSlide images={product.media} />
          )}
        </div>
        {/* info */}
        <div className="">
          {isLoading ? (
            <Skeleton width="100%" height="40px" className="mt-[14px]" />
          ) : (
            <Link href={createLinkPost(product)}>
              <h3 className="text-black hover:text-blue-secondary duration-200 mt-[14px] text-[18px] line-clamp-2">
                {product.title}
              </h3>
            </Link>
          )}
          {isLoading ? (
            <Skeleton width="100%" height="20px" className="mt-[14px]" />
          ) : (
            <p className="text-blue-secondary mt-[14px]">
              {product.categories?.data
                ?.map((category) => category.title)
                ?.join(", ")}
            </p>
          )}

          {isLoading ? (
            <Skeleton width="100%" height="36px" className="mt-[14px]" />
          ) : (
            <div className="flex justify-between items-center mt-[14px]">
              <div className="flex gap-x-1 items-center">
                <p>
                  <b className="text-red-500 text-[22px] ">
                    {parseCurrency(calcDiscount(product))}
                  </b>
                  /đêm
                </p>
                {product?.product?.discount?.id ? (
                  <p className="rounded p-1 text-white bg-red-500">
                    {product?.product.discount?.config?.[0]?.discount}{" "}
                    {product?.product.discount?.config?.[0]?.style === "percent"
                      ? "%"
                      : "đ"}
                  </p>
                ) : null}
              </div>
              <ButtonCustom
                title="Xem nhanh"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsQuickView(true);
                }}
              />
            </div>
          )}
          {isLoading ? (
            <Skeleton className="mt-4" width="100%" height="22px" />
          ) : (
            <div className="flex gap-x-4 items-center mt-4">
              {product?.meta?.area ? (
                <div className="flex items-center gap-x-1">
                  <ImgCustom
                    src={Acreage}
                    width={22}
                    height={22}
                    className=""
                  />
                  <p>{product.meta.area} m2</p>
                </div>
              ) : null}
              {product?.meta?.bed ? (
                <div className="flex items-center gap-x-1">
                  <ImgCustom
                    src={Bedroom}
                    width={22}
                    height={22}
                    className=""
                  />
                  <p>{product.meta.bed} ngủ</p>
                </div>
              ) : null}
              {product?.meta?.toilet ? (
                <div className="flex items-center gap-x-1">
                  <ImgCustom src={Toilet} width={22} height={22} className="" />
                  <p>{product.meta.toilet} wc</p>
                </div>
              ) : null}
              {product?.meta?.number ? (
                <div className="flex items-center gap-x-1">
                  <ImgCustom src={People} width={22} height={22} className="" />
                  <p>{product.meta.number} m2</p>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
      <QuickView
        product={product}
        isShow={isQuickView}
        setIsShow={setIsQuickView}
      />
    </div>
  );
};

export default ProductItem;

const ImgSlide = ({ images }) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      loop
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="w-full h-full"
    >
      {images.map((image, index) => (
        <SwiperSlide className="w-full h-full" key={index}>
          <ImgCustom
            src={image}
            width={450}
            height={450}
            fit="cover"
            className="w-full h-full rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
