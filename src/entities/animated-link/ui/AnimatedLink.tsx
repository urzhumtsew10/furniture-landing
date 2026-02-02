import React from "react";
import Link from "next/link";
import { ArrowRight, TEXT_COLOR_CLASSES, TEXT_SIZE_CLASSES } from "@/shared";

type Props = {
  text: string;
  link: string;
  variant?: "primary" | "secondary";
  textSize?: "sm" | "lg";
};

export const AnimatedLink = ({ text, link, variant = "primary", textSize = "sm" }: Props) => {
  return (
    <Link href={link} className="group flex items-center w-fit">
      <p className={`${TEXT_COLOR_CLASSES[variant]} me-[12px] ${TEXT_SIZE_CLASSES[textSize]}`}>
        {text}
      </p>{" "}
      <ArrowRight
        className={`${TEXT_COLOR_CLASSES[variant]} font-light transform transition-all duration-300 ease-in-out group-hover:translate-x-[10px]`}
      />
    </Link>
  );
};
