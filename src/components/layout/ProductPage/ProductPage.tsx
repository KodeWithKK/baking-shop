"use client";

import { useMemo } from "react";
import { useAppContext } from "@/context/AppProvider/AppProvider";
import ProductContent from "./ProductContent";
import { ProductPageProps } from "./types";

function ProductDisplay({ data, category }: Readonly<ProductPageProps>) {
  const { addToCart, removeFromCart, cartItems } = useAppContext();

  const isAlreadyInCart = useMemo((): boolean => {
    return !!cartItems.find((item) => item.id === data.id);
  }, [data.id, cartItems]);

  return (
    <div className="relative flex gap-6 px-[100px] py-[20px]">
      <section className="sticky left-0 top-[91px] h-[calc(100vh-70px-53px-70px)] w-[71%]">
        <img
          src={data.imgSrc}
          alt="cake_image"
          className="h-full w-full rounded-lg object-cover"
        />

        <div className="mt-3 flex gap-3">
          <button
            type="button"
            className="w-full rounded-lg border border-orange-600 py-4 text-orange-600 hover:bg-orange-600/[.15]"
            onClick={() => {
              if (!isAlreadyInCart) {
                addToCart(data.id, category);
              } else {
                removeFromCart(data.id, category);
              }
            }}
          >
            {isAlreadyInCart ? "Remove From Cart" : "Add To Cart"}
          </button>

          <button
            type="button"
            className="w-full rounded-lg bg-orange-600 py-4 text-white"
          >
            Buy Now
          </button>
        </div>
      </section>

      <ProductContent data={data} category={category} />
    </div>
  );
}
export default ProductDisplay;
