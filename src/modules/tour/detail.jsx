"use client";
import { useEffect, useState } from "react";

import Top from "./Top";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";
import ProductList from "@/components/product/ProductList";
import ModalFeedback from "@/components/modal/ModalFeedback";
import { SingleLightbox } from "@/components/common/singleLightbox";

export const TourDetailModule = ({ data }) => {
  const [isShowModalFeedback, setIsShowModalFeedback] = useState(false);
  const [thumbs, setThumbs] = useState([]);
  const [defaultImg, setDefaultImg] = useState();
  const [isOpenLightbox, setIsOpenLightbox] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    const element = document.getElementById("tour-left");
    const listImg = [];
    let imgs;
    if (element) {
      imgs = element.querySelectorAll("img");
      imgs.forEach((img) => {
        listImg.push(img.getAttribute("src"));
      });
    }
    setThumbs(listImg);
  }, []);

  const handleClickImg = () => {
    const element = document.getElementById("tour-left");
    if (element) {
      const imgs = element.querySelectorAll("img");
      imgs.forEach((img) => {
        img.addEventListener("click", () => {
            if (firstTime) {
                setDefaultImg(imgs[0].getAttribute("src"));
                setFirstTime(false)
            } else {
                setDefaultImg(img.getAttribute("src"));    
            }
            setIsOpenLightbox(true);
        });
      });
    }
  };

  useEffect(() => {
    handleClickImg()
  },[])
  return (
    <section className="tour-detail">
      <div className="container">
        <Top data={data} />
      </div>

      <div className="mt-[30px] py-[30px] lg:bg-gray-primary">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-x-6">
            <SectionLeft
              data={data}
              setIsShowModalFeedback={setIsShowModalFeedback}
              handleClickImg={handleClickImg}
            />
            <SectionRight isShowModalFeedback={isShowModalFeedback} />
          </div>
        </div>
      </div>
      <div className="container pt-8">
        <h3 className="text-2xl">Các sản phẩm nổi bật</h3>
      </div>
      <ProductList />
      <ModalFeedback
        isOpen={isShowModalFeedback}
        handleClose={() => setIsShowModalFeedback(false)}
      />

      <SingleLightbox
        defaultImg={defaultImg}
        isOpen={isOpenLightbox}
        thumb={thumbs}
        setIsOpen={setIsOpenLightbox}
      />
    </section>
  );
};

export default TourDetailModule;
