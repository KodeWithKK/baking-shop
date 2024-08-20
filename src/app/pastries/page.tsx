import ProductCard from "@/components/ProductCard/ProductCard";
import pastries from "@/data/pastries";

export default function PastriesPage() {
  return (
    <div className="mx-auto w-[85%] space-y-4 py-[30px]">
      <h2 className="">Pastries Cakes</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {pastries.map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            href={`/pastries/${cakeData.id}`}
            data={cakeData}
          />
        ))}
      </div>
    </div>
  );
}
