import { CheckIcon } from "@/assets/svg";
import AccordionCustom from "../common/accordionCustom";
import { handleToggleCategory } from "@/redux/product";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

export const Footer = ({ data, copyRight, layoutWidget, phone, email }) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = (id) => {
    dispatch(handleToggleCategory(id));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (pathname !== "/") {
      router.push("/");
    }
  };
  return (
    <footer className="mt-10">
      <div className="bg-blue-secondary py-[35px] hidden lg:block">
        <div className="container hidden lg:flex flex-col gap-y-4 lg:flex-row justify-between">
          <div className="w-full lg:w-1/3">
            <h3 className="text-[18px] text-yellow-primary mb-4">
              {layoutWidget?.find((item) => item.key === "title1")?.value}
            </h3>
            <p className="text-base text-white">
              {layoutWidget?.find((item) => item.key === "description1")?.value}
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col lg:items-center">
            <h3 className="text-[18px] text-yellow-primary mb-4">
              {layoutWidget?.find((item) => item.key === "title2")?.value}
            </h3>
            <ul>
              {data.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-2 cursor-pointer mb-1"
                  onClick={() => handleClick(item?.id)}
                >
                  <CheckIcon className="w-6 h-6" />
                  <p className="text-base text-white">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col">
            <h3 className="text-[18px] text-yellow-primary mb-4">
              {" "}
              {layoutWidget?.find((item) => item.key === "title3")?.value}
            </h3>
            <p className="text-base text-white">
              <strong>Trụ sở</strong>:{" "}
              {layoutWidget?.find((item) => item.key === "headquarters")?.value}
            </p>
            <p className="text-base text-white">
              <strong>Văn Phòng</strong>:{" "}
              {layoutWidget?.find((item) => item.key === "office")?.value}
            </p>
            <p className="text-base text-white">
              <strong>Hotline</strong>: {phone}
            </p>
            <p className="text-base text-white">
              <strong>Email</strong>: {email}
            </p>
          </div>
        </div>
      </div>
      <div className="container flex flex-col lg:hidden !px-0">
        <AccordionCustom
          title={layoutWidget?.find((item) => item.key === "title1")?.value}
        >
          <p>
            {layoutWidget?.find((item) => item.key === "description1")?.value}
          </p>
        </AccordionCustom>
        <AccordionCustom
          title={layoutWidget?.find((item) => item.key === "title2")?.value}
        >
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-x-2 cursor-pointer mb-1"
                onClick={() => handleClick(item?.id)}
              >
                <CheckIcon className="w-6 h-6" />
                <p className="text-base text-white">{item.title}</p>
              </li>
            ))}
          </ul>
        </AccordionCustom>
        <AccordionCustom
          title={layoutWidget?.find((item) => item.key === "title3")?.value}
        >
          <p className="text-base text-white">
            <strong>Trụ sở</strong>:{" "}
            {layoutWidget?.find((item) => item.key === "headquarters")?.value}
          </p>
          <p className="text-base text-white">
            <strong>Văn Phòng</strong>:{" "}
            {layoutWidget?.find((item) => item.key === "office")?.value}
          </p>
          <p className="text-base text-white">
            <strong>Hotline</strong>: {phone}
          </p>
          <p className="text-base text-white">
            <strong>Email</strong>: {email}
          </p>
        </AccordionCustom>
      </div>

      <div className="bg-blue-fourth">
        <a href="https://satek.vn/" target="_blank" className="">
          <span className="block text-[#ccc] text-center text-sm py-2">
            {copyRight}
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
