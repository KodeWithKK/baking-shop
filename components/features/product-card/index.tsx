"use client";

import { useMemo } from "react";

import { Cake } from "@prisma/client";
import Link from "next/link";

import { useAppContext } from "@/context/app-provider";
import { HeartSolidIcon } from "@/lib/icons/global";
import {
  findDiscount,
  findDiscountedPrice,
  formatPrice,
  getCakeCategoryURL,
} from "@/lib/pricing";
import { cn } from "@/lib/utils";

type Props = {
  data: Cake;
  className?: string;
};

function ProductCard({ data, className }: Readonly<Props>) {
  const { wishlistItems, toggleWishlistItem } = useAppContext();

  const isAlreadyInWishlist = useMemo(() => {
    return wishlistItems.some((item) => item.cakeId === data.id);
  }, [wishlistItems, data.id]);

  return (
    <Link
      href={`${getCakeCategoryURL(data.category)}/${data.id}`}
      className={cn(
        "overflow-hidden rounded-lg border border-gray-200 bg-white",
        className,
      )}
    >
      <div className="relative">
        <img src={`${data.imgSrc}?tr=w-320,h-320,q-90`} alt="data-img" />
        <button
          className={cn(
            "absolute right-1 top-1 rounded-full bg-black/20 p-1",
            isAlreadyInWishlist && "bg-brand-600/20",
          )}
          onClick={(e) => {
            e.preventDefault();
            toggleWishlistItem(data.id);
          }}
        >
          <HeartSolidIcon
            className={cn(
              "h-[18px] text-white",
              isAlreadyInWishlist && "text-brand-600",
            )}
          />
        </button>
      </div>

      <div className="space-y-px p-2 pt-0">
        <p className="overflow-hidden text-ellipsis text-nowrap text-[15px] font-medium">
          {data.name}
        </p>

        <p className="">
          <span className="text-[15px] font-medium">
            ₹{" "}
            {formatPrice(
              data.discountedPrice ?? findDiscountedPrice(data.listPrice),
            )}
          </span>
          <span className="mx-1.5 text-[13px] line-through">
            ₹ {formatPrice(data.listPrice)}
          </span>
          <span className="text-[13px] font-medium text-[#1c9550]">
            ({findDiscount(data.listPrice, data.discountedPrice)}% OFF)
          </span>
        </p>

        <p className="">
          <span className="rounded bg-[#1c9550]/10 px-1 py-0.5 text-[13px] font-medium text-[#1c9550]">
            {data.rating || "NEW"} ★
          </span>
          {data.rating > 0 && data.totalReviews > 0 && (
            <span className="ml-1.5 text-[13px]">
              {data.totalReviews} Review{data.totalReviews > 1 && "s"}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
