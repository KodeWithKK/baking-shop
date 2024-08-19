"use client";

import { useAppContext } from "@/context/AppProvider/AppProvider";

type Category = "best-seller" | "designer-cakes" | "pastries";

type Props = {
  readonly productId: string;
  readonly category: Category;
};

function ProductAction({ productId, category }: Props) {
  const { addToCart } = useAppContext();

  return (
    <div className="mt-3 flex gap-3">
      <button
        type="button"
        className="w-full rounded-lg border border-orange-600 py-4 text-orange-600 hover:bg-orange-600/[.15]"
        onClick={() => addToCart(productId, category)}
      >
        Add To Cart
      </button>

      <button
        type="button"
        className="w-full rounded-lg bg-orange-600 py-4 text-white"
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductAction;
