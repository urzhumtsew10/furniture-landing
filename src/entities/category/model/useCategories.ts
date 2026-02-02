import { useState } from "react";
import { ICategory } from "./types";

export const useCategories = (categories: ICategory[]) => {
  const [categoryList, setCategoryList] = useState<ICategory[]>(categories);

  const onChangeCategory = (id: number) => {
    setCategoryList((prev) =>
      prev.map((item) => ({
        ...item,
        active: item.id === id,
      })),
    );
  };

  return { categoryList, onChangeCategory };
};
