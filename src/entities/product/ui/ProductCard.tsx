import { StarsRating } from "@/shared";
import { Plus } from "lucide-react";
import React from "react";

export const ProductCard = ({ image, title, price, rating, category }: any) => {
  return (
    <div className="bg-white p-4 rounded-xl md:rounded-[20px] transition h-full">
      <img src={image} alt={title} className="w-full h-[255px] object-contain mb-3" />
      <p className="text-gray-dark text-base mb-2 font-secondary">{category}</p>
      <h4 className="font-semibold text-dark-blue text-xl mb-2">{title}</h4>
      <StarsRating rating={rating} size={20} />
      <div className="flex items-center justify-between">
        <p className="flex text-xl font-semibold">
          <span className="text-base">$</span>
          {price}
        </p>
        <div className="w-[48px] h-[48px] bg-dark-blue rounded-full flex items-center justify-center">
          <Plus className="text-2xl font-semibold text-white" />
        </div>
      </div>
    </div>
  );
};
