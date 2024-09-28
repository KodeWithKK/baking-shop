import { notFound } from "next/navigation";
import CategoryPage from "@/components/layout/category-page";
import getCakesData from "@/utils/getCakesDetail";
import { CakeCategories } from "@/types/global";

type Props = {
  params: { category: CakeCategories };
};

const titleMap = {
  "best-seller": "All Best Sellers",
  "designer-cakes": "All Designer Cakes",
  pastries: "All Pastry Cakes",
};

export default function Page({ params }: Readonly<Props>) {
  const cakesData = getCakesData(params.category);
  const title = titleMap[params.category];

  if (!cakesData) {
    return notFound();
  }

  return (
    <CategoryPage
      title={title}
      category={params.category}
      cakesData={cakesData}
    />
  );
}
