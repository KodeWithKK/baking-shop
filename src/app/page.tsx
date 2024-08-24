import ProductsDeck from "@/components/ProductsDeck/ProductsDeck";
import ProductCard from "@/components/ProductCard/ProductCard";
import bestsellerCakes from "@/data/bestSeller";
import designerCakes from "@/data/designerCakes";
import pastries from "@/data/pastries";
import { CakeDataType } from "@/types/global";
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
  readonly cakesData: CakeDataType[];
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

      <ProductsDeck totalCardsInDeck={16} cardWidth={200}>
        {cakesData.slice(0, 16).map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            href={`${allCakesHref}/${cakeData.id}`}
            data={cakeData}
            className="w-[200px] flex-shrink-0"
          />
        ))}
      </ProductsDeck>
    </>
  );
}
