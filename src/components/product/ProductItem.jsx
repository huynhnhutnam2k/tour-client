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

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <Link className="w-full" href={createLinkPost(product)}>
      <div className="w-full mt-[30px] mx-4 relative">
        {product?.product?.discount?.id ? (
          <div className="absolute top-4 -left-[10px] px-4 py-1 text-center uppercase leading-[1.5] text-[17px] rounded bg-gradient-flash-sale text-white z-[1000]">
            Flash sale
          </div>
        ) : null}
        {/* <div className="img w-full aspect-square relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-9 before:content-[''] before:bg-gradient-to-t before:from-black/50 before:to-black/20 before:z-[1000]"> */}
        <div className="img w-full aspect-square relative overflow-hidden rounded-lg">
          <div className="absolute bottom-0 right-0 px-4 py-1 text-center uppercase leading-[1.5] text-[17px] bg-orange-600 rounded-br-lg text-white z-[1000] line-through shadow-oldPrice">
            {parseCurrency(product?.product?.price, "")}
          </div>
          <ImgSlide images={product.media} />
        </div>
        {/* info */}
        <div className="">
          <h3 className="text-black hover:text-blue-secondary duration-200 mt-[14px] text-[18px]">
            {product.title}
          </h3>
          <p className="text-blue-secondary mt-[14px]">
            {product.categories?.data
              ?.map((category) => category.title)
              ?.join(", ")}
          </p>
          <div className="flex justify-between items-center mt-[14px]">
            <div className="flex gap-x-1 items-center">
              <p>
                <b className="text-red-500 text-[22px] ">
                  {parseCurrency(calcDiscount(product))}
                </b>
                /đêm
              </p>
              <p className="rounded p-1 text-white bg-red-500">
                {product?.product.discount?.config?.[0]?.discount}{" "}
                {product?.product.discount?.config?.[0]?.style === "percent"
                  ? "%"
                  : "đ"}
              </p>
            </div>
            <ButtonCustom title="Xem nhanh" onClick={() => {}} />
          </div>
          <div className="flex gap-x-4 items-center mt-4">
            {product?.meta?.area ? (
              <div className="flex items-center gap-x-1">
                <ImgCustom src={Acreage} width={22} height={22} className="" />
                <p>{product.meta.area} m2</p>
              </div>
            ) : null}
            {product?.meta?.bed ? (
              <div className="flex items-center gap-x-1">
                <ImgCustom src={Bedroom} width={22} height={22} className="" />
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
        </div>
      </div>
    </Link>
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
