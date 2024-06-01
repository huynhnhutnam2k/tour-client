"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ImgCustom } from "../common/imgCustom";

import { useDetectDevice } from "@/helpers/hooks";
import { handleToggleCategory } from "@/redux/product";

export const Header = ({ data }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.productReducer);
  const {
    value: { data: settingData },
  } = useSelector((state) => state.settingReducer);
  const { width } = useDetectDevice();
  useEffect(() => {
    const isSticky = () => {
      const header = document.getElementById("header-main");
      const scrollTop = window.scrollY;
      if (header && width > 767) {
        if (scrollTop >= 100) {
          header.classList.add("fixed", "top-0", "left-0", "w-full", "z-50");
        } else {
          header.classList.remove("fixed", "top-0", "left-0", "w-full", "z-50");
        }
      }
    };
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [width]);

  const handleClick = (id) => {
    dispatch(handleToggleCategory(id));
  };
  //   const handleChangeLocale = async (locale) => {
  //     setIsShowLocaleOption(false);
  //     try {
  //       const response = await fetch("/api/cookie", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           locale,
  //         }),
  //       });
  //       if (!response.ok) {
  //         throw new Error("Response error");
  //       }
  //       const responseData = await response.json();
  //       dispatch(setLocaleState(responseData.locale));
  //       window.location.reload();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  return (
    <header id="header-main" className="bg-blue-primary">
      <div className="container hidden lg:flex flex-col lg:flex-row justify-between py-2">
        <Link href="/">
          <div className="w-[160px] h-[50px]">
            <ImgCustom
              src={settingData?.site_logo}
              width={160}
              height={50}
              className="w-full h-full"
            />
          </div>
        </Link>
        <ul className="flex gap-x-3 lg:max-w-[900px] overflow-auto">
          {data.map((menuItem, menuIndex) => (
            <li
              key={menuIndex}
              className={`text-black px-4 py-3 flex justify-center items-center cursor-pointer text-[17px] uppercase rounded hover:text-white duration-200 hover:bg-blue-secondary ${
                categories.includes(menuItem?.id)
                  ? "bg-blue-secondary text-white"
                  : ""
              }`}
              onClick={() => handleClick(menuItem?.id)}
            >
              {menuItem.title}
            </li>
          ))}
        </ul>
        {/* <div
          className="h-[50px] aspect-square rounded flex justify-center items-center bg-blue-third cursor-pointer relative"
          onClick={() => setIsShowLocaleOption(!isShowLocaleOption)}
          ref={ref}
        >
          <WorldIcon className="w-6 h-6" />
          <div
            className={`absolute top-[calc(100%+5px)] right-0 bg-white px-4 py-3 flex gap-x-2 border border-[#ccc] rounded duration-300 ${
              isShowLocaleOption ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {localeList.map((item, index) => (
              <div
                className="w-[50px] h-8"
                key={index}
                onClick={() => handleChangeLocale(item.title)}
              >
                <ImgCustom
                  src={item.img}
                  width={50}
                  height={32}
                  fit="cover"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <div className="container flex flex-col lg:hidden px-0 !overflow-y-hidden">
        <Link href="/" className="ml-2">
          <div className="w-[160px] h-[50px]">
            <ImgCustom
              src={settingData?.site_logo}
              width={160}
              height={50}
              className="w-full h-full"
            />
          </div>
        </Link>
        {/* <div
          className="h-[50px] max-w-[50px] ml-2 my-3 aspect-square rounded flex justify-center items-center bg-blue-third cursor-pointer relative"
          onClick={() => setIsShowLocaleOption(!isShowLocaleOption)}
          ref={ref}
        >
          <WorldIcon className="w-6 h-6" />
          <div
            className={`absolute top-[calc(100%+5px)] left-0 bg-white px-4 py-3 flex gap-x-2 border border-[#ccc] rounded duration-300 ${
              isShowLocaleOption ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {localeList.map((item, index) => (
              <div
                className="w-[50px] h-8"
                key={index}
                onClick={() => handleChangeLocale(item.title)}
              >
                <ImgCustom
                  src={item.img}
                  width={50}
                  height={32}
                  fit="cover"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div> */}
        <ul className="flex lg:max-w-[900px] overflow-x-auto">
          {data.map((menuItem, menuIndex) => (
            <li
              key={menuIndex}
              className={`px-4 py-3 flex justify-center items-center cursor-pointer text-[17px] uppercase hover:text-white duration-200 hover:bg-blue-secondary whitespace-nowrap bg-blue-secondary text-white ${
                categories.includes(menuItem?.id) ? "bg-red-500" : ""
              }`}
              onClick={() => handleClick(menuItem?.id)}
            >
              {menuItem.title}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
