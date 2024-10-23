"use client";

import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTranslations } from "next-intl";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

interface UserLetter {
  username: string;
  email: string;
  telephone: string;
  comments?: string;
}

const postUserLetter = async (data: UserLetter) => {
  const res = await instance.post("/letter", data);

  return res;
};

const phoneRegExp =
  /^\+?1?[-.\s]?(\(?[0-9][0-9]{2}\)?)?[-.\s]?[2-9][0-9]{2}[-.\s]?[0-9]{4}$/;
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
  telephone: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, "+X (XXX) XXX-XXXX"),
});

interface FormValues {
  username: string;
  email: string;
  telephone: string;
  comments?: string;
}

export default function ContactUsPage() {
  const t = useTranslations("ContactUsPage");
  const { theme } = useTheme();

  const initialValues: FormValues = {
    username: "",
    email: "",
    telephone: "",
    comments: "",
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      await postUserLetter(values);

      toast.success(t("successMessage"), {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error(t("errorMessage"), {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <>
      <h1 className="font-bold text-[35px] leading-[0.96] tracking-[-0.04em] text-center uppercase w-full text-[#000] dark:text-[#fff] py-10 mb-[72px]">
        {t("contactTitle")}
      </h1>

      <section className="flex flex-col md:flex-row md:gap-20 items-center justify-center w-full max-w-[1280px]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="flex flex-col items-center justify-center w-full sm:w-[460px] lg:w-[696px]">
              <Card className="p-6 mb-12 w-full">
                <div className="mb-7 flex flex-col">
                  <Field
                    className={`w-full h-11 p-2 rounded-xl bg-[#7B765E12] dark:bg-[#38383b]/50 border-[#27272A] ${
                      errors.username && touched.username
                        ? "border-red-500"
                        : ""
                    }`}
                    name="username"
                    placeholder={t("inputName")}
                    type="text"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm mb-1 pl-1 self-start"
                    component="div"
                    name="username"
                  />
                </div>

                <div className="mb-7 flex flex-col">
                  <Field
                    className={`w-full h-11 p-2 rounded-xl bg-[#7B765E12] dark:bg-[#38383b]/50 border-[#27272A] ${
                      errors.email && touched.email ? "border-red-500" : ""
                    }`}
                    name="email"
                    placeholder={t("inputMail")}
                    type="email"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm mb-1 pl-1 self-start"
                    component="div"
                    name="email"
                  />
                </div>

                <div className="mb-12 flex flex-col">
                  <Field
                    className={`w-full h-11 p-2 rounded-xl bg-[#7B765E12] dark:bg-[#38383b]/50 border-[#27272A] ${
                      errors.telephone && touched.telephone
                        ? "border-red-500"
                        : ""
                    }`}
                    name="telephone"
                    placeholder={t("inputTel")}
                    type="tel"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm mb-1 pl-1 self-start"
                    component="div"
                    name="telephone"
                  />
                </div>

                <div className="">
                  <Field
                    as="textarea"
                    className={`w-full p-2 bg-[#7B765E12] dark:bg-[#38383b]/50 border-[#27272A] rounded-xl min-h-44 `}
                    name="comments"
                    placeholder={t("inputCom")}
                  />
                </div>
              </Card>
              <Button
                className="font-bold text-xl w-52 h-[60px] bg-[#FFDD33] text-[#101828] rounded-[32px] shadow-[0px_4px_4px_0px_#00000024]  mb-11 md:mb-0 "
                disabled={isSubmitting}
                size="lg"
                type="submit"
              >
                {t("contactBtn1")}
              </Button>
            </Form>
          )}
        </Formik>
      </section>
      <ToastContainer theme={theme === "dark" ? "dark" : "light"} />
    </>
  );
}
