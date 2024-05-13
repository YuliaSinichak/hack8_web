import { press_start } from "@/app/fonts";
import Image from "next/image";

const partnersData = [
  {
    imgSrc: "/partners/Bowls.svg",
    alt: "Bowls",
  },
  {
    imgSrc: "/partners/Donatello.svg",
    alt: "Donatello",
  },
  {
    imgSrc: "/partners/Harvest.svg",
    alt: "Harvest",
  },
  {
    imgSrc: "/partners/FilmCenter.svg",
    alt: "FilmCenter",
  },
  {
    imgSrc: "/partners/Hator.svg",
    alt: "Hator",
  },
  {
    imgSrc: "/partners/Logikum.svg",
    alt: "Logikum",
  },
  {
    imgSrc: "/partners/meleto.svg",
    alt: "meleto",
  },
  {
    imgSrc: "/partners/Sigma.svg",
    alt: "Sigma",
  },
  {
    imgSrc: "/partners/Hobby.svg",
    alt: "HobbyMonster",
  },
  {
    imgSrc: "/partners/Sova.svg",
    alt: "Sova",
  },
  {
    imgSrc: "/partners/Nonstop.svg",
    alt: "Nonstop",
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

export default function Support() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center py-10 lg:py-20 w-full px-6 mx-auto gap-8 lg:gap-14 mt-20">
      <Image
          src="/BGEllipse.png"
          alt=" "
          height={1000}
          width={1000}
          className="absolute w-full -top-0 z-0 hidden lg:flex"
      />
      <Image
          src="/Dots.png"
          alt=" "
          height={1000}
          width={1000}
          className="absolute w-full top-40 z-20 hidden lg:flex px-40 pointer-events-none levitate-bubbles2"
      />
      <Image
          src="/Dots.png"
          alt=" "
          height={1000}
          width={1000}
          className="absolute w-full left-12 top-80 z-20 hidden lg:flex px-40 pointer-events-none levitate-bubbles2"
      />
      <h2
        className={`${press_start.className} text-hack-green text-2xl lg:text-4xl my-2 text-center`}
      >
        За підтримки
      </h2>

      <div className="gap-10 flex flex-wrap w-full justify-center z-10">
        {partnersData.map((p, index) => (
          <Partner imgSrc={p.imgSrc} alt={p.alt} />
        ))}
      </div>
    </section>
  );
}