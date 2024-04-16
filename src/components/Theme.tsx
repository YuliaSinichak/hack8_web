import { press_start } from "@/app/fonts"
import Image from "next/image"
import CodeRun from "./CodeRunEffect"
import CodeRunReverse from "./CodeRunEffectReverse"

export default function Theme(){
    return(
        <section className="relative w-full min-h-screen z-10" id='theme'>
            <div className="hidden lg:flex absolute z-0">
                <CodeRun />
            </div>
            <div className="flex flex-col lg:flex-row gap-10 mb-10 lg:mx-20 lg:absolute -left-40 xl:-left-48 top-12 z-10 w-full items-center lg:items-start justify-center lg:justify-end">
                <div className={`${press_start.className} text-center lg:text-left text-xl lg:text-3xl text-hack-green max-w-md gap-3`}>
                        <p>
                        Тема:
                        </p>
                        <p className="text-white">
                         Military (військова)
                        </p>
                </div>
                <div className="flex border bg-black rounded-xl p-3 items-center max-w-sm mt-3 lg:mt-10 lg:relative">
                    <Image
                        src="/BenyaTheme.png"
                        width={150}
                        height={150}
                        alt=" "
                        className="hidden lg:flex absolute -top-28 -left-8 pointer-events-none levitate-bubbles2"
                    />   
                    <div className=" text-white font-semibold rounded-xl p-5 py-5 lg:py-7 text-left text-md hover:scale-102 duration-500 flex flex-col">
                            <p className="text-hack-green text-2xl">
                            На меті учасників –
                            </p>
                            <p>
                            створення MVP (Minimal Viable Product) інноваційної онлайн-платформи, яка стане в нагоді
                            у цей непростий час для допомоги військовим/цивільним на окупованих територіях.
                            </p>
                    </div>
                    <Image
                    src="/Theme.png"
                    width={500}
                    height={500}
                    alt=" "
                    className="hidden lg:flex absolute -bottom-80 -left-72 pointer-events-none w-48"
                    />   
                     
                    <Image
                    src="/TalkBubble.png"
                    width={500}
                    height={500}
                    alt=" "
                    className="hidden lg:flex absolute -bottom-40 -left-16 pointer-events-none w-24 "
                    />   
                    <Image
                        src="/BubbleDraw.png"
                        width={60}
                        height={60}
                        alt=" "
                        className="hidden xl:flex absolute levitate-bubbles1 left-24 -bottom-32 z-30"
                    />
                    <Image
                        src="/BubbleDraw.png"
                        width={40}
                        height={40}
                        alt=" "
                        className="hidden xl:flex absolute levitate-bubbles2 -left-40 -top-8 z-30"
                    />
                </div>
                <Image
                    src="/Theme.png"
                    width={500}
                    height={500}
                    alt=" "
                    className="flex lg:hidden self-center w-48"
                    />  
            </div>
            <Image
                    src="/MentorTheme.png"
                    width={500}
                    height={500}
                    alt=" "
                    className="hidden xl:flex absolute bottom-40 left-24 pointer-events-none w-96 z-20"
            />   
           
            <Image
                    src="/Circle.png"
                    width={1000}
                    height={1000}
                    alt=" "
                    className="hidden xl:flex absolute -bottom-72 -left-64 pointer-events-none z-0"
            />   
            <Image
                src="/BubbleDraw.png"
                width={60}
                height={60}
                alt=" "
                className="hidden xl:flex absolute levitate-bubbles1 right-8 top-32 z-30"
            />
            <Image
                src="/BubbleDraw.png"
                width={60}
                height={60}
                alt=" "
                className="hidden xl:flex absolute levitate-bubbles2 right-20 top-48 z-30"
            />
            <Image
                src="/BubbleDraw.png"
                width={40}
                height={40}
                alt=" "
                className="hidden xl:flex absolute levitate-bubbles1 left-24 top-48 z-30"
            />
            
            <div className="hidden lg:flex absolute bottom-0 right-0">
            <CodeRunReverse />
            </div>
            <Image
                    src="/ThemeGradient.png"
                    width={750}
                    height={750}
                    alt=" "
                    className="hidden xl:flex absolute -bottom-32 left-0 pointer-events-none z-10"
            />   
             <Image
                    src="/DualGradient.png"
                    width={750}
                    height={750}
                    alt=" "
                    className="hidden lg:flex absolute -bottom-32 right-80 pointer-events-none"
                    /> 
        </section>
    )
}