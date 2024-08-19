import ProductCard from "@/components/ProductCard/ProductCard";
import bestsellerCakes from "@/data/bestSeller";

export default function BestSellerPage() {
  return (
    <div className="space-y-4 px-[100px] py-[30px]">
      <h2 className="">Best Sellers</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-4">
        {bestsellerCakes.map((cakeData) => (
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
