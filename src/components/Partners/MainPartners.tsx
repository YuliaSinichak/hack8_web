import { press_start } from "@/app/fonts";
import Image from "next/image";

const partnersData = [
  {
    imgSrc: "/partners/soft.svg",
    alt: "softserve",
  },
  {
    imgSrc: "/partners/keenethics.svg",
    alt: "keenethics",
  },
  {
    imgSrc: "/partners/sombra.svg",
    alt: "Sombra",
  },
];

const Partner = ({
  imgSrc,
  alt,
}: {
  imgSrc: string;
  className?: string;
  alt: string;
}) => {
  return (
    <div className="border rounded-xl bg-black p-3 hover:scale-105 transition-all duration-500">
        <div className="rounded-xl bg-gray-500 p-3">
            <div className="rounded-xl bg-gray-300 p-3 relative z-30">
                <Image
                src={imgSrc}
                alt={alt}
                height={128}
                width={208}
                className="h-24"
                />
            </div>
        </div>
    </div>
  );
};

export default function MainPartners() {
  return (
    <section className="relative flex flex-col items-center justify-center max-w-7xl w-full py-10 lg:py-20 px-6 mx-auto gap-8 lg:gap-14 mt-30">
    
      <h2
        className={`${press_start.className} text-hack-green text-2xl lg:text-4xl my-2 text-center`}
      >
        Основні партнери
      </h2>
      <Image
          src="/BGEllipse.png"
          alt=" "
          height={1000}
          width={1000}
          className="absolute w-full -top-32 z-0 hidden md:flex"
      />
      <Image
          src="/Dots.png"
          alt=" "
          height={1000}
          width={1000}
          className="absolute w-full top-40 z-20 hidden md:flex px-40 pointer-events-none levitate-bubbles2"
      />
      <div className="gap-16 flex flex-wrap w-full justify-center z-10">
        {partnersData.map((p, index) => (
          <Partner imgSrc={p.imgSrc} alt={p.alt} />
        ))}
      </div>
    </section>
  );
}