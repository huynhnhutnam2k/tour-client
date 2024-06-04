"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ImgCustom } from "../common/imgCustom";

import { useDetectDevice } from "@/helpers/hooks";
import { handleToggleCategory } from "@/redux/product";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export const Header = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter();
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
          header.classList.add(
            "fixed",
            "top-0",
            "left-0",
            "w-full",
            "z-[1005]"
          );
        } else {
          header.classList.remove(
            "fixed",
            "top-0",
            "left-0",
            "w-full",
            "z-[1005]"
          );
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
    if (pathname !== "/") {
      router.push("/");
    }
  };

  return (
    <header id="header-main" className="bg-blue-primary min-h-[66px]">
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
      </div>

      <div className="container flex flex-col lg:hidden !px-0 !overflow-y-hidden">
        <div className="flex items-center justify-between">
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
          <div className="text-base text-[#5f8ac2] pr-2">
            Hotline:{" "}
            <span className="text-red-500 font-bold">
              {settingData?.site_hotline || "097 222 0000"}
            </span>
          </div>
        </div>
        <ul className="flex max-w-[900px] overflow-x-auto">
          {data.map((menuItem, menuIndex) => (
            <li
              key={menuIndex}
              className={`px-4 py-4 flex justify-center items-center cursor-pointer text-[17px] uppercase hover:text-white duration-200 hover:bg-blue-secondary whitespace-nowrap bg-blue-secondary text-white ${
                categories.includes(menuItem?.id) ? "!bg-[#00296b]" : ""
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
