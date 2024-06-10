"use client";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

import { ImgCustom } from "@/components/common/imgCustom";
import { useWidget } from "@/helpers/hooks";

const ThanksModules = () => {
  const { isLoading, data: thanksData } = useWidget({
    key: "thanks-page",
  });

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center w-full lg:max-w-[1170px] mx-auto">
          <Skeleton width={480} height={480} />
          <Skeleton width={650} height={86} className="mb-10" />
          <Skeleton width={650} height={20} className="mb-14" />
          <Skeleton width={344} height={78} />
        </div>
      ) : (
        <div className="flex flex-col items-center max-w-[1170px] mx-auto">
          <div className="w-full sm:w-[480px] sm:h-[480px] overflow-hidden">
            <ImgCustom
              src={
                thanksData?.data?.["thanks-page"]?.data?.field?.find(
                  (item) => item.key === "img"
                )?.value
              }
              width={480}
              height={480}
            />
          </div>
          <div className="font-bold text-[#FBB040]"></div>
          <div className="font-bold text-[#00B3FF]"></div>
          <div
            className="text-[38px] font-normal leading-[46px] text-center mb-10"
            dangerouslySetInnerHTML={{
              __html:
                thanksData?.data?.["thanks-page"]?.data?.field?.find(
                  (item) => item.key === "title"
                )?.value || "",
            }}
          />
          <div
            className="text-xl leading-6 font-normal text-center mb-14"
            dangerouslySetInnerHTML={{
              __html:
                thanksData?.data?.["thanks-page"]?.data?.field?.find(
                  (item) => item.key === "description"
                )?.value || "",
            }}
          />
          <Link href="/">
            <div className="py-[24px] px-[32px] rounded-xl bg-[#00B3FF] text-2xl leading-[30px] font-semibold text-white shadow-backLink cursor-pointer">
              Xem thêm các Villa khác
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default ThanksModules;
