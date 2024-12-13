"use client";

import {Button} from "@nextui-org/button";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useTranslations} from "next-intl";
import * as Yup from "yup";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useTheme} from "next-themes";
import {Karma} from "next/font/google";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const fontKarma = Karma({
  subsets: ["latin"],
  weight: ["400"], // доступні weight: 300, 400, 500, 600, 700
  variable: "--font-karma",
});

interface UserLetter {
  username: string;
  email: string;
}

const emailLetter = async (data: UserLetter) => {
  const res = await instance.post("/letter", data);

  return res;
};

const emailRegExp =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "User name must be at least 2 characters")
    .max(60, "User name must be at most 64 characters")
    .required("User name is required"),
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegExp, "Invalid email address"),
});

interface FormValues {
  username: string;
  email: string;
  isRandomName: boolean;
}

interface EmailLatterProps{
  setSent: (value: boolean) => void;
}

export default function EmailLatter({setSent}:EmailLatterProps) {
  const t = useTranslations("");
  const { theme } = useTheme();

  const initialValues: FormValues = {
    username: "",
    email: "",
    isRandomName: true
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: any,
  ) => {
    setSent(true)
    // try {
    //   await emailLetter(values);
    //
    //   toast.success(t("successMessage"), {
    //     position: "top-right",
    //     autoClose: 6000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //   });
    // } catch (error) {
    //   toast.error(t("errorMessage"), {
    //     position: "top-right",
    //     autoClose: 6000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //   });
    // } finally {
    //   setSubmitting(false);
    //   resetForm();
    // }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-20 items-center justify-center w-full max-w-[1280px]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting, values, }) => (
            <Form className="flex flex-col items-center justify-center w-full sm:w-[460px] lg:w-[696px]">
              <div className="py-6 w-full">
                <div className="mb-7 flex flex-col">
                  <Field
                      className={`w-full h-11 p-2 rounded-xl bg-[#7B765E12] dark:bg-[#38383b]/50 border-[#27272A] ${
                          errors.email && touched.email ? "border-red-500" : ""
                      }`}
                      name="email"
                      placeholder={t("E-mail")}
                      type="email"
                  />
                  <ErrorMessage
                      className="text-red-500 text-sm mb-1 pl-1 self-start"
                      component="div"
                      name="email"
                  />
                </div>

                <div className="mb-7 flex flex-col">
                  <Field
                      className={`w-full h-11 p-2 rounded-xl bg-[#7B765E12] dark:bg-[#38383b]/50 border-[#27272A] ${
                          errors.username && touched.username
                              ? "border-red-500"
                              : ""
                      }`}
                      name="username"
                      placeholder={t("Name")}
                      type="text"
                  />
                  <ErrorMessage
                      className="text-red-500 text-sm mb-1 pl-1 self-start"
                      component="div"
                      name="username"
                  />
                </div>

                <div className="mb-4 flex">

                    <Field type="checkbox" className="w-6" name="isRandomName"/>
                    <p className={`text-sm ml-3 text-[#ecedee] ${fontKarma.className}`}>Use any random name</p>

                </div>
              </div>


              <Button
                  className="font-bold text-xl w-44 sm:w-52 h-10 sm:h-[60px] bg-[#FFDD33] text-[#101828] rounded-[32px] shadow-[0px_4px_4px_0px_#00000024] sm:mb-11 md:mb-0 "
                  disabled={values.isRandomName || isSubmitting}
                  size="lg"
                  type="submit"
              >
                {t("Send")}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer theme={theme === "dark" ? "dark" : "light"}/>
    </>
  );
}
