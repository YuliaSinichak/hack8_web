import { press_start } from "@/app/fonts"
import CodeRun from "./CodeRunEffect"
import Image from "next/image"

export default function Portrait(){
    return(
        <section className=" relative w-full my-20">
            <Image
                src="/BubblesPart1.png"
                width={600}
                height={600}
                alt=" "
                className="flex xl:hidden absolute blur-lg xl:blur-none top-24 opacity-30 levitate-bubbles1 z-0 w-full"
            />
            <Image
                src="/BubblesPart2.png"
                width={600}
                height={600}
                alt=" "
                className="flex xl:hidden absolute blur-xs xl:blur-none top-24 opacity-30 self-center levitate-bubbles2 z-0 w-full"
            />
            
            <div className="flex flex-col xl:flex-row px-10 lg:px-20 gap-5 xl:gap-16 items-center xl:items-start z-10">
                <h1 className={`${press_start.className} text-3xl max-w-xs xl:ml-80 text-center text-white xl:text-left`}>Портрет учасника</h1>
                <div className=" xl:-rotate-90">
                <Image
                    src="/DrawArrow.svg"
                    width={110}
                    height={110}
                    alt=" "
                    className="flex self-center py-5 animate-bounce"
                />
                </div>
                <div className="border bg-black rounded-xl p-3 flex items-center max-w-sm mt-3 lg:mt-10 relative">
                    <div className=" bg-hack-dark-green text-white rounded-xl p-5 py-12 text-lg text-center flex items-center  hover:scale-102 duration-500">
                        <p>
                            Для креативної та ініціативної молоді, що зацікавлена розвиватись в IT
                        </p>
                    </div>
                    <Image
                        src="/BubbleDraw.png"
                        width={60}
                        height={60}
                        alt=" "
                        className="absolute levitate-bubbles2 -left-8 -top-8 xl:-left-32 xl:-top-40"
                    />
                    <Image
                        src="/BubbleDraw.png"
                        width={40}
                        height={40}
                        alt=" "
                        className="absolute levitate-bubbles1 -left-12 -top-12 xl:-left-24 xl:-top-24"
                    />
                    <Image
                        src="/BubbleDraw.png"
                        width={40}
                        height={40}
                        alt=" "
                        className="absolute levitate-bubbles2 -right-16 -bottom-12 xl:-left-24 xl:-bottom-24"
                    />
                    <Image
                        src="/BubbleDraw.png"
                        width={60}
                        height={60}
                        alt=" "
                        className="hidden xl:flex absolute levitate-bubbles2 xl:-left-96 xl:-bottom-64"
                    />
                    
                </div>
            </div>
            <Image
                src="/Portrait.png"
                width={700}
                height={700}
                alt=" "
                className="hidden xl:flex absolute top-12 left-20 pointer-events-none"
            />
            <Image
                src="/EllipsePortrait.png"
                width={900}
                height={900}
                alt=" "
                className="hidden xl:flex absolute -top-52 right-0 pointer-events-none"
            />
            <Image
                src="/BubbleDraw.png"
                width={60}
                height={60}
                alt=" "
                className="hidden xl:flex absolute levitate-bubbles1 right-8 top-32"
            />
             
        </section>
    )
}