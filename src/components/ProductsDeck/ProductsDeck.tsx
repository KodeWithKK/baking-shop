"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import useIsTouchDevice from "@/hooks/useIsTouchDevice";
import cn from "@/utils/cn";

import { RightArrowIcon } from "@/Icons/Icons";

function ProductsDeck({
  children,
  totalCardsInDeck,
  cardWidth,
}: Readonly<{
  children: React.ReactNode;
  totalCardsInDeck: number;
  cardWidth: number;
}>) {
  const [totalCardFitsInView, setTotalCardFitsInView] = useState<number>(0);
  const [startPos, setStartPos] = useState<number>(0);
  const [deckXTranslate, setDeckXTranslate] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isTouchDevice = useIsTouchDevice();

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const deckWidth = containerRef.current.getBoundingClientRect().width;
        setTotalCardFitsInView(Math.floor(deckWidth / cardWidth));
      }
    };

    handleResize();

    const containerElement = containerRef.current;
    const resizeObserver = new ResizeObserver(handleResize);

    if (containerElement) {
      resizeObserver.observe(containerElement);
    }

    return () => {
      if (containerElement) {
        resizeObserver.unobserve(containerElement);
      }
    };
  }, [cardWidth]);

  const handleLeftShift = useCallback(() => {
    const extendedCardWidth = cardWidth + 8; // width + gap
    let nextStartPos = startPos - totalCardFitsInView;
    if (nextStartPos < 0) nextStartPos = 0;
    const nextTranslate = -1 * nextStartPos * extendedCardWidth;
    setDeckXTranslate(nextTranslate);
    setStartPos(nextStartPos);
  }, [startPos, totalCardFitsInView, cardWidth]);

  const handleRightShift = useCallback(() => {
    const extendedCardWidth = cardWidth + 8; // width + gap
    let nextStartPos = startPos + totalCardFitsInView;
    if (nextStartPos > totalCardsInDeck - 1)
      nextStartPos = totalCardsInDeck - 1;
    const nextTranslate = -1 * nextStartPos * extendedCardWidth;
    setDeckXTranslate(nextTranslate);
    setStartPos(nextStartPos);
  }, [startPos, totalCardFitsInView, totalCardsInDeck, cardWidth]);

  return (
    <div className="relative">
      <button
        className={cn(
          "absolute -left-[20px] top-[50%] z-[10] grid h-12 w-12 translate-y-[-50%] place-items-center rounded-full bg-white shadow-md",
          startPos === 0 && "hidden",
          isTouchDevice && "hidden",
        )}
        onClick={handleLeftShift}
      >
        <RightArrowIcon className="h-10 w-10 rotate-180 text-gray-900" />
      </button>

      <div
        ref={containerRef}
        className={cn(
          "z-0 overflow-x-hidden",
          isTouchDevice && "overflow-x-auto",
        )}
      >
        <div
          className="flex gap-2 transition-all duration-[400]"
          style={{ transform: `translateX(${deckXTranslate}px)` }}
        >
          {children}
        </div>
      </div>

      <button
        className={cn(
          "absolute -right-[20px] top-[50%] z-[10] grid h-12 w-12 translate-y-[-50%] place-items-center rounded-full bg-white shadow-md",
          startPos + totalCardFitsInView > totalCardsInDeck - 1 && "hidden",
          isTouchDevice && "hidden",
        )}
        onClick={handleRightShift}
      >
        <RightArrowIcon className="h-10 w-10 text-gray-900" />
      </button>
    </div>
  );
}

export default ProductsDeck;
