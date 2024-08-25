"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/features/ProductCard/ProductCard";
import { Select, Option } from "@/components/base/Select/Select";
import { CakeCategories, CakeDataType } from "@/types/global";

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
  }, [sortBy]);

  return (
    <div className="mx-auto w-[85%] space-y-4 py-[30px] max-sm:w-[95%] max-sm:pt-5">
      <div className="flex justify-between">
        <h2 className="text-[26px] max-sm:text-[24px]">{title}</h2>
        <div>
          <span className="text-[15px]">Sort by: </span>
          <Select defaultValue={sortBy} onChange={setSortBy}>
            <Option value="Popularity" />
            <Option value="Price Ascending" />
            <Option value="Price Decending" />
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[10px] max-lg:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] max-md:gap-[5px] max-sm:grid-cols-[repeat(2,minmax(0,1fr))] max-sm:gap-1">
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
