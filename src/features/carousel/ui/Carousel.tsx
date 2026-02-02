"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCarousel } from "../lib/useCarousel";
import { ItemsShown } from "@/entities/carousel/model/types";

type Props = {
  children: React.ReactNode[];
  itemsShown: ItemsShown;
  className?: string;
  gap?: number;
};

export const Carousel = ({ children, itemsShown, gap = 16, className = "" }: Props) => {
  const { index, visibleItems, next, prev } = useCarousel(children.length, itemsShown);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemWidth = 100 / visibleItems;

  return (
    <div className={`relative pb-1 mb-6 md:mb-[60px] w-[80%] md:w-[90%] ${className}`}>
      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex pb-1"
          animate={{ x: `-${index * itemWidth}%` }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="shrink-0"
              style={{ width: `${itemWidth}%`, padding: `0 ${gap / 2}px` }}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>
      <button
        onClick={prev}
        className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={next}
        className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
