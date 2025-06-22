"use client";

import {Button} from "@nextui-org/button";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useTranslations} from "next-intl";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

const instance = axios.create({
    baseURL: "http://localhost:3000",
});

interface UserLetter {
    telephone: string;
}

const postUserLetter = async (data: UserLetter) => {
    const res = await instance.post("/letter", data);

    return res;
};

const phoneRegExp =
    /^\+?1?[-.\s]?(\(?[0-9][0-9]{2}\)?)?[-.\s]?[2-9][0-9]{2}[-.\s]?[0-9]{4}$/;

const validationSchema = Yup.object().shape({
    telephone: Yup.string()
        .required("Phone number is required")
        .matches(phoneRegExp, "+1 (234) 567-8910"),
});

interface FormValues {
    telephone: string;
}

interface TextMessageProps{
    aiCall?: boolean
    setSent: (value: boolean) => void;
}

export default function TextMessage({aiCall, setSent}:TextMessageProps) {
    const t = useTranslations("");

    const initialValues: FormValues = {
        telephone: "",
    };

    const handleSubmit = async (
        values: FormValues,
        { setSubmitting, resetForm }: any
    ) => {
        setSent(true)
        // try {
        //     await postUserLetter(values);
        //
        //     toast.success(t("successMessage"), {
        //         position: "top-right",
        //         autoClose: 6000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //     });
        // } catch (error) {
        //     toast.error(t("errorMessage"), {
        //         position: "top-right",
        //         autoClose: 6000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //     });
        // } finally {
        //     setSubmitting(false);
        //     resetForm();
        // }
    };

    return (
        <>
            <div className="mt-[46px] flex flex-col md:flex-row md:gap-20 items-center justify-center w-full max-w-desktop">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form className="flex flex-col items-center justify-center w-full ">
                            <div className="mb-6 w-full">
                                <div className="flex flex-col">
                                    <Field
                                        className={`w-full h-11 p-2 rounded-xl bg-[#7B765E12] ${aiCall ? "bg-white text-black": "dark:bg-[#38383b]/50"} border-[#27272A] ${
                                            errors.telephone && touched.telephone
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        name="telephone"
                                        placeholder={t("Phone")}
                                        type="tel"
                                    />
                                    <ErrorMessage
                                        className="text-red-500 text-sm mb-1 pl-1 self-start"
                                        component="div"
                                        name="telephone"
                                    />
                                </div>
                            </div>
                            <Button
                                className={`font-bold text-xl w-52 h-[60px] ${aiCall ? "bg-white":"bg-[#FFDD33]" } text-[#101828] rounded-[32px] shadow-[0px_4px_4px_0px_#00000024] sm:mb-11 md:mb-0`}
                                disabled={isSubmitting}
                                size="lg"
                                type="submit"
                            >
                                {aiCall? t("Call") : t("Send")}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}
