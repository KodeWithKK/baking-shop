"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getCakes } from "@/data/cake";

import ProductCard from "@/components/features/product-card";
import FullPageLoader from "@/components/base/loaders/fullpage-loader";
import { Select, Option } from "@/components/base/select";
import { CakeCategory, Cake } from "@prisma/client";
import { URLCakeCategory } from "@/types/global";
import { findDiscountedPrice } from "@/lib/pricing";
import { cn } from "@/lib/utils";

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
  const [orderedCakes, setOrderedCakes] = useState<Cake[]>();

  const {
    data: cakesData,
    isFetching,
    isError,
  } = useQuery({
    queryFn: () => getCakes(categoryMap[params.category], 0, 50),
    queryKey: ["cakes", params.category],
  });

  useEffect(() => {
    if (!cakesData) return;

    if (orderBy === "Popularity") {
      setOrderedCakes(cakesData);
    } else if (orderBy == "Price Ascending") {
      setOrderedCakes(
        cakesData.toSorted((cake1, cake2) => {
          const cake1DiscountedPrice =
            cake1.discountedPrice ?? findDiscountedPrice(cake1.listPrice);
          const cake2DiscountedPrice =
            cake2.discountedPrice ?? findDiscountedPrice(cake2.listPrice);
          return cake1DiscountedPrice - cake2DiscountedPrice;
        }),
      );
    } else {
      setOrderedCakes(
        cakesData.toSorted((cake1, cake2) => {
          const cake1DiscountedPrice =
            cake1.discountedPrice ?? findDiscountedPrice(cake1.listPrice);
          const cake2DiscountedPrice =
            cake2.discountedPrice ?? findDiscountedPrice(cake2.listPrice);
          return cake2DiscountedPrice - cake1DiscountedPrice;
        }),
      );
    }
  }, [cakesData, orderBy]);

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

        <div className="max-md:mb-2 max-md:flex max-md:flex-col max-md:gap-1">
          <span className="text-[15px] max-md:text-sm max-md:font-medium">
            Sort by:{" "}
          </span>
          <Select defaultValue={orderBy} onChange={setOrderBy}>
            <Option value="Popularity" />
            <Option value="Price Ascending" />
            <Option value="Price Decending" />
          </Select>
        </div>
      </div>

      <div
        className={cn(
          "grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[10px] max-lg:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] max-md:gap-[5px] max-sm:grid-cols-[repeat(2,minmax(0,1fr))] max-sm:gap-1",
        )}
      >
        {(orderedCakes ?? cakesData)!.map((cakeData) => (
          <ProductCard key={cakeData.id} data={cakeData} />
        ))}
      </div>
    </div>
  );
}
