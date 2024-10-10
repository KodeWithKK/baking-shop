"use client";

import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { getCake } from "@/data/cake";
import { addToCart } from "@/data/cart-item";

import ProductContent from "./product-content";
import FullPageLoader from "@/components/base/loaders/fullpage-loader";

interface ProductPageProps {
  productId: string;
}

function ProductPage({ productId }: Readonly<ProductPageProps>) {
  const isAlreadyInCart = false;

  const {
    data: cakeData,
    isFetching,
    isError,
  } = useQuery({
    queryFn: () => getCake(productId),
    queryKey: ["cake", productId],
  });

  const handleAddToCart = useCallback(async () => {
    if (cakeData) {
      if (cakeData.category !== "PASTRIES") {
        await addToCart(cakeData.id, 0.5);
      } else {
        await addToCart(cakeData.id);
      }
    }
  }, [cakeData]);

  if (isFetching) {
    return <FullPageLoader />;
  }

  if (isError) {
    return notFound();
  }

  return (
    <div className="relative mx-auto flex gap-6 max-lg:flex-col max-lg:pb-[84px] max-lg:pt-4 max-md:pb-[75px] max-sm:w-[93%] sm:w-[91%] md:w-[75%] md:py-[20px] lg:w-[90%] xl:w-[85%]">
      <section className="lg:sticky lg:left-0 lg:top-[91px] lg:h-[calc(100vh-20vw)] lg:flex-shrink-0 xl:h-[calc(100vh-70px-53px-70px)]">
        <img
          src={cakeData!.imgSrc}
          alt="cake_image"
          className="aspect-square h-full rounded-lg object-cover"
        />

        <div className="fixed bottom-0 left-0 mt-3 flex w-full bg-white px-[0] max-lg:rounded-t-md max-lg:py-0 max-lg:shadow-[0_-1px_2px_#0000000d] md:gap-3 md:px-[10%] lg:static lg:bg-inherit lg:px-0">
          <button
            type="button"
            className="w-full border border-orange-600 text-orange-600 hover:bg-orange-600/[.15] max-md:rounded-tl-md max-md:border-l-0 md:rounded-lg"
            onClick={handleAddToCart}
          >
            {isAlreadyInCart ? "Go To Cart" : "Add To Cart"}
          </button>

          <button
            type="button"
            className="w-full bg-orange-600 py-4 text-white max-md:rounded-tr-md md:rounded-lg"
          >
            Buy Now
          </button>
        </div>
      </section>

      <ProductContent cakeData={cakeData!} />
    </div>
  );
}
export default ProductPage;
