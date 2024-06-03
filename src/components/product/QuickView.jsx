import CancelIcon from "@/assets/svg/CancelIcon";
import SectionLeft from "@/modules/tour/SectionLeft";
import SectionRight from "@/modules/tour/SectionRight";
import Top from "@/modules/tour/Top";
import { setIsQuickView } from "@/redux/product";
import { useDispatch } from "react-redux";

const QuickView = ({ product, isShow }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed left-0 right-0 bottom-0 bg-white z-[1006] duration-300 w-screen h-screen overflow-hidden ${
        isShow ? "opacity-100 top-0" : "opacity-0 top-full"
      }`}
    >
      <div className="h-screen overflow-y-auto">
        <div
          className="absolute top-3 right-5 rounded-md w-10 h-10 bg-black/80 cursor-pointer flex items-center justify-center"
          onClick={() =>
            dispatch(setIsQuickView({ isQuickView: false, quickViewData: {} }))
          }
        >
          <CancelIcon className="w-6 h-6" fill="white" />
        </div>
        <div className="container">
          <Top data={product} />
        </div>
        <div className="mt-[30px] py-[30px] bg-gray-primary">
          <div className="container">
            <div className="flex gap-x-6 flex-col lg:flex-row gap-y-3 lg:gap-x-6">
              <SectionLeft data={product} />
              <SectionRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
