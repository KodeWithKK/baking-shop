import { cn } from "@/lib/utils";

interface ProductsGridProps {
  children: React.ReactNode;
}

function ProductsGrid({ children }: Readonly<ProductsGridProps>) {
  return (
    <div
      className={cn(
        "grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[8px]",
        "max-lg:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]",
        "max-md:gap-[5px]",
        "max-sm:grid-cols-[repeat(2,minmax(0,1fr))] max-sm:gap-1",
      )}
    >
      {children}
    </div>
  );
}

export default ProductsGrid;
