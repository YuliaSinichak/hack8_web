import { press_start } from "@/app/fonts"
import Image from "next/image"
import CodeRun from "./CodeRunEffect"

export default function AboutBest(){
    return(
        <section className="min-h-screen flex flex-col justify-center items-center xl:items-start xl:justify-start w-full py-20 relative z-10">
            <div className="absolute left-0 top-24 z-0 pointer-events-none">
            <CodeRun />
            </div>
            <div className={`${press_start.className} text-center xl:text-right text-2xl lg:text-4xl flex flex-col self-center xl:self-end py-20 lg:gap-5 px-10 z-10`}>
                <h1 className="text-hack-green">Організатор проєкту:</h1>
                <h1 className="flex self-center text-white xl:self-end lg:px-20">BEST Lviv</h1>
            </div>
            <div className="bg-black border rounded-xl p-3 px-2 lg:px-8 xl:pl-0 max-w-2xl my-10 z-10 mx-7 font-semibold">
                <div className="relative rounded-xl text-white flex flex-col gap-5 p-8 px-5 lg:px-10 text-xs lg:text-lg">
                    <p>
                        <span className="text-hack-green">BEST (Board of European Students of Technology) або Рада студентів технічних університетів</span> – 
                        неприбуткова організація, яка представлена у 86 осередках 
                        30 країн світу. З 1989 року BEST забезпечує обмін знаннями та співробітництво між студентами,
                        компаніями та університетами на теренах Європи.
                    </p>
                    <p>
                        BEST Lviv діє при Національному університеті "Львівська політехніка".
                    </p>
                    <Image
                    src="/BenyaBest2.png"
                    width={150}
                    height={150}
                    alt=" "
                    className="absolute -top-36 left-0 pointer-events-none z-0 levitate-bubbles1"
                    />
                </div>
                
            </div>
            <Image
                src="/AboutTeam.png"
                width={600}
                height={600}
                alt=" "
                className="xl:absolute top-80 right-12 pointer-events-none z-0"
            />

        </section>
    )
}