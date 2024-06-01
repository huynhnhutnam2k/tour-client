"use client";

import InputCustom from "@/components/form/input";
import { useFormik } from "formik";
import * as yup from "yup";

const Banner = ({ data }) => {
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
        background: `url(${data?.find((item) => item.key === "img")?.value})`,
      }}
    >
      <div className="container h-full py-[200px] px-0 lg:px-20">
        <div className="relative lg:min-w-[450px] w-full p-6 max-w-[500px] rounded-md before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-white/70 before:border-white/50 before:backdrop-blur-[2px] ">
          <div className="relative z-[3]">
            <h3 className="text-[36px] font-bold text-center leading-[48px] mb-4">
              {data?.find((item) => item.key === "title")?.value}
            </h3>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html:
                  data?.find((item) => item.key === "description")?.value || "",
              }}
            ></div>
            <div className="">
              <InputCustom
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Họ và tên"
                placeholder="Nhập họ tên"
                otherStyle="my-5"
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
