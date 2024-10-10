import { CakeCategory } from "@prisma/client";

export function findDiscountedPrice(listPrice: number): number {
  const price = Math.trunc(listPrice * 0.89);
  const remaining = 9 - (price % 10);
  return price + remaining;
}

export function findDiscount(
  listPrice: number,
  discountedPrice: number | null,
): number {
  const newDiscountedPrice = discountedPrice ?? findDiscountedPrice(listPrice);
  return Math.trunc(
    ((listPrice - newDiscountedPrice) / newDiscountedPrice) * 100,
  );
}

export function getCakeCategoryURL(category: CakeCategory) {
  return category.replace("_", "-").toLowerCase();
}
