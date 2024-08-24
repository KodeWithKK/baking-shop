import { notFound } from "next/navigation";
import ProductCard from "@/components/features/ProductCard/ProductCard";
import { Select, Option } from "@/components/base/Select/Select";
import getCakesData from "@/utils/getCakesData";
import { CakeCategories } from "@/types/global";

type Props = {
  params: { category: CakeCategories };
};

const titleMap = {
  "best-seller": "All Best Sellers",
  "designer-cakes": "All Designer Cakes",
  pastries: "All Pastry Cakes",
};

export default function CategoryPage({ params }: Readonly<Props>) {
  const cakesData = getCakesData(params.category);
  const title = titleMap[params.category];

  if (!cakesData) {
    return notFound();
  }

  return (
    <div className="max-[]:w-[85%] mx-auto w-[85%] space-y-4 py-[30px] max-sm:w-[95%] max-sm:pt-5">
      <div className="flex justify-between">
        <h2 className="text-[26px] max-sm:text-[24px]">{title}</h2>
        <div>
          <span className="text-[15px]">Sort by: </span>
          <Select value="Popularity">
            <Option value="Popularity" />
            <Option value="Price Ascending " />
            <Option value="Price Decending" />
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[10px] max-lg:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] max-md:gap-[5px] max-sm:grid-cols-[repeat(2,minmax(0,1fr))] max-sm:gap-1">
        {cakesData.map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            href={`/${params.category}/${cakeData.id}`}
            data={cakeData}
          />
        ))}
      </div>
    </div>
  );
}
