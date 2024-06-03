"use client";
import PrevArrowIcon from "@/assets/svg/PrevArrowIcon";
import { useEffect, useState } from "react";

export const ButtonScroll = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <>
        <div
          className={`fixed right-2 lg:right-10 rounded-full z-10 w-[60px] h-[60px] flex justify-center items-center duration-100 bg-black/50 cursor-pointer shadow-social ${show ? 'bottom-[75px] md:bottom-[255px] opacity-100' : 'bottom-0 opacity-0'}`}
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          <PrevArrowIcon className="w-9 h-9 rotate-90" fill="#eee" />
        </div>
    </>
  );
};

export default ButtonScroll;
