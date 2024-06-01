import CancelIcon from "@/assets/svg/CancelIcon";
import SectionLeft from "@/modules/tour/SectionLeft";
import SectionRight from "@/modules/tour/SectionRight";
import Top from "@/modules/tour/Top";

const QuickView = ({ product, isShow, setIsShow }) => {
  return (
    <div
      className={`fixed left-0 right-0 bottom-0 bg-white z-[1002] duration-300 overflow-auto ${
        isShow ? "opacity-100 top-0" : "opacity-0 top-full"
      }`}
    >
      <div
        className="absolute top-3 right-3 rounded-md w-10 h-10 bg-black/80 cursor-pointer flex items-center justify-center"
        onClick={() => setIsShow(false)}
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
  );
};

export default QuickView;
