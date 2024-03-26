import { press_start } from "@/app/fonts";
import Image from "next/image";

const partnersData = [
  {
    imgSrc: "/partners/LionWood.svg",
    alt: "LionWood",
  },
  {
    imgSrc: "/partners/VRCube.svg",
    alt: "VRCube",
  },
  {
    imgSrc: "/partners/Harvest.svg",
    alt: "Harvest",
  },
  {
    imgSrc: "/partners/Vidro.svg",
    alt: "Vidro",
  },
  {
    imgSrc: "/partners/Lucas.svg",
    alt: "Lucas",
  },
  {
    imgSrc: "/partners/IloveKebab.svg",
    alt: "IloveKebab",
  },
  {
    imgSrc: "/partners/Chipsters.svg",
    alt: "Chipsters",
  },
  {
    imgSrc: "/partners/CopyBoom.svg",
    alt: "CopyBoom",
  },
  {
    imgSrc: "/partners/Hobby.svg",
    alt: "HobbyMonster",
  },
  {
    imgSrc: "/partners/EcoSfera.svg",
    alt: "EcoSfera",
  },
  {
    imgSrc: "/partners/Salalat.svg",
    alt: "Salalat",
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
            <div className="rounded-xl bg-gray-300 p-3">
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
    <section className="min-h-screen flex flex-col items-center justify-center py-10 lg:py-20 w-full px-6 mx-auto gap-8 lg:gap-14 mt-20">
      <h2
        className={`${press_start.className} text-hack-green text-2xl lg:text-4xl my-2 text-center`}
      >
        За підтримки
      </h2>

      <div className="gap-10 flex flex-wrap w-full justify-center">
        {partnersData.map((p, index) => (
          <Partner imgSrc={p.imgSrc} alt={p.alt} />
        ))}
      </div>
    </section>
  );
}