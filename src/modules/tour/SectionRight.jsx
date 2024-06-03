"use client";
import { useFormik } from "formik";
import * as yup from "yup";

import InputCustom from "@/components/form/input";
import { useDetectLang } from "@/helpers/hooks";
import ButtonCustom from "@/components/common/buttonCustom";

const SectionRight = () => {
  const { trans } = useDetectLang();
  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Vui lòng nhập tên"),
      phone: yup.string().required("Vui lòng nhập số điện thoại"),
    }),
    onSubmit: (values) => {},
  });
  return (
    <div className="w-full lg:w-3/12">
      <div className="p-4 bg-gradient-form rounded-md sticky top-20 z-[1005]">
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
        >
          Gửi thông tin
        </div>
      </div>
    </div>
  );
};

export default SectionRight;
