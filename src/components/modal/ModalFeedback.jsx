"use client";
import * as yup from "yup";
import { useFormik } from "formik";

import { feedbackApi } from "@/services";
import InputCustom from "../form/input";
import CancelIcon from "@/assets/svg/CancelIcon";
import { toast } from "react-toastify";

const ModalFeedback = ({ isOpen, handleClose }) => {
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
        handleClose();
        resetForm();
        toast.success("Cảm ơn chúng tôi đã nhận được thông tin", {
          position: "top-right",
          autoClose: 3000,
        });
      } catch {
        handleClose();
        toast.error("Gởi thông tin thất bại", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    },
  });

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-[2000] ${
        isOpen ? "w-screen block" : "w-0 hidden"
      } h-screen flex justify-center`}
    >
      <div className="w-full lg:max-w-[420px] bg-white h-fit mt-5 rounded-xl relative">
        <div
          className="absolute -top-3 -right-3 w-12 h-12 flex justify-center items-center bg-black/60 cursor-pointer"
          onClick={handleClose}
        >
          <CancelIcon className="w-6 h-6" fill="white" />
        </div>
        <div className="w-full h-[55px] flex justify-center items-center uppercase text-[24px] leading-[1.3] bg-blue-secondary text-white rounded-tl-lg rounded-tr-lg font-medium">
          Đăng ký booking
        </div>
        <div className="px-4 py-5 bg-white rounded-bl-lg rounded-br-lg">
          <InputCustom
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            label="Họ và tên"
            placeholder="Nhập họ tên"
            isError={touched.name && errors.name}
            errorMsg={errors.name}
            otherStyle="mb-4"
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
                items-center mx-auto text-[18px] cursor-pointer w-full rounded-xl uppercase duration-150 hover:opacity-80"
            onClick={handleSubmit}
          >
            Gửi thông tin
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFeedback;
