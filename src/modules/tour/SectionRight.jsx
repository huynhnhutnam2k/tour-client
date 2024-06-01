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
      name: yup.string().required(trans("form.label.name.error")),
      phone: yup.string().required(trans("form.label.phone.error")),
    }),
    onSubmit: (values) => {
    },
  });
  return (
    <div className="w-full lg:w-3/12">
      <div className="p-4 bg-gradient-form rounded-md sticky top-20">
        <h3 className="uppercase text-center text-lg">
          KIỂM TRA LỊCH TRỐNG & BÁO GIÁ
        </h3>
        <InputCustom
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          label={trans("form.label.name")}
          placeholder={trans("form.label.placeholder")}
          isError={touched.name && errors.name}
          errorMsg={errors.name}
          otherStyle="mt-3 mb-4"
        />
        <InputCustom
          name="phone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
          label={trans("form.label.phone")}
          placeholder={trans("form.label.placeholder")}
          isError={touched.phone && errors.phone}
          errorMsg={errors.phone}
          otherStyle="mb-4"
        />

        <ButtonCustom title="Gửi thông tin" otherStyle="!p-4 uppercase mx-auto" />
      </div>
    </div>
  );
};

export default SectionRight;
