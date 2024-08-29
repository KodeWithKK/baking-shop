"use client";

import FullPageLoader from "@/components/base/Loaders/FullPageLoader";
import useIsTouchDevice from "@/hooks/useIsTouchDevice";
import ProductsDeck from "@/components/features/ProductsDeck/ProductsDeck";
import ProductCard from "@/components/features/ProductCard/ProductCard";
import bestsellerCakes from "@/data/bestSeller";
import designerCakes from "@/data/designerCakes";
import pastries from "@/data/pastries";
import { CakeDataType } from "@/types/global";
import Link from "next/link";

export default function Home() {
  const isTouchDevice = useIsTouchDevice();

  if (isTouchDevice === null) return <FullPageLoader />;

  return (
    <div className="mx-auto w-[85%] space-y-8 py-[30px] max-sm:w-[90%] max-sm:pt-5">
      <CategoryDisplay
        name="Best Sellers"
        allCakesHref="/best-seller"
        cakesData={bestsellerCakes}
        isTouchDevice={isTouchDevice}
      />

      <CategoryDisplay
        name="Designer Cakes"
        allCakesHref="/designer-cakes"
        cakesData={designerCakes}
        isTouchDevice={isTouchDevice}
      />

      <CategoryDisplay
        name="Pastry Cakes"
        allCakesHref="/pastries"
        cakesData={pastries}
        isTouchDevice={isTouchDevice}
      />
    </div>
  );
}

type CategoryDisplayType = {
  readonly name: string;
  readonly allCakesHref: string;
  readonly cakesData: CakeDataType[];
  readonly isTouchDevice: boolean | null;
};

function CategoryDisplay({
  name,
  allCakesHref,
  cakesData,
  isTouchDevice,
}: CategoryDisplayType) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[26px] leading-none max-sm:text-[24px]">{name}</h2>
        <Link
          className="font-medium text-orange-600 underline underline-offset-4 max-sm:text-[15px]"
          href={allCakesHref}
        >
          View All
        </Link>
      </div>

      <ProductsDeck
        totalCardsInDeck={12}
        cardWidth={200}
        isTouchDevice={isTouchDevice}
      >
        {cakesData.slice(0, 12).map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            href={`${allCakesHref}/${cakeData.id}`}
            data={cakeData}
            className="w-[200px] flex-shrink-0"
          />
        ))}
      </ProductsDeck>
    </div>
  );
}
