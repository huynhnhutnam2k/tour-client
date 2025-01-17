"use client";

import CancelIcon from "@/assets/svg/CancelIcon";
import { useEffect, useState } from "react";
import { ImgCustom } from "./imgCustom";
import PrevArrowIcon from "@/assets/svg/PrevArrowIcon";

export const SingleLightbox = ({ defaultImg, thumb, isOpen, setIsOpen }) => {
  const [photoIndex, setPhotoIndex] = useState();

  useEffect(() => {
    if (defaultImg) {
      const index = thumb.findIndex((item) => {
        return item === defaultImg;
      });

      setPhotoIndex(index);
    } else {
      setPhotoIndex(0);
    }
  }, [defaultImg, thumb]);

  const handleChange = (state) => {
    setPhotoIndex(
      photoIndex + state < 0
        ? thumb.length - 1
        : photoIndex + state > thumb.length - 1
        ? 0
        : photoIndex + state
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-black/90 z-[3000] ${
        isOpen ? "w-screen block" : "w-0 hidden"
      } h-screen`}
    >
      <div className="flex justify-between items-center h-12 w-full px-10">
        <div className="text-white">
          {photoIndex + 1}/{thumb?.length}
        </div>
        <div
          className="w-10 h-10 flex justify-center items-center bg-black cursor-pointer"
          onClick={() => {
            setPhotoIndex(0);
            setIsOpen(false);
          }}
        >
          <CancelIcon className="w-6 h-6" fill="white" />
        </div>
      </div>

      <div className="relative container h-[calc(100%-50px)] flex justify-center items-center overflow-hidden">
        {thumb?.map((item, index) => (
          <ImgCustom
            src={item}
            width={1024}
            height={1024}
            key={index}
            className={`w-full h-full ${
              photoIndex === index ? "block" : "hidden"
            }`}
          />
        ))}
      </div>
      <div className="btn left" onClick={() => handleChange(-1)}>
        <PrevArrowIcon className="w-6 h-6" />
      </div>
      <div className="btn right" onClick={() => handleChange(1)}>
        <PrevArrowIcon className="w-6 h-6 rotate-180" />
      </div>
    </div>
  );
};
