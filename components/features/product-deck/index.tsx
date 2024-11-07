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
      <button
        className={cn(
          "bg-bg-white group absolute -left-[20px] top-[50%] z-[10] grid h-12 w-12 translate-y-[-50%] place-items-center rounded-full bg-gray-975 shadow-md disabled:cursor-not-allowed disabled:bg-gray-800",
          isTouchDevice && "hidden",
        )}
        disabled={!hasCardsInLeft}
        onClick={handleLeftButton}
      >
        <RightArrowIcon className="h-10 w-10 rotate-180 text-gray-200 group-disabled:text-gray-600" />
      </button>

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

      <button
        className={cn(
          "group absolute -right-[20px] top-[50%] z-[10] grid h-12 w-12 translate-y-[-50%] place-items-center rounded-full bg-gray-975 shadow-md disabled:cursor-not-allowed disabled:bg-gray-800",
          isTouchDevice && "hidden",
        )}
        disabled={!hasCardsInRight}
        onClick={handleRightButton}
      >
        <RightArrowIcon className="h-10 w-10 text-gray-200 group-disabled:text-gray-600" />
      </button>
    </div>
  );
}

export default ProductsDeck;
