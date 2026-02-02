import React from "react";
import Image from "next/image";
import { AnimatedLink } from "@/entities/animated-link";
import { SectionTitle } from "@/shared";

export const Experience = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[1920px] gap-[24px] flex flex-col lg:flex-row justify-between py-[64px] px-[12px] lg:px-0 md:pt-[306px] md:pb-[270px]">
        <picture>
          <source srcSet="/assets/experience-room.webp" type="image/webp" />
          <Image
            src="/assets/experience-room.jpg"
            className="w-full lg:w-[629px] rounded-l-3xl lg:rounded-l-none rounded-r-3xl"
            width={629}
            height={445}
            alt="Room Image"
            loading="lazy"
          />
        </picture>
        <div className="lg:w-[690px] lg:pt-[17px]">
          <p className="text-primary font-bold text-lg">Experiences</p>
          <SectionTitle text="We Provide You The Best Experience" className="mb-[20px]" />
          <p className="text-lg text-dark-black font-light lg:w-[80%] mb-[24px]">
            You don’t have to worry about the result because all of these interiors are made by
            people who are professionals in their fields with an elegant and lucurious style and
            with premium quality materials
          </p>
          <AnimatedLink text="More Info" link="#" />
        </div>
      </div>
    </section>
  );
};
