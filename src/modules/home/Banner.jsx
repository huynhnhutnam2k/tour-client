"use client";

import InputCustom from "@/components/form/input";
import { feedbackApi } from "@/services";
import { orderApi } from "@/services/order-api";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";

const Banner = ({ data }) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
      },
      validationSchema: yup.object({
        name: yup.string().required("Vui lòng nhập họ và tên"),
        phone: yup.string().required("Vui lòng nhập số điện thoại"),
      }),
      onSubmit: async (values) => {
        try {
          const payload = {
            type: "Thông tin",
            name: values.name,
            phone: values.phone,
          };

          await feedbackApi.client.createFeedback(payload);
          toast.success("Cảm ơn chúng tôi đã nhận được thông tin", {
            position: "top-right",
          });
          resetForm()
        } catch {
          toast.error("Gởi thông tin thất bại", {
            position: "top-right",
          });
        }
      },
    });

  return (
    <section
      className="h-[1070px] w-full"
      style={{
        background: `url(${data?.find((item) => item.key === "img")?.value})`,
      }}
    >
      <div className="container h-full py-[200px] px-0 lg:px-20">
        <div className="relative lg:min-w-[450px] w-full p-6 max-w-[500px] rounded-md before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-white/70 before:border-white/50 before:backdrop-blur-[2px] before:rounded-md">
          <div className="relative z-[3]">
            <h3 className="text-[32px] font-semibold text-center leading-[1.2] mb-4">
              {data?.find((item) => item.key === "title")?.value}
            </h3>
            <div
              className="text-[17px] text-[#333] font-normal leading-[1.6]"
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
                className="text-[17px] border-2 border-white  bg-[#6e787a] px-5 py-4 flex justify-center items-center mx-auto text-white transition-all rounded-full hover:rounded-md"
                type="submit"
                onClick={handleSubmit}
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
