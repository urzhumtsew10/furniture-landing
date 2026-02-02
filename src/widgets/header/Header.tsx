"use client";

import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Container } from "@/shared";
import { COMPANY_NAME } from "@/app/constans";
import { NAVIGATION_LIST } from "./constants";
import Link from "next/link";

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 900);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-2 top-0 w-full transition-all duration-300 flex justify-center ${scrolled && "fixed backdrop-blur-md bg-dark"}`}
    >
      <Container className="p-5 md:py-12 flex items-center justify-between">
        <h3
          className={`font-bold text-[28px] transition-all duration-300 ${scrolled ? "text-gray" : "text-white"}`}
        >
          {COMPANY_NAME}
        </h3>
        <ul className="hidden md:flex items-center justify-between w-120">
          {NAVIGATION_LIST.map(({ id, text, link }) => (
            <Link
              key={id}
              href={link}
              className={`font-medium text-lg transition-all duration-300 ${scrolled ? "text-gray" : "text-white"}`}
            >
              {text}
            </Link>
          ))}
        </ul>
        <div className="flex">
          <div className="relative flex items-center cursor-pointer">
            <ShoppingBag
              size={34}
              className={`transition-all duration-300 ${scrolled ? "text-gray" : "text-white"}`}
            />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-sm rounded-3xl h-5 w-5 p-2 flex items-center justify-center">
              0
            </span>
          </div>
          <Menu
            onClick={() => setIsOpenedMenu(true)}
            size={34}
            className={`${scrolled ? "text-gray" : "text-white"} block md:hidden ms-3 cursor-pointer`}
          />
        </div>
      </Container>
      <div
        className={`block md:hidden fixed top-0 z-10 w-full h-screen bg-primary transform transition-all duration-800 ease-in-out ${isOpenedMenu ? "translate-x-0 [border-top-left-radius:0px] [border-bottom-left-radius:0px]" : "translate-x-full [border-top-left-radius:130px] [border-bottom-left-radius:300px]"}`}
      >
        <Container className="p-5 md:py-12 h-full">
          <div className="flex items-center">
            <X
              onClick={() => setIsOpenedMenu(false)}
              size={34}
              className="text-white absolute cursor-pointer"
            />
            <h3
              className={`font-bold w-full text-center text-[28px] transition-all duration-300 text-white`}
            >
              {COMPANY_NAME}
            </h3>
          </div>
          <ul className="flex flex-col gap-7 items-center justify-center h-full">
            {NAVIGATION_LIST.map(({ id, text, link }, i) => (
              <a
                key={id}
                href={link}
                className={`text-3xl font-bold transition-all duration-300 text-white ${isOpenedMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: `${i * 300}ms` }}
              >
                {text}
              </a>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};
