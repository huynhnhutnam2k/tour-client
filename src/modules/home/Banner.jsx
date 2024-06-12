"use client";
import * as yup from "yup";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { feedbackApi } from "@/services";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ImgCustom } from "@/components/common/imgCustom";

const InputCustom = dynamic(() => import("@/components/form/input"));

const Banner = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Vui lòng nhập họ và tên"),
      phone: yup.string().required("Vui lòng nhập số điện thoại"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
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
        resetForm();
        setIsLoading(false);
        router.push("/thanks");
      } catch {
        setIsLoading(false);
        toast.error("Gởi thông tin thất bại", {
          position: "top-right",
        });
      }
    },
  });

  return (
    <>
      <section
        className="h-[1070px] w-full hidden md:block"
        style={{
          background: `url(${data?.find((item) => item.key === "img")?.value})`,
        }}
      >
        <div className="container h-full py-[200px] !px-0 lg:!px-20 lg:!max-w-[1500px]">
          <div className="relative lg:min-w-[450px] w-full p-6 md:max-w-[500px] rounded-md before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[#EAEAEA] before:lg:bg-white/70 before:border-white/50 before:backdrop-blur-[2px] before:rounded-md">
            <div className="relative z-[3]">
              <h3 className="text-[32px] font-semibold text-center leading-[1.2] mb-4">
                {data?.find((item) => item.key === "title")?.value}
              </h3>
              <div
                className="text-[17px] text-[#333] font-normal leading-[1.6]"
                dangerouslySetInnerHTML={{
                  __html:
                    data?.find((item) => item.key === "description")?.value ||
                    "",
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
                  className="text-[17px] border-2 border-white bg-[#6e787a] px-5 py-4 flex justify-center items-center mx-auto text-white transition-all rounded-full hover:rounded-md min-w-[150px]"
                  type="submit"
                  onClick={handleSubmit}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-4 border-white border-r-[transparent] rounded-full animate-spin"></div>
                  ) : (
                    <span>Gửi thông tin</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full block md:hidden">
        <div className="container h-full !px-0 lg:!px-20 lg:!max-w-[1500px]">
          <div className="w-full aspect-[430/240]">
            <ImgCustom
              src={data?.find((item) => item.key === "img")?.value}
              width={430}
              height={300}
              fit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="relative lg:min-w-[450px] w-full p-6 md:max-w-[500px] rounded-md before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[#EAEAEA] before:lg:bg-white/70 before:border-white/50 before:backdrop-blur-[2px] before:rounded-md">
            <div className="relative z-[3]">
              <h3 className="text-[32px] font-semibold text-center leading-[1.2] mb-4">
                {data?.find((item) => item.key === "title")?.value}
              </h3>
              <div
                className="text-[17px] text-[#333] font-normal leading-[1.6]"
                dangerouslySetInnerHTML={{
                  __html:
                    data?.find((item) => item.key === "description")?.value ||
                    "",
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
                  className="text-[17px] bg-blue-secondary px-5 py-4 flex justify-center items-center mx-auto text-white transition-all min-w-[150px] rounded"
                  type="submit"
                  onClick={handleSubmit}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-4 border-white border-r-[transparent] rounded-full animate-spin"></div>
                  ) : (
                    <span>Gửi thông tin</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
