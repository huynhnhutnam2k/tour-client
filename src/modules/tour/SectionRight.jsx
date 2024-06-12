"use client";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import InputCustom from "@/components/form/input";
import { feedbackApi } from "@/services";

const SectionRight = ({ isShowModalFeedback }) => {
  const [top, setTop] = useState();
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
      name: yup.string().required("Vui lòng nhập tên"),
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
          autoClose: 3000,
        });
        resetForm();
      } catch {
        toast.error("Gởi thông tin thất bại", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    },
  });

  useEffect(() => {
    const headerMain = document.getElementById("header-main");
    const handleHeight = () => {
      setTop(headerMain.scrollHeight + 20);
    };
    handleHeight();
    window.addEventListener("resize", handleHeight);
    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, []);

  return (
    <div className="w-full lg:w-3/12">
      {!isShowModalFeedback ? (
        <div
          className="p-4 bg-gradient-form rounded-md lg:sticky lg:z-[1004]"
          style={{
            top,
          }}
        >
          <h3 className="uppercase text-center text-[22px] font-medium leading-[1.8]">
            KIỂM TRA LỊCH TRỐNG & BÁO GIÁ
          </h3>
          <InputCustom
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            label="Họ và tên"
            placeholder="Nhập họ tên"
            isError={touched.name && errors.name}
            errorMsg={errors.name}
            otherStyle="mt-3 mb-4"
          />
          <InputCustom
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            label="Điện thoại"
            placeholder="Nhập điện thoại"
            isError={touched.phone && errors.phone}
            errorMsg={errors.phone}
            otherStyle="mb-4"
          />

          <div
            className="p-4 bg-[#fcd079] text-black flex justify-center
                items-center mx-auto text-[18px] cursor-pointer w-fit rounded uppercase duration-150 hover:shadow-booking hover:opacity-80"
            onClick={handleSubmit}
          >
            Gửi thông tin
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SectionRight;
