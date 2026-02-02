"use client";

import React from "react";
import { CategoryTab, ICategory, useCategories } from "@/entities/category";

type Props = {
  categories: ICategory[];
};

export const CategorySwitcher = ({ categories }: Props) => {
  const { categoryList, onChangeCategory } = useCategories(categories);

  return (
    <div className="relative flex items-center bg-gray-light p-1.5 rounded-[44px] mb-8 md:mb-[80px] overflow-hidden z-0">
      {categoryList.map(({ id, text, active }) => (
        <CategoryTab
          key={id}
          id={id}
          text={text}
          active={active}
          onChangeCategory={onChangeCategory}
        />
      ))}
    </div>
  );
};
