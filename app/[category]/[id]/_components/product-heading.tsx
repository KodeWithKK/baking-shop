"use client";

import { useMemo } from "react";

import { Cake } from "@prisma/client";

import { useAppContext } from "@/context/app-provider";
import { HeartSolidIcon } from "@/lib/icons/global";
import { cn } from "@/lib/utils";

function ProductHeading({ cakeData }: Readonly<{ cakeData: Cake }>) {
  const { wishlistItems, toggleWishlistItem } = useAppContext();

  const isAlreadyInWishlist = useMemo(() => {
    return wishlistItems.some((item) => item.cakeId === cakeData.id);
  }, [wishlistItems, cakeData.id]);

  return (
    <div className="flex justify-between gap-1.5">
      <div>
        <h3 className="font-semibold">{cakeData.name}</h3>
        <p className="mt-1">
          <span className="font-bold">{cakeData.rating}</span>
          <span className="ml-0.5 text-xl text-[#e3b100]">★</span>
          <span className="ml-2 text-sm text-[#468FCE]">
            ({cakeData.totalReviews} Reviews)
          </span>
        </p>
      </div>
      <button
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gray-600",
          isAlreadyInWishlist && "bg-brand-600/20",
        )}
        onClick={() => toggleWishlistItem(cakeData.id)}
      >
        <HeartSolidIcon
          className={cn(
            "h-6 w-6 text-white",
            isAlreadyInWishlist && "text-brand-600",
          )}
        />
      </button>
    </div>
  );
}

export default ProductHeading;
