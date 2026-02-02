export const CATEGORIES_ARRAY = ["Chair", "Beds", "Sofa", "Lamp"] as const;

export const PRODUCTS_CATEGORIES = CATEGORIES_ARRAY.map((categoryName, index) => {
  return {
    id: index,
    text: categoryName,
    active: index === 0,
  };
});
