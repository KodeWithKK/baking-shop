import ProductCard from "@/components/ProductCard/ProductCard";
import designerCakes from "@/data/designerCakes";

export default function DesinerCakesPage() {
  return (
    <div className="space-y-4 px-[100px] py-[30px]">
      <h2 className="">Designer Cakes</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-4">
        {designerCakes.map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            href={`/designer-cakes/${cakeData.id}`}
            data={cakeData}
          />
        ))}
      </div>
    </div>
  );
}
