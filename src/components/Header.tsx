"use client";
import { press_start } from "@/app/fonts";
import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import useSmoothScrollTo from "@/hooks/useSmothScrollTo";
import Drawer from "./Drawer";

type MenuItem = {
  name: string;
  href: string;
};

const navigation: MenuItem[] = [
  {
    name: "Про проєкт",
    href: "#about",
  },
  {
    name: "Тема",
    href: "#theme",
  },
  {
    name: "Команда",
    href: "#team",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollClick = useSmoothScrollTo();

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="z-50 w-full flex justify-between py-5 px-8 md:px-16 items-center align-middle"
    >
      <div
        onClick={() => {
          handleScrollClick("#about");
        }}
        className="logo cursor-pointer relative z-20 flex align-middle gap-3 md:top-0 top-[0.8vw]"
      >
        <Image
          src="/HackLogo.svg"
          alt="logo"
          height={40}
          width={40}
          className=" "
        />
      </div>
      <Dialog.Root>
        <div className=" ">
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="-m-2.5 relative z-10 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
              onClick={() => setMobileMenuOpen(true)}
            >
            <Image
                src="/Burger.svg"
                alt=" "
                height={40}
                width={40}
                className=""
            />
            </button>
          </Dialog.Trigger>
        </div>
        <Drawer
          setMobileMenuOpen={setMobileMenuOpen}
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
        />
      </Dialog.Root>
    </motion.header>
  );
}
