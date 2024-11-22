import { CakeCategory } from "@prisma/client";

export function findDynamicPrice(
  price: number,
  weight: number | null,
  quantity: number,
) {
  if (weight) {
    return price * (weight * 2) * quantity;
  } else {
    return price * quantity;
  }
}

export function findDiscount(
  listPrice: number,
  discountedPrice: number,
): number {
  return Math.trunc(((listPrice - discountedPrice) / discountedPrice) * 100);
}

export function getCakeCategoryURL(category: CakeCategory) {
  return category.replace("_", "-").toLowerCase();
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    price,
  );
}
