import { useState, useCallback, useEffect } from "react";

interface UseCarouselProps {
  // The ref of the element whose childs are these cards
  carouselRef: React.RefObject<HTMLDivElement>;
}

function useCarousel({ carouselRef }: UseCarouselProps): {
  carouselXTranslate: number;
  hasCardsInLeft: boolean;
  hasCardsInRight: boolean;
  handleLeftButton: () => void;
  handleRightButton: () => void;
} {
  const [firstCardIdx, setFirstCardIdx] = useState<number>(0);
  const [carouselXTranslate, setCarouselXTranslate] = useState<number>(0);
  const [totalCards, setTotalCards] = useState<number>(0);
  const [totalVisibleCards, setTotalVisibleCards] = useState<number>(0);

  const initalizeStates = useCallback(() => {
    const carouselElm = carouselRef.current;

    if (carouselElm) {
      const firstCard = carouselElm.firstChild as HTMLElement;
      const firstCardWidth = firstCard.getBoundingClientRect().width;
      const carouselWidth = carouselElm.getBoundingClientRect().width;
      const carouselGap = Number(
        window.getComputedStyle(carouselElm).gap.replace("px", ""),
      );
      const totalCards = carouselElm.childElementCount;
      const totalVisibleCards = Math.trunc(
        carouselWidth / (firstCardWidth + carouselGap),
      );

      setTotalCards(totalCards);
      setTotalVisibleCards(totalVisibleCards);
    }
  }, [carouselRef]);

  useEffect(() => {
    initalizeStates();
  }, [initalizeStates]);

  const getCardDistanceFromLeft = useCallback(
    (cardIdx: number) => {
      initalizeStates();
      const carouselElm = carouselRef.current;
      const childElm = carouselElm?.children[cardIdx] as HTMLElement;
      if (childElm) return childElm.offsetLeft;
      else return 0;
    },
    [initalizeStates, carouselRef],
  );

  const handleLeftButton = useCallback(() => {
    if (totalVisibleCards >= totalCards) {
      setFirstCardIdx(0);
      setCarouselXTranslate(0);
      return;
    }

    const nextCardIdx = Math.max(0, firstCardIdx - totalVisibleCards);
    const nextCardLeftDistance = getCardDistanceFromLeft(nextCardIdx);

    setFirstCardIdx(nextCardIdx);
    setCarouselXTranslate(-1 * nextCardLeftDistance);
  }, [firstCardIdx, totalCards, totalVisibleCards, getCardDistanceFromLeft]);

  const handleRightButton = useCallback(() => {
    if (totalVisibleCards >= totalCards) {
      setFirstCardIdx(0);
      setCarouselXTranslate(0);
      return;
    }

    const nextCardIdx = Math.min(
      firstCardIdx + totalVisibleCards,
      totalCards - totalVisibleCards,
    );

    const nextCardLeftDistance = getCardDistanceFromLeft(nextCardIdx);

    setFirstCardIdx(nextCardIdx);
    setCarouselXTranslate(-1 * nextCardLeftDistance);
  }, [firstCardIdx, totalCards, totalVisibleCards, getCardDistanceFromLeft]);

  return {
    carouselXTranslate,
    hasCardsInLeft: firstCardIdx !== 0,
    hasCardsInRight: firstCardIdx + totalVisibleCards < totalCards,
    handleLeftButton,
    handleRightButton,
  };
}

export default useCarousel;
