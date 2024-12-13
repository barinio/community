"use client";

import {useTranslations} from "next-intl";
import {Karma, Koh_Santepheap} from "next/font/google";
import Image from "next/image";
import {useState} from "react";
import {ToastContainer} from "react-toastify";
import {useTheme} from "next-themes";

import {LogoDemo, PhoneDemo} from "@/components/icons";
import iphone from "@/images/demo-iPhone11.png";
import mail from "@/images/mail.png";
import voice from "@/images/voice-icon.svg";
import clientProf from "@/images/clientProf.png";
import SectionContentWrapper from "@/components/FutureSolutionsSection/helpers/SectionContentWrapper";
import EmailLatter from "@/components/EmailLatter";
import TextMessage from "@/components/TextMessage";
import BlockTitleTemplate from "@/components/FutureSolutionsSection/helpers/BlockTitleTemplate";


const fontKohSantepheap = Koh_Santepheap({
  subsets: ["latin"],
  weight: ["900"], // доступні weight: 100, 300, 400, 700, 900
  variable: "--font-koh",
});

const fontKarma = Karma({
  subsets: ["latin"],
  weight: ["400"], // доступні weight: 300, 400, 500, 600, 700
  variable: "--font-karma",
});

export default function PrivacyPolicy() {
  const t = useTranslations("");
  const { theme } = useTheme();


  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isTextMessageSent, setIsTextMessageSent] = useState(false);
  const [isVoiceMessageSent, setIsVoiceMessageSent] = useState(false);
  const [isAICall, setIsAICall] = useState(false);

  return (
    <>
      <div className="flex xl:flex-row flex-col gap-6 w-full">
        <div className="rounded-[32px] bg-[#171717] px-5 sm:px-[60px] py-[30px] sm:py-[50px] flex justify-between w-full relative ">
          <div className="w-full">
            <div className="bg-main-yellow flex justify-center items-center rounded-full w-[44px] h-[44px] sm:w-[97px] sm:h-[97px] mb-3.5 sm:mb-[28px]">
              <LogoDemo />
            </div>

            <h2
              className={`sm:text-[49px] text-lg leading-6 font-black text-white mb-3 sm:mb-[22px] sm:w-[286px] sm:leading-[57px] ${fontKohSantepheap.className}`}
            >
              {t("Real-time Demo")}
            </h2>
            <p
              className={`text-[10px] sm:text-lg w-[176px] sm:w-[325px] text-[#ecedee] ${fontKarma.className}`}
            >
              For a better experience, please enter your name or click "
              <span className="font-semibold">Use any</span> ". We also ask you
              to enter your phone number and email address.
            </p>
          </div>

          <div className="relative sm:ml-5 xl:ml-0 xl:w-[320px] w-[500px]">
            <Image
              src={iphone}
              alt="img"
              width={320}
              className="absolute bottom-[-30px] sm:bottom-[-50px] w-full min-w-[139px]"
            />
          </div>
        </div>

        <div className="rounded-[32px] bg-[#171717] w-full xl:w-[480px] p-5 sm:px-[60px] sm:pt-[60px] sm:pb-[40px] sm:min-h-[414px] min-h-[300px]">
          {isEmailSent ? (
            <>
              <h2
                className={`text-lg sm:text-[49px] font-black text-white mb-3 sm:mb-[22px] w-[286px] leading-6 sm:leading-[57px] ${fontKohSantepheap.className}`}
              >
                {t("Email sent")}
              </h2>
              <p
                className={`text-[10px] sm:text-lg w-[325px] mb-[34px] ${fontKarma.className}`}
              >
                We sent you a message on the email you provide
              </p>

              <div className="relative ">
                <Image
                  src={mail}
                  alt="img"
                  width={320}
                  className="absolute left-[-45px]"
                />
              </div>
            </>
          ) : (
            <>
              <h2
                className={`text-lg sm:text-[49px] font-black text-white mb-3 sm:mb-[22px] leading-6 sm:leading-[57px] ${fontKohSantepheap.className}`}
              >
                {t("Email letter")}
              </h2>
              <p className={`text-[10px] sm:text-lg text-[#ecedee] ${fontKarma.className}`}>
                We’ll send to your address just in 1 minute
              </p>
              <EmailLatter setSent={setIsEmailSent} />
            </>
          )}
        </div>
      </div>

      {/*row2*/}
      <div className="flex mt-6 mb-[34px] gap-[33px] w-full max-w-[965px] lg:max-w-[1280px] flex-col lg:flex-row ">
        <SectionContentWrapper classStyles="flex flex-col justify-between max-sm:max-w-[350px] w-full max-w-[965px] lg:max-w-[405px] p-5 sm:p-[60px] sm:pr-[40px] sm:pb-[40px] min-h-[358px] sm:min-h-[414px]">
          {isTextMessageSent ? (
            <>
              <div>
              <h2
                className={`text-[40px] font-black mb-[22px] leading-[57px] ${fontKohSantepheap.className}`}
              >
                {t("Text message")}
              </h2>
              <p className={`text-lg w-full max-w-[325px] ${fontKarma.className}`}>
                Message sent
              </p>
              </div>
              <div className="relative mt-4">
                <Image
                  src={mail}
                  alt="img"
                  width={320}
                  className="absolute left-[-45px] bottom-[-40px]"
                />
              </div>
            </>
          ) : (
            <>
            <div>
              <h2
                className={`text-[40px] font-black mb-[22px] leading-[57px] ${fontKohSantepheap.className}`}
              >
                {t("Text message")}
              </h2>
              <p className={`text-lg w-full ${fontKarma.className}`}>
                Just put your number below and see what happens
              </p>
            </div>
              <TextMessage setSent={setIsTextMessageSent} />
            </>
          )}
        </SectionContentWrapper>

        <SectionContentWrapper classStyles="flex flex-col justify-between max-sm:max-w-[350px] lg:max-w-[405px] p-5 sm:p-[60px] sm:pr-[40px] sm:pb-[40px] max-sm:py-[50px] sm:min-h-[414px]">
          {isVoiceMessageSent ? (
            <>
              <h2
                className={`text-[40px] font-black mb-[22px] leading-[57px] ${fontKohSantepheap.className}`}
              >
                {t("Voice message")}
              </h2>
              <p className={`text-lg w-full ${fontKarma.className}`}>
                Voice was send, check your phone
              </p>
              <div className="mt-8">
                <Image src={voice} alt="img" width={240} />
              </div>
            </>
          ) : (
            <>
              <div>
              <h2
                className={`text-[40px] font-black mb-[22px] leading-[57px] ${fontKohSantepheap.className}`}
              >
                {t("Voice message")}
              </h2>
              <p className={`text-lg w-full  ${fontKarma.className}`}>
                Now let’s try the voice message, change the number or use the
                same
              </p>
              </div>
              <TextMessage setSent={setIsVoiceMessageSent} />
            </>
          )}
        </SectionContentWrapper>

        <SectionContentWrapper classStyles="flex flex-col justify-between dark:bg-[#FFDD33] max-sm:max-w-[350px] lg:max-w-[405px] p-5 sm:p-[60px] sm:pr-[40px] sm:pb-[40px] sm:min-h-[414px]">
          {isAICall ? (
            <>
              <h2
                className={`text-lg leading-6 sm:text-[40px] font-black text-black mb-[22px] sm:leading-none ${fontKohSantepheap.className}`}
              >
                {t("AI Assistant’s call")}
              </h2>
              <p
                className={`text-lg text-black w-full ${fontKarma.className}`}
              >
                Check your phone right now
              </p>

              <div className="logo-container">
                <PhoneDemo />
              </div>
            </>
          ) : (
            <>
              <div>
              <h2
                className={`text-[40px] font-black text-black mb-[22px] leading-none ${fontKohSantepheap.className}`}
              >
                {t("AI Assistant’s call")}
              </h2>
              <p
                className={`text-lg text-black w-full ${fontKarma.className}`}
              >
                Try the best of Ai technology
              </p>
              </div>
              <TextMessage setSent={setIsAICall} aiCall />
            </>
          )}
        </SectionContentWrapper>
      </div>

      <SectionContentWrapper classStyles="max-sm:max-w-[350px] max-w-[1280px] p-5 sm:px-[86px]">
        {isAICall ? (
          <div className="flex gap-5 sm:gap-[86px] max-[780px]:items-center">
            <div className="min-w-[100px]">
              <Image
                src={clientProf}
                alt="img"
                width={325}
                className="min-w-[100px]"
              />
            </div>
            <div className="flex flex-row gap-5 justify-center py-[50px]">
              <div className="flex flex-col">
                <h2
                  className={`text-lg sm:text-[40px] font-black mb-[22px] leading-6 sm:leading-none ${fontKohSantepheap.className}`}
                >
                  {t("Client profile")}
                </h2>
                <p className={`text-[10px] sm:text-lg w-[194px] sm:w-[325px] ${fontKarma.className}`}>
                  Here you will see data for checking identity verification
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row gap-5 justify-center">
            <div className="flex flex-col items-center">
              <BlockTitleTemplate titleText={t("We are collecting data...")} />
              <Image src={clientProf} alt="img" width={240} />
            </div>
          </div>
        )}
      </SectionContentWrapper>

      <ToastContainer theme={theme === "dark" ? "dark" : "light"} />
    </>
  );
}
