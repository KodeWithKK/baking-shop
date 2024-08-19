import ProductDisplay from "@/components/ProductDisplay/ProductDisplay";
import designerCakes from "@/data/designerCakes";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Readonly<Props>) {
  const cake = designerCakes.find((cake) => cake.id === params.id);
  if (!cake) return <h2>Cake Not Found!</h2>;

  return <ProductDisplay data={cake} category="designer-cakes" />;
}
