"use client";

import { useRef } from "react";

import useCarousel from "@/hooks/use-carousel";
import { RightArrowIcon } from "@/lib/icons/global";
import { cn } from "@/lib/utils";

function ProductsDeck({
  children,
  isTouchDevice,
}: Readonly<{
  children: React.ReactNode;
  isTouchDevice: boolean | null;
}>) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const {
    carouselXTranslate,
    hasCardsInLeft,
    hasCardsInRight,
    handleLeftButton,
    handleRightButton,
  } = useCarousel({ carouselRef });

  return (
    <div className="relative">
      <div className="h-15 w-15 group absolute -left-[35px] top-[50%] z-[10] flex translate-y-[-60%] items-center justify-center rounded-full bg-[#f7f7f7] p-2">
        <button
          className={cn(
            "bg-bg-white h-12 w-12 rounded-full bg-gray-975 shadow-md disabled:cursor-not-allowed disabled:bg-gray-800",
            isTouchDevice && "hidden",
          )}
          disabled={!hasCardsInLeft}
          onClick={handleLeftButton}
        >
          <RightArrowIcon className="h-12 w-12 rotate-180 text-gray-200 group-disabled:text-gray-600" />
        </button>
      </div>

      <div
        className={cn(
          "z-0 overflow-x-hidden",
          isTouchDevice && "overflow-x-auto",
        )}
      >
        <div
          ref={carouselRef}
          className="flex gap-2 transition-all duration-700 ease-in-out"
          style={{ transform: `translateX(${carouselXTranslate}px)` }}
        >
          {children}
        </div>
      </div>

      <div className="h-15 w-15 group absolute -right-[35px] top-[50%] z-[10] flex translate-y-[-60%] items-center justify-center rounded-full bg-[#f7f7f7] p-2">
        <button
          className={cn(
            "bg-bg-white h-12 w-12 rounded-full bg-gray-975 shadow-md disabled:cursor-not-allowed disabled:bg-gray-800",
            isTouchDevice && "hidden",
          )}
          disabled={!hasCardsInRight}
          onClick={handleRightButton}
        >
          <RightArrowIcon className="h-12 w-12 text-gray-200 group-disabled:text-gray-600" />
        </button>
      </div>
    </div>
  );
}

export default ProductsDeck;
