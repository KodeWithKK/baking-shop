import ProductDisplay from "@/components/layout/product-page";

type Props = {
  params: {
    id: string;
    category: "best-seller" | "designer-cakes" | "pastries";
  };
};

export default function Page({ params }: Readonly<Props>) {
  return <ProductDisplay productId={params.id} />;
}
