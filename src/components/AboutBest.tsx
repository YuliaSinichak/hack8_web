import { press_start } from "@/app/fonts"
import Image from "next/image"

export default function AboutBest(){
    return(
        <section className="min-h-screen flex flex-col justify-center items-center xl:items-start xl:justify-start w-full py-20 relative z-10">
            <div className={`${press_start.className} text-center xl:text-left text-2xl lg:text-4xl flex flex-col self-center xl:self-start gap- lg:gap-5 px-10`}>
                <h1 className="text-hack-green">Організатор проєкту:</h1>
                <h1 className="flex self-center xl:self-end lg:px-20">BEST Lviv</h1>
            </div>
            <div className="bg-black border xl:border-l-0 rounded-xl xl:rounded-l-0 p-3 px-4 lg:px-8 xl:pl-0 max-w-2xl my-10 z-10 mx-7 xl:mx-0">
                <div className=" bg-hack-dark-green rounded-xl xl:rounded-l-0 flex flex-col gap-5 p-8 px-5 lg:px-10 text-sm lg:text-lg">
                    <p>
                        <span className="text-hack-green">BEST (Board of European Students of Technology) або Рада студентів технічних університетів</span> – 
                        неприбуткова, неполітична та нерелігійна організація, яка представлена у 86 осередках 
                        30 країн світу. З 1989 року BEST забезпечує обмін знаннями та співробітництво між студентами,
                        компаніями та університетами на теренах Європи.
                    </p>
                    <p>
                        BEST Lviv діє при Національному університеті "Львівська політехніка".
                    </p>
                </div>
            </div>
            <Image
                src="/AboutTeam.png"
                width={600}
                height={600}
                alt=" "
                className="xl:absolute top-44 right-12 pointer-events-none z-0"
            />

        </section>
    )
}