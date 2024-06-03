'use client'

import PrevArrowIcon from "@/assets/svg/PrevArrowIcon";
import { useState } from "react";

const AccordionCustom = ({ title, children }) => {
    const [isShow, setIsShow] = useState(false)
  return (
    <div className="text-white px-0">
      <div className="title text-[18px] text-yellow-primary font-medium flex items-center justify-between w-full bg-blue-secondary p-4" onClick={() => setIsShow(!isShow)}>
        <p>{title}</p>
        <div className="">
            <PrevArrowIcon className="w-5 h-5 -rotate-90" fill="#fec85c"/>
        </div>
      </div>
      <div className={`py-3 px-4 bg-blue-secondary/80 text-base ${isShow ? 'block' : 'hidden'}`}>{children}</div>
    </div>
  );
};

export default AccordionCustom;
