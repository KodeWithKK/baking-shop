import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard/ProductCard";
import bestsellerCakes from "@/data/bestSeller";
import designerCakes from "@/data/designerCakes";
import pastries from "@/data/pastries";

type Props = {
  params: { category: "best-seller" | "designer-cakes" | "pastries" };
};

const dataMap = {
  "best-seller": bestsellerCakes,
  "designer-cakes": designerCakes,
  pastries: pastries,
};

const titleMap = {
  "best-seller": "All Best Sellers",
  "designer-cakes": "All Designer Cakes",
  pastries: "All Pastry Cakes",
};

export default function BestSellerPage({ params }: Readonly<Props>) {
  const cakesData = dataMap[params.category];
  const title = titleMap[params.category];

  if (!cakesData) {
    return notFound();
  }

  return (
    <div className="max-[]:w-[85%] mx-auto w-[85%] space-y-4 py-[30px] max-sm:w-[95%] max-sm:pt-5">
      <h2 className="text-[26px] max-sm:text-[24px]">{title}</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[10px] max-lg:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] max-md:gap-[5px] max-sm:grid-cols-[repeat(2,minmax(0,1fr))] max-sm:gap-1">
        {cakesData.map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            href={`/best-seller/${cakeData.id}`}
            data={cakeData}
          />
        ))}
      </div>
    </div>
  );
}
