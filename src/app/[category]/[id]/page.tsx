import { notFound } from "next/navigation";
import ProductDisplay from "@/components/layout/ProductDisplay/ProductDisplay";
import getCakesData from "@/utils/getCakesData";

type Props = {
  params: {
    id: string;
    category: "best-seller" | "designer-cakes" | "pastries";
  };
};

export default function Page({ params }: Readonly<Props>) {
  const cakesData = getCakesData(params.category);
  if (!cakesData) return notFound();

  const cake = cakesData.find((cake) => cake.id === params.id);
  if (!cake) return notFound();

  return <ProductDisplay data={cake} category={params.category} />;
}
