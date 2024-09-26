"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Input } from "@nextui-org/input";

const emailRegExp =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegExp, "Invalid email address"),
});

interface FormInputValue {
  email: string;
}

const FooterInputEmail = () => {
  const t = useTranslations("Footer");
  const [isSuccessSubmitted, setIsSuccessSubmitted] = useState(false);
  const initialValues: FormInputValue = {
    email: "",
  };

  const handleSubmit = async (
    value: FormInputValue,
    { setSubmitting, resetForm }: any,
  ) => {
    console.log("Form submitted:", value);
    setIsSuccessSubmitted(true);
    resetForm();

    setTimeout(() => {
      setIsSuccessSubmitted(false);
    }, 3000);
  };

  return (
    <div className="flex">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="flex w-full sm:w-[460px] lg:w-[696px]">
            <div className="flex flex-col">
              <Field
                as={Input}
                radius="full"
                type="email"
                placeholder={t("inputPlaceholder")}
                className={`max-sm:max-w-[193px] w-[300px] mr-[18px] ${errors.email && touched.email ? "border-red-500" : ""}`}
                name="email"
                classNames={{
                  input: [
                    "bg-transparent",
                    "text-white dark:text-white/90",
                    "placeholder:text-white/60",
                    "group-data-[has-value=true]:text-white",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default/10",
                    "dark:bg-default/50",
                    "h-[53px]",
                    "data-[hover=true]:bg-default/30",
                    "dark:hover:bg-default/70",
                    "group-data-[focus=true]:bg-default/10",
                    "!cursor-text",
                  ],
                }}
              />
              <ErrorMessage
                className="text-red-500 text-sm mb-1 pl-5 mt-2.5 self-start"
                component="div"
                name="email"
              />
              {isSuccessSubmitted && (
                <p className="pl-5 text-[#20FF81]">{t("sentSuccessfully")}</p>
              )}
            </div>
            <Button
              radius="full"
              disabled={isSubmitting}
              type="submit"
              className="bg-main-yellow text-norm-gray w-[104px] h-[53px]"
            >
              {t("button")}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FooterInputEmail;
