"use client";

import InputCustom from "@/components/form/input";
import { useFormik } from "formik";
import * as yup from "yup";

const data = [
  "Hơn 50 Villa cao cấp đạt đủ tiêu chuẩn được chọn lọc với thiết kế riêng biệt.",
  "Tiện ích miễn phí hồ bơi, bãi biển, xe điện...",
  "Công viên nước, công viên giải trí, đa dạng nhà hàng Hải sản.",
  "Hỗ trợ check in sớm - check out muộn.",
  "Dịch vụ BBQ tại Villa, đi chợ thay...",
];
const Banner = () => {
  const url =
    "https://web.hn.ss.bfcplatform.vn/airbnbnova1/background/air-5748bfd8954ttg.jpg";
  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Please enter your name"),
      phone: yup.string().required("Please enter your phone"),
    }),
    onSubmit: (values) => {},
  });
  return (
    <section
      className="h-[1070px] w-full"
      style={{
        background: `url(${url})`,
      }}
    >
      <div className="container h-full py-[200px]">
        <div className="relative min-w-[450px] p-6 max-w-[500px] rounded-md before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-white/70 before:border-white/50 before:backdrop-blur-[2px] ">
          <div className="relative z-[3]">
            <h3 className="text-[36px] font-bold text-center leading-[48px] mb-4">
              Booking Villa NovaWorld Phan Thiết
            </h3>
            <ul className="">
              {data.map((item, index) => (
                <li key={index} className="text-base">
                  🌊 {item}
                </li>
              ))}
            </ul>
            <p className="font-bold text-base mb-5">
              Hotline:{" "}
              <span className="text-orange-500 font-bold">097 222 0000</span>
            </p>

            <div className="">
              <InputCustom
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Họ và tên"
                placeholder="Nhập họ tên"
                otherStyle="mb-5"
                isError={touched.name && errors.name}
                errorMsg={errors.name}
              />
              <InputCustom
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Số điện thoại"
                placeholder="Nhập số điện thoại"
                otherStyle="mb-6"
                isError={touched.phone && errors.phone}
                errorMsg={errors.phone}
              />

              <button
                className="border-2 border-white  bg-gray-400 px-5 py-4 flex justify-center items-center mx-auto text-white transition-all rounded-full hover:rounded-md"
                type="submit"
              >
                Gửi thông tin
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
