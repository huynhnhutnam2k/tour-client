"use client";

import { ImgCustom } from "@/components/common/imgCustom";
import { calcDiscount, parseCurrency } from "@/helpers/utils";

// images
import Acreage from "@/assets/img/acreage.png";
import Bedroom from "@/assets/img/bedroom.png";
import Toilet from "@/assets/img/toilet.png";
import People from "@/assets/img/people.png";
import { useState } from "react";
import { SingleLightbox } from "@/components/common/singleLightbox";

const Top = ({ data }) => {
  const [isOpenLightbox, setIsOpenLightbox] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <div className="hidden lg:flex gap-x-[10px] py-4">
        <div className="relative w-1/2 aspect-[665/435] rounded-tl-xl rounded-bl-xl overflow-hidden">
          <ImgCustom
            src={data.image}
            width={665}
            height={435}
            fit="cover"
            className="w-full h-full rounded-tl-xl rounded-bl-xl hover:scale-110 duration-300"
          />
          <div
            className="absolute bottom-3 right-3 bg-white/75 text-black px-4 py-3 rounded-md cursor-pointer"
            onClick={() => setIsOpenLightbox(true)}
          >
            Xem tất cả ảnh
          </div>
        </div>
        <div className="w-1/2 aspect-[665/435] rounded-tr-xl rounded-br-xl overflow-hidden">
          <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
            {data.media.slice(0, 4).map((item, index) => (
              <div
                className="w-full aspect-[327/212] overflow-hidden"
                key={index}
              >
                <ImgCustom
                  src={item}
                  width={327}
                  height={212}
                  fit="cover"
                  className="w-full h-full duration-300 hover:scale-125"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex lg:hidden overflow-x-auto mt-3">
        {data.media.map((item, index) => (
          <div className="w-full min-w-full aspect-[350/227]" key={index}>
            <ImgCustom
              src={item}
              width={350}
              height={227}
              fit="cover"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-[26px] leading-[1.4]">{data.title}</h1>
          <div className="flex flex-col lg:items-end">
            <div className="flex gap-x-1 items-center">
              <p>
                <b className="text-red-500 text-[22px] ">
                  {parseCurrency(calcDiscount(data))}
                </b>
                /đêm
              </p>
            </div>
            {data?.product?.discount?.id ? (
              <div className="line-through">
                {parseCurrency(data.product.price)}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex gap-x-4 items-center mt-4">
          {data?.meta?.area ? (
            <div className="flex items-center gap-x-1">
              <ImgCustom src={Acreage} width={22} height={22} className="" />
              <p>{data.meta.area} m2</p>
            </div>
          ) : null}
          {data?.meta?.bed ? (
            <div className="flex items-center gap-x-1">
              <ImgCustom src={Bedroom} width={22} height={22} className="" />
              <p>{data.meta.bed} ngủ</p>
            </div>
          ) : null}
          {data?.meta?.toilet ? (
            <div className="flex items-center gap-x-1">
              <ImgCustom src={Toilet} width={22} height={22} className="" />
              <p>{data.meta.toilet} wc</p>
            </div>
          ) : null}
          {data?.meta?.number ? (
            <div className="flex items-center gap-x-1">
              <ImgCustom src={People} width={22} height={22} className="" />
              <p>{data.meta.number} m2</p>
            </div>
          ) : null}
        </div>
      </div>
      <SingleLightbox
        thumb={data.media}
        isOpen={isOpenLightbox}
        setIsOpen={setIsOpenLightbox}
      />
    </div>
  );
};

export default Top;
