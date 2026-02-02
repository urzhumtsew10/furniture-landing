import React from "react";
import { ReviewCarousel } from "@/entities/review";
import { Container, REVIEWS_LIST, SectionTitle } from "@/shared";

export const Reviews = () => {
  return (
    <section className="flex justify-content">
      <Container className="flex flex-col items-center pb-[64px] lg:pb-[214px]">
        <p className="text-primary font-bold text-lg">Testimonials</p>
        <SectionTitle text="Our Client Reviews" className="mb-[24px] md:mb-[60px]" />
        <ReviewCarousel reviews={REVIEWS_LIST} />
      </Container>
    </section>
  );
};
