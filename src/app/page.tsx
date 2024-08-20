import ProductCard from "@/components/ProductCard/ProductCard";
import bestsellerCakes from "@/data/bestSeller";
import designerCakes from "@/data/designerCakes";
import pastries from "@/data/pastries";
import { CakesDataType } from "@/types/global";
import cn from "@/utils/cn";
import Link from "next/link";

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
        <h2 className="">{name}</h2>
        <div className="max-sm:hidden">
          <Link
            className="rounded-full border border-orange-600 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-600 hover:text-white"
            href={allCakesHref}
          >
            View All
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4",
          "max-sm:flex max-sm:gap-2.5 max-sm:overflow-x-auto",
        )}
      >
        {cakesData.slice(0, 4).map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            href={`${allCakesHref}/${cakeData.id}`}
            data={cakeData}
            className="w-[280px] flex-shrink-0"
          />
        ))}

        <div className="flex items-center justify-center px-5 sm:hidden">
          <Link
            href={allCakesHref}
            className="flex-shrink-0 font-medium text-orange-600 underline underline-offset-4"
          >
            View All
          </Link>
        </div>
      </div>
    </>
  );
}
