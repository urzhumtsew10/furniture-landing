import React from "react";
import { CategorySwitcher } from "@/features";
import { ProductCarousel } from "@/entities/product";
import { AnimatedLink } from "@/entities/animated-link";
import { BEST_SELLING_PRODUCTS, Container, PRODUCTS_CATEGORIES, SectionTitle } from "@/shared";

export const BestSelling = () => {
  return (
    <section className="flex justify-center bg-gray-dimmed">
      <Container className="flex flex-col items-center py-[32px] md:py-[50px]">
        <SectionTitle text="Best Selling Product" className="text-center mb-6 md:mb-8" />
        <CategorySwitcher categories={PRODUCTS_CATEGORIES} />
        <ProductCarousel products={BEST_SELLING_PRODUCTS} />
        <AnimatedLink text="View All" link="#" textSize="lg" />
      </Container>
    </section>
  );
};
