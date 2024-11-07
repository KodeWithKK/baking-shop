"use client";

import { useState } from "react";
import { notFound } from "next/navigation";

import { CakeCategory } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

import { URLCakeCategory } from "@/types/global";

import { FullPageLoader } from "@/components/base/loaders";
import { Option, Select } from "@/components/base/select";
import ProductCard from "@/components/features/product-card";
import ProductsGrid from "@/components/layout/products-grid";
import useOrderedData from "@/hooks/use-ordered-data";
import { getCakesByCategory } from "@/data/cake";

const titleMap = {
  "best-seller": "All Best Sellers",
  "designer-cakes": "All Designer Cakes",
  pastries: "All Pastry Cakes",
};

const categoryMap = {
  "best-seller": CakeCategory.BEST_SELLER,
  "designer-cakes": CakeCategory.DESIGNER_CAKES,
  pastries: CakeCategory.PASTRIES,
};

type Props = {
  params: { category: URLCakeCategory };
};

export default function Page({ params }: Readonly<Props>) {
  const [orderBy, setOrderBy] = useState<string>("Popularity");

  const {
    data: cakesData,
    isFetching,
    isError,
  } = useQuery({
    queryFn: () => getCakesByCategory(categoryMap[params.category], 0, 50),
    queryKey: ["cakes", params.category],
  });

  const orderedCakes = useOrderedData({ data: cakesData, orderBy });

  if (isFetching) {
    return <FullPageLoader />;
  }

  if (!categoryMap[params.category] || isError) {
    return notFound();
  }

  return (
    <div className="mx-auto w-[85%] py-[30px] max-sm:w-[98%] max-sm:pt-5">
      <div className="mb-4 flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4 max-md:px-1">
        <h2 className="text-[26px] leading-none max-sm:text-[24px]">
          {titleMap[params.category]}
        </h2>

        <div className="z-[10] max-md:mb-2 max-md:flex max-md:flex-col max-md:gap-1">
          <span className="text-[15px] max-md:text-sm max-md:font-medium">
            Sort by:{" "}
          </span>
          <Select
            variant="secondary"
            defaultValue={orderBy}
            onChange={setOrderBy}
          >
            <Option value="Popularity" />
            <Option value="Price Ascending" />
            <Option value="Price Decending" />
          </Select>
        </div>
      </div>

      <ProductsGrid>
        {(orderedCakes ?? cakesData)!.map((cakeData) => (
          <ProductCard key={cakeData.id} data={cakeData} />
        ))}
      </ProductsGrid>
    </div>
  );
}
