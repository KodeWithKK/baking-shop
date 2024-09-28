"use client";

import { useMemo } from "react";
import { useAppContext } from "@/context/app-provider";
import { cn } from "@/lib/utils";
import { ProductPageProps } from "./types";
import { HeartSolidIcon } from "@/lib/icons/global";

function ProductHeading({ data, category }: Readonly<ProductPageProps>) {
  const { addToWishlist, removeFromWishlist, wishlistItems } = useAppContext();

  const isAlreadyInWishlist = useMemo(() => {
    return !!wishlistItems.find((item) => item.id === data.id);
  }, [wishlistItems, data.id]);

  return (
    <div className="flex justify-between">
      <div>
        <h3 className="font-semibold">{data.name}</h3>
        <p className="mt-1">
          <span className="font-bold">{data.rating}</span>
          <span className="ml-0.5 text-xl text-[#e3b100]">★</span>
          <span className="ml-2 text-sm text-[#468FCE]">
            ({data.totalReviews} Reviews)
          </span>
        </p>
      </div>
      <button
        className={cn(
          "grid h-10 w-10 place-items-center rounded-full bg-gray-600",
          isAlreadyInWishlist && "bg-orange-600/20",
        )}
        onClick={() => {
          if (isAlreadyInWishlist) {
            removeFromWishlist(data.id, category);
          } else {
            addToWishlist(data.id, category);
          }
        }}
      >
        <HeartSolidIcon
          className={cn(
            "h-6 w-6 text-white",
            isAlreadyInWishlist && "text-orange-600",
          )}
        />
      </button>
    </div>
  );
}

export default ProductHeading;
