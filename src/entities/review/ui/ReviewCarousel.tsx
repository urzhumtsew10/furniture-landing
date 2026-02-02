import React from "react";
import { IReview } from "../model/types";
import { Carousel } from "@/features/carousel/ui/Carousel";
import { StarsRating } from "@/shared";
import Image from "next/image";

type Props = {
  reviews: IReview[];
};

export const ReviewCarousel = ({ reviews }: Props) => {
  return (
    <Carousel className="max-w-[1240px]" itemsShown={{ mobile: 1, tablet: 2, desktop: 3 }} gap={40}>
      {reviews.map((review) => (
        <div
          className="flex flex-col justify-end rounded-3xl bg-cover bg-no-repeat bg-center h-[476px] p-[18px]"
          style={{ backgroundImage: `url('${review.background}')` }}
        >
          <div className="relative rounded-3xl bg-white px-[40px] pt-[45px] pb-[18px] flex flex-col items-center">
            <div className="absolute rounded-t-full -translate-y-[75px] p-3 bg-white">
              <Image src={review.author.img} width={50} height={50} alt="reviewer image" />
            </div>
            <h4 className="text-dark-black text-lg font-bold mb-[6px]">{review.author.name}</h4>
            <p className="font-light text-dark-black text-xs mb-[22px]">{review.author.role}</p>
            <p className="text-center text-sm text-dark-black mb-[22px]">“{review.comment}“</p>
            <StarsRating rating={4} size={14} />
          </div>
        </div>
      ))}
    </Carousel>
  );
};
