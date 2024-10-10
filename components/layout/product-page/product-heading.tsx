"use client";

import { cn } from "@/lib/utils";
import { HeartSolidIcon } from "@/lib/icons/global";
import { Cake } from "@prisma/client";

function ProductHeading({ cakeData }: Readonly<{ cakeData: Cake }>) {
  const isAlreadyInWishlist = false;

  return (
    <div className="flex justify-between">
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
          "grid h-10 w-10 place-items-center rounded-full bg-gray-600",
          isAlreadyInWishlist && "bg-orange-600/20",
        )}
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
