import { PRODUCTS_CATEGORIES } from "@/shared";

export type ProductCategory = (typeof PRODUCTS_CATEGORIES)[number]["text"];

export interface IProduct {
  id: number;
  image: string;
  category: ProductCategory;
  title: string;
  rating: number;
  price: number;
}
