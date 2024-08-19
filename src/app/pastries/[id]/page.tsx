import ProductDisplay from "@/components/ProductDisplay/ProductDisplay";
import pastries from "@/data/pastries";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Readonly<Props>) {
  const cake = pastries.find((cake) => cake.id === params.id);
  if (!cake) return <h2>Cake Not Found!</h2>;

  return <ProductDisplay data={cake} category="pastries" />;
}
