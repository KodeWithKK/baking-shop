"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/features/product-card";
import { Select, Option } from "@/components/base/select";
import { CakeCategories, CakeDataType } from "@/types/global";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  category: CakeCategories;
  cakesData: CakeDataType[];
};

function CategoryPage({ title, category, cakesData }: Readonly<Props>) {
  const [sortBy, setSortBy] = useState<string>("Popularity");
  const [sortedCakes, setSortedCakes] = useState<CakeDataType[]>(cakesData);

  useEffect(() => {
    if (sortBy === "Popularity") {
      setSortedCakes(cakesData);
    } else if (sortBy == "Price Ascending") {
      setSortedCakes(
        cakesData.toSorted((cake1, cake2) => cake1.currPrice - cake2.currPrice),
      );
    } else {
      setSortedCakes(
        cakesData.toSorted((cake1, cake2) => cake2.currPrice - cake1.currPrice),
      );
    }
  }, [cakesData, sortBy]);

  return (
    <div className="mx-auto w-[85%] py-[30px] max-sm:w-[98%] max-sm:pt-5">
      <div className="mb-4 flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4 max-md:px-1">
        <h2 className="text-[26px] leading-none max-sm:text-[24px]">{title}</h2>

        <div className="max-md:mb-2 max-md:flex max-md:flex-col max-md:gap-1">
          <span className="text-[15px] max-md:text-sm max-md:font-medium">
            Sort by:{" "}
          </span>
          <Select defaultValue={sortBy} onChange={setSortBy}>
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
        {sortedCakes.map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            href={`/${category}/${cakeData.id}`}
            data={cakeData}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
