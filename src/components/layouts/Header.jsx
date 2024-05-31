"use client";
import { useRef, useState } from "react";

import { ImgCustom } from "../common/imgCustom";

// asset
import Logo from "@/assets/img/logo.png";
import WorldIcon from "@/assets/svg/worldIcon";
import FlagVi from "@/assets/img/FlagVi.png";
import FlagEn from "@/assets/img/FlagEn.jpg";
import { useClickOutside } from "@/helpers/hooks";
import Link from "next/link";

const localeList = [
  {
    title: "vi",
    img: FlagVi,
  },
  {
    title: "en",
    img: FlagEn,
  },
];

export const Header = ({ data }) => {
  const [isShowLocaleOption, setIsShowLocaleOption] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => {
    setIsShowLocaleOption(false);
  });
  return (
    <header className="bg-blue-primary">
      <div className="container flex justify-between py-2">
        <Link href="/">
          <ImgCustom src={Logo} width={160} height={50} />
        </Link>
        <ul className="flex gap-x-3">
          {data.map((menuItem, menuIndex) => (
            <li
              key={menuIndex}
              className="text-black px-4 py-3 flex justify-center items-center cursor-pointer text-[17px] uppercase rounded hover:text-white duration-200 hover:bg-blue-secondary"
            >
              {menuItem.title}
            </li>
          ))}
        </ul>
        <div
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
              <div className="w-[50px] h-8" key={index}>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
