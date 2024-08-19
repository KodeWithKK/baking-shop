import ProductDisplay from "@/components/ProductDisplay/ProductDisplay";
import bestsellerCakes from "@/data/bestSeller";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Readonly<Props>) {
  const cake = bestsellerCakes.find((cake) => cake.id === params.id);
  if (!cake) return <h2>Cake Not Found!</h2>;

  return <ProductDisplay data={cake} category="best-seller" />;
}
