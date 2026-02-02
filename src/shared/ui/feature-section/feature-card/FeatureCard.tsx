import React from "react";
import { AnimatedLink } from "@/entities/animated-link";

type Props = {
  title: string;
  text: string;
  link: string;
};

export const FeatureCard = ({ title, text, link }: Props) => {
  return (
    <li className="md:w-2xs">
      <h4 className="text-2xl font-bold text-dark-black mb-[20px]">{title}</h4>
      <p className="text-dark-black text-base font-thin mb-[14px]">{text}</p>
      <AnimatedLink text="More Info" link={link} />
    </li>
  );
};
