"use client"
import { press_start } from "@/app/fonts"
import useSmoothScrollTo from "@/hooks/useSmothScrollTo"
import CodeRunReverse from "./CodeRunEffectReverse"
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image"
import Drawer from "./Drawer"
import { useState } from "react";



type MenuItem = {
    name: string;
    href: string;
};

const navigation: MenuItem[] = [
    {
      name: "Про нас",
      href: "#about",
    },
    {
      name: "Пропозиції",
      href: "#about",
    },
    {
      name: "Контакти",
      href: "#about",
    },
];

export default function Hero(){
    const handleScrollClick = useSmoothScrollTo();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const redirectToSite = () => {
      window.location.href = 'https://t.me/Hackath0n8_bot';
    };

    return(
        <section className="relative min-h-screen w-full flex items-start justify-center pt-32" >
            <div className="grid gap-5 justify-center z-10 px-8">
                
                <div className={`relative border border-white bg-black rounded-xl p-3 md:px-5 justify-center flex`}>
                    <Image
                        src="/HeroLine.svg"
                        width={80}
                        height={80}
                        alt=" "
                        className="absolute hidden md:flex -right-20 z-0"
                    />
                    <Image
                        src="/BlackBenya.png"
                        width={100}
                        height={100}
                        alt=" "
                        className="absolute hidden md:flex -right-28 top-48 z-0 "
                    />
                    <button
                        className={`${press_start.className} text-white text-lg px-16 md:px-20 py-3 w-full flex flex-row gap-2 items-center justify-center  hover:scale-105 duration-500`}
                        onClick={redirectToSite}
                     >
                        Реєстрація_
                        <span>
                        <Image
                            src="/smallArrow.svg"
                            width={25}
                            height={25}
                            alt=" "
                            className=""
                        />
                        </span>
                    </button>
                    <Image
                        src="/BenyaBest.png"
                        width={120}
                        height={120}
                        alt=" "
                        className="absolute -top-28 self-center pointer-events-none rotate-and-bounce"
                    />
                </div>
                <div className={`relative border border-white bg-black rounded-xl p-3 md:px-5 justify-center flex `}>
                    <button
                        className={`${press_start.className} text-white text-lg px-16 md:px-20 py-3 w-full flex flex-row gap-2 items-center justify-center hover:scale-105 duration-500 `}
                        onClick={() => handleScrollClick("#contacts")}
                    >
                        Стати партнером
                    </button>
                </div>
                <div className={`relative border border-white bg-black rounded-xl p-3 md:px-5 justify-center flex`}>
                    <button
                        className={`${press_start.className} text-white text-lg px-16 md:px-20 py-3 w-full flex flex-row gap-2 items-center justify-center hover:scale-105 duration-500`}
                     >
                        Comming soon...
                    </button>
                </div>
            </div>
            <Image
                src="/Ellipse.svg"
                width={120}
                height={120}
                alt=" "
                className="absolute -top-32 w-full self-center pointer-events-none z-0"
            />
            <Image
                src="/Purple Ellipse.png"
                width={1200}
                height={1200}
                alt=" "
                className="absolute -top-32 self-center pointer-events-none z-0"
            />
            <Image
                src="/Bubbles.png"
                width={400}
                height={400}
                alt=" "
                className="absolute -top-20 self-center pointer-events-none z-10 levitate-bubbles2"
            />
            <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute blur-lg xl:blur-none opacity-30 -top-32 right-32 levitate-bubbles1 z-0"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="absolute blur-xs xl:blur-none  opacity-30 -top-32 right-32 levitate-bubbles2 z-0"
            />
            <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute blur-lg xl:blur-none opacity-30 bottom-48 left-4 levitate-bubbles1 z-0"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="absolute blur-xs xl:blur-none opacity-30  bottom-48 left-8 levitate-bubbles2 z-0"
            />
            <Image
                src="/Arrow.svg"
                width={40}
                height={40}
                alt=" "
                className="absolute bottom-40 animate-bounce z-20"
                onClick={() => handleScrollClick("#about")}
            />
            <div className="hidden lg:flex absolute bottom-20 right-0">
            <CodeRunReverse />
            </div>
        </section>
    )
}