import { useState, useEffect } from "react";
import { useBreakpoint } from "@/shared";
import { ItemsShown } from "@/entities/carousel/model/types";

export const useCarousel = (length: number, itemsShown: ItemsShown) => {
  const breakpoint = useBreakpoint();
  const visibleItems = itemsShown[breakpoint];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [visibleItems]);

  const next = () => {
    setIndex((prev) => Math.min(prev + visibleItems, length - visibleItems));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - visibleItems, 0));
  };

  return {
    index,
    visibleItems,
    next,
    prev,
  };
};
