import React from "react";
import { Search } from "lucide-react";
import { Container } from "@/shared";

export const Hero = () => {
  return (
    <section className="h-full flex justify-center">
      <Container className="flex flex-col items-center pt-20 md:pt-0">
        <div className="absolute bottom-0 left-0 right-0 h-25 bg-gradient-to-t from-white/100 to-transparent" />
        <h1 className="text-white text-center capitalize font-black text-4xl md:text-[64px] xl:text-[80px] max-w-xl md:max-w-full xl:w-5xl mb-9">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-center text-white text-base md:text-2xl font-thin max-w-md md:max-w-full md:w-2xl mb-9">
          Turn your room with panto into a lot more minimalist and modern with ease and speed
        </p>
        <div className="flex items-center justify-between p-3 md:py-4 md:px-5 rounded-[42px] border border-white bg-white/15 backdrop-blur-md">
          <input
            className="placeholder:text-white placeholder:text-lg placeholder:font-light text-white text-lg w-3xs md:w-sm outline-none"
            type="text"
            placeholder="Search furniture"
          />
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
            <Search className="text-white" size={18} />
          </div>
        </div>
      </Container>
    </section>
  );
};
