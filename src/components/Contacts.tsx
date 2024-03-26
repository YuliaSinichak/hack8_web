import { press_start } from "@/app/fonts"
import Image from "next/image"


export default function Contacts(){
    return(
        <section className="relative min-h-screen py-20 flex justify-center xl:justify-start w-full px-8 xl:px-20" id="contacts">
            <div className="flex flex-col">
                <h1 className={`${press_start.className} flex self-center xl:self-start text-hack-green px-0 xl:px-40 text-3xl`}>Контакти</h1>
                <Image
                    src="/DrawArrow.svg"
                    width={70}
                    height={70}
                    alt=" "
                    className="flex self-center py-10 animate-bounce rotate-45"
                />
                <div className="grid grid-cols items-center text-center xl:text-left gap-5 px-0 xl:px-10 max-w-xl text-sm lg:text-2xl">
                <p className="text-white">Головна організаторка: 
                    <span className = {`lg:${press_start.className} text-hack-green hover:scale-102 duration-500`} > Таня Панчук</span> 
                </p>
                <p className="text-white">E-mail: 
                    <span className = {`lg:${press_start.className} text-hack-green hover:scale-102 duration-500`} > best.hackathon.partnership@gmail.com</span> 
                </p>
                <p className="text-white">Тел: 
                    <span className = {`lg:${press_start.className} text-hack-green hover:scale-102 duration-500`} > +380 97 807 73 97</span> 
                </p>
                <p className="text-white">Адреса: 
                    <span className = {`lg:${press_start.className} text-hack-green hover:scale-102 duration-500`} > Національний університет "Львівська політехніка"</span> 
                </p>
                </div>
            </div>
            <Image
                src="/Contacts.png"
                width={500}
                height={500}
                alt=" "
                className="hidden xl:flex absolute top-12 right-20"
            />
            <Image
                src="/Circle.png"
                width={600}
                height={600}
                alt=" "
                className="hidden xl:flex absolute top-12 right-24"
            />
        </section>
    )
}