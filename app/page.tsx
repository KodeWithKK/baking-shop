"use client";

import Link from "next/link";

import { Cake, CakeCategory } from "@prisma/client";
import { useQueries } from "@tanstack/react-query";

import FullPageLoader from "@/components/base/loaders/fullpage-loader";
import ProductCard from "@/components/features/product-card";
import ProductsDeck from "@/components/features/product-deck";
import useIsTouchDevice from "@/hooks/use-is-touch-device";
import { getCakeCategoryURL } from "@/lib/pricing";
import { getCakesByCategory } from "@/data/cake";

export default function Home() {
  const isTouchDevice = useIsTouchDevice();
  const categories = Object.values(CakeCategory);

  const results = useQueries({
    queries: categories.map((category) => ({
      queryKey: ["home-cakes", category],
      queryFn: () => getCakesByCategory(category, 0, 16),
    })),
  });

  if (isTouchDevice === null || results.some((data) => data.isFetching)) {
    return <FullPageLoader />;
  }

  return (
    <div className="mx-auto w-[85%] space-y-8 py-[30px] max-sm:w-[90%] max-sm:pt-5">
      <CategoryDisplay
        name="Best Sellers"
        cakesData={results[0].data!}
        isTouchDevice={isTouchDevice}
      />

      <CategoryDisplay
        name="Designer Cakes"
        cakesData={results[1].data!}
        isTouchDevice={isTouchDevice}
      />

      <CategoryDisplay
        name="Pastry Cakes"
        cakesData={results[2].data!}
        isTouchDevice={isTouchDevice}
      />
    </div>
  );
}

interface CategoryDisplayType {
  name: string;
  cakesData: Cake[];
  isTouchDevice: boolean | null;
}

function CategoryDisplay({
  name,
  cakesData,
  isTouchDevice,
}: Readonly<CategoryDisplayType>) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[26px] leading-none max-sm:text-[24px]">{name}</h2>
        <Link
          className="font-medium text-brand-600 max-sm:text-sm"
          href={getCakeCategoryURL(cakesData?.[0]?.category)}
        >
          See All Cakes ➝
        </Link>
      </div>

      <ProductsDeck isTouchDevice={isTouchDevice}>
        {cakesData.slice(0, 12).map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            data={cakeData}
            className="w-[188px] flex-shrink-0 md:w-[198px] lg:w-[228px]"
          />
        ))}
      </ProductsDeck>
    </div>
  );
}
