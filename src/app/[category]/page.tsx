import { notFound } from "next/navigation";
import CategoryPage from "@/components/layout/CategoryPage/CategoryPage";
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
