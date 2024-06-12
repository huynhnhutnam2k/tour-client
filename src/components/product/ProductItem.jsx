import Link from "next/link";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
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
import { setIsQuickView } from "@/redux/product";
import PrevArrowIcon from "@/assets/svg/PrevArrowIcon";

const ProductItem = ({ product, isLoading }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <div className="w-full pt-[30px] px-3 lg:px-[12px] relative h-full flex flex-col flex-1 justify-between">
        {product?.product?.discount?.id ? (
          <div className="absolute top-[46px] left-0 px-4 py-1 text-center uppercase leading-[1.5] text-[17px] rounded bg-gradient-flash-sale text-white z-[1000]">
            Flash sale
          </div>
        ) : product?.trademark?.data?.slug === "moi" ? (
          <div className="absolute top-[46px] left-0 px-4 py-1 text-center uppercase leading-[1.5] text-[17px] rounded bg-gradient-flash-sale text-white z-[1000]">
            Mới
          </div>
        ) : null}
        <div className="img w-full aspect-square relative overflow-hidden rounded-lg flex-shrink-0">
          {product?.product?.discount?.id ? (
            <div className="absolute bottom-0 right-0 px-4 py-1 text-center uppercase leading-[1.5] text-[17px] bg-orange-600 rounded-br-lg text-white z-[1000] line-through shadow-oldPrice">
              {parseCurrency(product?.product?.price, "").replace("VND", "đ")}
            </div>
          ) : null}
          {isLoading ? (
            <Skeleton width="100%" height="100%" count={1} />
          ) : (
            <ImgSlide images={product.media} product={product} />
          )}
        </div>
        {/* info */}
        <div className="flex flex-col flex-1">
          <div className="flex-shrink-0">
            {isLoading ? (
              <Skeleton width="100%" height="40px" className="mt-[14px]" />
            ) : (
              <Link href={createLinkPost(product)}>
                <h3 className="text-[#333] hover:text-blue-secondary duration-200 mt-[14px] text-[18px] leading-[1.4] font-medium line-clamp-2">
                  {product.title}
                </h3>
              </Link>
            )}
          </div>

          <div className="flex flex-col mt-auto">
            {isLoading ? (
              <Skeleton width="100%" height="20px" className="mt-[14px]" />
            ) : (
              <p className="text-[#3e81ff] mt-[14px] text-[15px] leading-[1.5] font-medium truncate">
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
                    <b className="text-[#ff0000] text-[22px] font-medium">
                      {parseCurrency(calcDiscount(product)).replace("VND", "₫")}
                    </b>
                    /đêm
                  </p>
                  {product?.product?.discount?.id ? (
                    <p className="rounded p-1 text-white bg-[#ff0000]">
                      {"-"}
                      {product?.product.discount?.config?.[0]?.discount}
                      {product?.product.discount?.config?.[0]?.style ===
                      "percent"
                        ? "%"
                        : "đ"}
                    </p>
                  ) : null}
                </div>
                <ButtonCustom
                  title="Xem nhanh"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(
                      setIsQuickView({
                        isQuickView: true,
                        quickViewData: product,
                      })
                    );
                  }}
                />
              </div>
            )}
            {isLoading ? (
              <Skeleton className="mt-4" width="100%" height="22px" />
            ) : product?.meta?.length === 0 ? <div className="min-h-[22px] mt-4"></div> : (
              <div className="flex gap-x-4 items-center mt-4">
                {product?.meta?.area ? (
                  <div className="flex items-center gap-x-1">
                    <ImgCustom
                      src={Acreage}
                      width={22}
                      height={22}
                      className=""
                    />
                    <p className="text-[15px]">{product.meta.area} m2</p>
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
                    <p className="text-[15px]">{product.meta.bed} ngủ</p>
                  </div>
                ) : null}
                {product?.meta?.toilet ? (
                  <div className="flex items-center gap-x-1">
                    <ImgCustom
                      src={Toilet}
                      width={22}
                      height={22}
                      className=""
                    />
                    <p className="text-[15px]">{product.meta.toilet} wc</p>
                  </div>
                ) : null}
                {product?.meta?.number ? (
                  <div className="flex items-center gap-x-1">
                    <ImgCustom
                      src={People}
                      width={22}
                      height={22}
                      className=""
                    />
                    <p className="text-[15px]">{product.meta.number} khách</p>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

const ImgSlide = ({ images, product }) => {
  const slideRef = useRef(null);

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    slideRef?.current?.swiper?.slidePrev();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    slideRef?.current?.swiper?.slidePrev();
  };
  return (
    <Swiper
      cssMode={true}
      //   navigation={true}
      pagination={true}
      loop
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="w-full h-full group"
      ref={slideRef}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 left-2 z-[99999999] w-10 h-10 flex justify-center items-center rounded-full cursor-pointer bg-gray-secondary opacity-0 duration-150 group-hover:opacity-100"
        onClick={handlePrev}
      >
        <PrevArrowIcon fill="white" className="w-6 h-6" />
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 right-2 z-[99999999] w-10 h-10 flex justify-center items-center rounded-full cursor-pointer bg-gray-secondary opacity-0 duration-150 group-hover:opacity-100"
        onClick={handleNext}
      >
        <PrevArrowIcon fill="white" className="w-6 h-6 rotate-180" />
      </div>

      {images.map((image, index) => (
        <SwiperSlide className="w-full h-full" key={index}>
          <Link href={createLinkPost(product)}>
            <ImgCustom
              src={image}
              width={450}
              height={450}
              fit="cover"
              className="w-full h-full rounded-lg"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
