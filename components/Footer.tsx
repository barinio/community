import React from 'react';
import NextLink from "next/link";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import Image from "next/image";
import {Link} from "@nextui-org/link";

import {InboxIcon, Logo} from "@/components/icons";
import {siteConfig} from "@/config/site";

const Footer = () => {

    const FooterOtherLinks = [
        {
            label:"Politique de confidentialite",
            href: '#',
        },{
            label: "Contact",
            href: '#',
        },
        ]

    return (
        <>
        <div className="bg-[#171717] w-11/12 p-20 rounded-[32px] ">
            <div className="first-footer border-b-2 border-[#667085] pb-20">
            <div className="bg-main-yellow flex justify-center items-center rounded-full w-[72px] h-[72px] mb-[66px]">
            <InboxIcon />
            </div>
            <div className="flex justify-between lg:flex-row flex-col gap-20 lg:gap-6">
                <div className="max-w-[535px]">
                    <h1 className="text-norm-white text-[50px] font-bold leading-[1.17] mb-5">Restez au courant des
                        dernières nouveautés</h1>
                    <p className="text-norm-white">Rejoignez notre newsletter pour rester informé des fonctionnalités et
                        des versions.</p>
                </div>

                <div className="max-w-[535px]">
                    <p className="text-norm-white mb-6">Restez à jour</p>

                    <div className="flex">
                        <Input radius="full"
                               type="email"
                               placeholder="Entrez votre courriel"
                               className="w-[300px] mr-[18px]"
                               isClearable
                               classNames={{
                                   input: [
                                       "bg-transparent",
                                       "text-white dark:text-white/90",
                                       "placeholder:text-white/60",
                                       "group-data-[has-value=true]:text-white"
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
                                   ]
                               }}


                        />

                        <Button radius="full" className="bg-main-yellow text-norm-gray w-[104px] h-[53px]">S'abonner</Button>
                    </div>

                </div>
                </div>
            </div>


            <div className="second-footer flex flex-col sm:flex-row justify-between mt-4 gap-12 sm:gap-6">
                <p className="text-[#BEBEBE]">CommUnité – Solutions d’avenir</p>

                <ul className="flex flex-col gap-[18px]">
                    <li><h4 className="text-norm-white font-bold">Company</h4></li>
                    {siteConfig.navItems.map(({label,href }) => <li key={label} className="text-[#BEBEBE]">
                        <Link href={href} className="text-sm text-[#BEBEBE]">{label}</Link>
                    </li>)}
                </ul>

                <ul className="flex flex-col gap-[18px]">
                    <li><h4 className="text-norm-white font-bold">Support</h4></li>


                    {FooterOtherLinks.map(({label,href }) => <li key={label} className="text-[#BEBEBE]">
                    <Link href={href} className="text-sm text-[#BEBEBE]">{label}</Link>
                    </li>)}
                </ul>
            </div>

            <NextLink className="flex justify-start items-center gap-3 mt-12 sm:mt-0" href="/">
                <Logo />
                <p className="font-bold text-norm-white text-2xl">CommUnité</p>
            </NextLink>
        </div>

            <div className="flex justify-center items-center gap-5 text-[#BEBEBE] py-9">
                <ul className="flex gap-1.5">
                    {siteConfig.links.map(({icon, link}) => <li key={link}>
                        <div
                            className="bg-main-yellow flex justify-center items-center rounded-full w-[44px] h-[44px]">
                            <Link
                                isExternal
                                href={link}
                            >
                                <Image
                                    src={icon}
                                    width={24}
                                    height={24}
                                    alt="Picture of the author"
                                    className="object-fill m-auto"
                                />
                            </Link>

                        </div>
                    </li>)}
                </ul>
            </div>
        </>
    );
};

export default Footer;