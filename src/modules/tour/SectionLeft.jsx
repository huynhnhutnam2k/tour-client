import { ImgCustom } from "@/components/common/imgCustom";

const SectionLeft = ({ data, setIsShowModalFeedback }) => {
  return (
    <div className="w-full lg:w-9/12 bg-white rounded-md lg:p-4 overflow-hidden text-[17px] leading-[1.6]">
      {data?.content ? (
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        ></div>
      ) : null}
      {data.sections?.data?.map((item, index) => (
        <>
          {!data?.content ? (
            index === 0 ? null : (
              <div
                className="w-fit text-[18px] uppercase bg-blue-secondary border-0 text-white flex justify-center items-center font-medium my-5 mx-auto min-w-[250px] py-3 px-4 rounded hover:bg-[#fcd079] duration-200 hover:text-black cursor-pointer animate-pulse2"
                onClick={() => setIsShowModalFeedback(true)}
              >
                Đăng ký booking
              </div>
            )
          ) : (
            <div
              className="w-fit text-[18px] uppercase bg-blue-secondary border-0 text-white flex justify-center items-center font-medium my-5 mx-auto min-w-[250px] py-3 px-4 rounded hover:bg-[#fcd079] duration-200 hover:text-black cursor-pointer animate-pulse2 "
              onClick={() => setIsShowModalFeedback(true)}
            >
              Đăng ký booking
            </div>
          )}
          {item?.title ? (
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: item.title || "" }}
            ></div>
          ) : null}
          {item?.images?.length > 0 ? (
            <div className="grid grid-cols-3 gap-2">
              {item.images.map((img, imgIndex) => (
                <div className="w-full aspect-square" key={imgIndex}>
                  <ImgCustom
                    src={img}
                    width={300}
                    height={300}
                    fit="cover"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          ) : null}
          {item?.content ? (
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: item.content || "" }}
            ></div>
          ) : null}
        </>
      ))}
    </div>
  );
};

export default SectionLeft;
