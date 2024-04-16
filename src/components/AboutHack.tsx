import { press_start } from "@/app/fonts"
import Image from "next/image"

export default function AboutHack(){
    return(
        <section className= "min-h-screen max-w-9xl w-full flex flex-col items-center xl:items-start my-10 lg:my-20 px-5 lg:px-20 relative" id='about'>
            <h1 className={`${press_start.className} text-hack-green text-center text-xl lg:text-4xl py-10`}>BEST::HACKath0n 2024</h1>
            <div className="flex flex-row">
                <div className="grid grid-flow-row gap-5 lg:gap-10 max-w-lg items-center relative">
                    <Image
                        src="/Line.png"
                        width={500}
                        height={500}
                        alt=" "
                        className="xl:hidden flex absolute w-auto z-0 pointer-events-none opacity-30"
                    />
                    <Image
                        src="/BubbleDraw.png"
                        width={40}
                        height={40}
                        alt=" "
                        className="hidden lg:flex absolute levitate-bubbles1 -top-4 -right-80 z-40"
                    />
                    <Image
                        src="/BubbleDraw.png"
                        width={80}
                        height={80}
                        alt=" "
                        className="hidden lg:flex absolute levitate-bubbles2 -top-8 -right-72 z-40"
                    />
                    <Image
                        src="/BubbleDraw.png"
                        width={40}
                        height={40}
                        alt=" "
                        className="hidden lg:flex absolute levitate-bubbles1 bottom-24 -right-36 z-40"
                    />
                    <Image
                        src="/BubbleDraw.png"
                        width={60}
                        height={60}
                        alt=" "
                        className="hidden lg:flex absolute levitate-bubbles2 -bottom-8 -right-24 z-40"
                    />
                    <div className="border rounded-xl bg-black px-10 p-3 z-10">
                        <div className="font-semibold p-5 text-left hover:scale-102 duration-500 text-sm lg:text-xl text-white">
                        <span className="text-hack-green pr-1 texl-xl relative">
                            <Image
                                src="/Arrow.svg"
                                width={20}
                                height={20}
                                alt=" "
                                className="absolute animate-bounce left-8 -top-4"
                            />
                            Hackathon 
                            </span>
                             - це захід, на який збираються розробники, дизайнери, інженери, 
                            щоб за обмежений час в режимі інтенсиву та командної роботи, створити та 
                            презентувати свій проект
                        </div>
                    </div>
                    <div className="border rounded-xl bg-black px-10 p-3 z-10">
                        <div className=" font-extrabold p-5 text-center text-white hover:scale-102 duration-500 text-sm lg:text-xl">
                            11-12 травня
                        </div>
                    </div>
                    <div className="border rounded-xl bg-black px-10 p-3 z-10">
                        <div className=" font-extrabold p-5 text-center text-white hover:scale-102 duration-500 text-sm lg:text-xl">
                            offline
                        </div>
                    </div>
                    <div className="border rounded-xl bg-black px-10 p-3 z-10">
                        <div className=" font-extrabold p-5 text-center text-white hover:scale-102 duration-500 text-sm lg:text-xl">
                            15 команд (3-5 осіб)
                        </div>
                    </div>
                </div>
                <Image
                        src="/Circle.png"
                        width={1500}
                        height={1500}
                        alt=" "
                        className="hidden xl:flex absolute -top-96 -right-64 z-0 pointer-events-none"
                />
                <Image
                        src="/AboutHackGradient.png"
                        width={500}
                        height={500}
                        alt=" "
                        className="hidden xl:flex absolute top-24 right-36 z-10 pointer-events-none animate-pulse"
                />
                <Image
                        src="/AboutHack.png"
                        width={350}
                        height={350}
                        alt=" "
                        className="hidden xl:flex absolute top-40 right-56 z-20"
                />
                <Image
                        src="/BubbleDraw.png"
                        width={60}
                        height={60}
                        alt=" "
                        className="hidden lg:flex absolute levitate-bubbles2 top-24 left-12 z-40"
                    />
                    
                    
            </div>
        </section>
    )
}