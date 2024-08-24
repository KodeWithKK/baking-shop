import { notFound } from "next/navigation";
import ProductDisplay from "@/components/ProductDisplay/ProductDisplay";
import bestsellerCakes from "@/data/bestSeller";
import designerCakes from "@/data/designerCakes";
import pastries from "@/data/pastries";

const dataMap = {
  "best-seller": bestsellerCakes,
  "designer-cakes": designerCakes,
  pastries: pastries,
};

type Props = {
  params: {
    id: string;
    category: "best-seller" | "designer-cakes" | "pastries";
  };
};

export default function Page({ params }: Readonly<Props>) {
  const cakesData = dataMap[params.category];
  const cake = cakesData.find((cake) => cake.id === params.id);
  if (!cake) return notFound();

  return <ProductDisplay data={cake} category="best-seller" />;
}
