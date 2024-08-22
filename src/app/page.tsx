import ProductCard from "@/components/ProductCard/ProductCard";
import bestsellerCakes from "@/data/bestSeller";
import designerCakes from "@/data/designerCakes";
import pastries from "@/data/pastries";
import { CakesDataType } from "@/types/global";
import Link from "next/link";

import { RightArrowIcon } from "@/Icons/Icons";

export default function Home() {
  return (
    <div className="mx-auto w-[85%] space-y-4 py-[30px] max-sm:space-y-5 max-sm:pt-5">
      <CategoryDisplay
        name="Best Sellers"
        allCakesHref="/best-seller"
        cakesData={bestsellerCakes}
      />

      <CategoryDisplay
        name="Designer Cakes"
        allCakesHref="/designer-cakes"
        cakesData={designerCakes}
      />

      <CategoryDisplay
        name="Pastry Cakes"
        allCakesHref="/pastries"
        cakesData={pastries}
      />
    </div>
  );
}

type CategoryDisplayType = {
  readonly name: string;
  readonly allCakesHref: string;
  readonly cakesData: CakesDataType[];
};

function CategoryDisplay({
  name,
  allCakesHref,
  cakesData,
}: CategoryDisplayType) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="max-sm:text-[22px] max-sm:leading-none">{name}</h2>
        <div className="">
          <Link
            className="rounded-full border border-orange-600 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-600 hover:text-white max-sm:border-0 max-sm:underline max-sm:underline-offset-4"
            href={allCakesHref}
          >
            View All
          </Link>
        </div>
      </div>

      <div
        className={
          "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 max-sm:flex max-sm:gap-2.5 max-sm:overflow-x-auto"
        }
      >
        {cakesData.slice(0, 4).map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            href={`${allCakesHref}/${cakeData.id}`}
            data={cakeData}
            className="max-sm:w-[200px] max-sm:flex-shrink-0"
          />
        ))}

        <Link
          className="flex w-[150px] flex-shrink-0 items-center justify-center rounded-[15px] border border-orange-600 bg-orange-600/10 px-6 text-center font-medium leading-[1.5] text-orange-600 sm:hidden"
          href={allCakesHref}
        >
          <div className="grid place-items-center">
            <RightArrowIcon className="h-10 w-10" />
            <span className="text-lg">View All {name}</span>
          </div>
        </Link>
      </div>
    </>
  );
}
