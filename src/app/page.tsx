import ProductCard from "@/components/ProductCard/ProductCard";
import bestsellerCakes from "@/data/bestSeller";
import designerCakes from "@/data/designerCakes";
import pastries from "@/data/pastries";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-[85%] space-y-4 py-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="">Best Sellers</h2>
        <ViewAllBtn href="/best-seller" />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {bestsellerCakes.slice(0, 4).map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            href={`/best-seller/${cakeData.id}`}
            data={cakeData}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h2 className="">Designer Cakes</h2>
        <ViewAllBtn href="/designer-cakes" />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {designerCakes.slice(0, 4).map((cakeData) => (
          <ProductCard
            key={cakeData.id}
            href={`/designer-cakes/${cakeData.id}`}
            data={cakeData}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h2 className="">Pastry Cakes</h2>
        <ViewAllBtn href="/pastries" />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {pastries.slice(0, 4).map((cakeData) => (
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

function ViewAllBtn({ href }: Readonly<{ href: string }>) {
  return (
    <Link
      type="button"
      className="rounded-full border border-orange-600 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-600 hover:text-white"
      href={href}
    >
      View All
    </Link>
  );
}
