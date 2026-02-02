import { AnimatedLink } from "@/entities/animated-link";
import { SectionTitle } from "@/shared";
import Image from "next/image";
import React from "react";

export const Materials = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[1920px] flex flex-col-reverse lg:flex-row justify-between gap-[24px] pb-[64px] lg:pb-[240px] px-[12px] lg:pl-[80px] lg:pr-0">
        <div className="lg:w-[690px] lg:pt-[124px]">
          <p className="text-primary font-bold text-lg">Materials</p>
          <SectionTitle text="Very Serious Materials For Making Furniture" className="mb-[20px]" />
          <p className="text-lg text-dark-black font-light lg:w-[80%] mb-[24px]">
            Because panto was very serious about designing furniture for our environment, using a
            very expensive and famous capital but at a relatively low price
          </p>
          <AnimatedLink text="More Info" link="#" />
        </div>
        <div className="flex-col-reverse lg:flex-row lg:max-w-4xl flex gap-4">
          <div className="w-full lg:w-auto flex flex-col gap-4 self-end">
            <div className="relative w-full lg:w-56 h-48 rounded-lg overflow-hidden">
              <Image
                src="/assets/materials-3.webp"
                alt="Modern Chairs and Table"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-48 lg:w-56 lg:h-72 rounded-lg overflow-hidden">
              <Image
                src="/assets/materials-2.webp"
                alt="Sofa in Living Room"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative w-full h-48 lg:w-111 lg:h-[75%] self-end rounded-xl lg:rounded-r-none lg:rounded-l-xl overflow-hidden">
            <Image
              src="/assets/materials-1.webp"
              alt="Dining Room Table and Chairs"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
