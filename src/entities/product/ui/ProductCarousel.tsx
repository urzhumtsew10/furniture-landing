import { Carousel } from "@/features/carousel/ui/Carousel";
import React from "react";
import { ProductCard } from "./ProductCard";
import { IProduct } from "../model/types";

type Props = {
  products: IProduct[];
};

export const ProductCarousel = ({ products }: Props) => {
  return (
    <Carousel itemsShown={{ mobile: 1, tablet: 2, desktop: 4 }}>
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </Carousel>
  );
};
