"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";

interface FormData {
  email: string;
  name: string;
  number: string;
}

function KeywordForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    number: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittingError, setSubmittingError] = useState("");
  const t = useTranslations("ChatBot");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("https://communite-back-product.onrender.com/add", formData)
      // .post("https://one855-product-code.onrender.com/add", formData)
      .then((response) => {
        console.log(response.data);
        setFormData({ email: "", name: "", number: "" });
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        setSubmittingError(t("messageError"));
      });
  };

  return (
    <div className="w-72 bg-gray-600 p-6 text-sm font-inherit text-gray-900 flex flex-col gap-2 box-border rounded-lg shadow-md">
      <div className="text-center font-semibold text-lg text-white">
        {t("chatTitle")}
      </div>

      {!submitted ? (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              id="email"
              name="email"
              placeholder={t("inputEmailChat")}
              required
              onChange={handleChange}
              value={formData.email}
              className="p-3 rounded-md font-inherit border border-gray-400 bg-gray-700 text-white placeholder-opacity-50 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("inputNameChat")}
              required
              onChange={handleChange}
              value={formData.name}
              className="p-3 rounded-md font-inherit border border-gray-400 bg-gray-700 text-white placeholder-opacity-50 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              id="number"
              name="number"
              placeholder={t("inputTelChat")}
              required
              onChange={handleChange}
              value={formData.number}
              className="p-3 rounded-md font-inherit border border-gray-400 bg-gray-700 text-white placeholder-opacity-50 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            className="flex justify-center items-center text-base text-[#171717] bg-[#FFDD33] w-full p-3 font-inherit gap-2 mt-4 rounded-md shadow-md hover:bg-[#ccbf06] active:scale-95 transition-all duration-300 ease-in-out"
            type="submit"
          >
            {t("chatBtnSubmit")}
          </button>
        </form>
      ) : (
        <p className="bg-gray-500 text-white p-3 rounded-md">
          {t("messageSuccess")}
        </p>
      )}

      {submittingError && (
        <div className="text-red-400 text-base">{submittingError}</div>
      )}
    </div>
  );
}

export default KeywordForm;
