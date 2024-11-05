"use client";

import { notFound } from "next/navigation";

import { FullPageLoader } from "@/components/base/loaders";

import ProductContent from "./_components/product-content";
import { useProductPageContext } from "./_components/product-page-provider";

function ProductPage() {
  const {
    cakeData,
    isFetching,
    isError,
    isAlreadyInCart,
    handleAddToCart,
    toggleCartModal,
  } = useProductPageContext();

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

        <div className="fixed bottom-0 left-0 z-[20] mt-3 flex w-full bg-white px-[0] max-lg:rounded-t-md max-lg:py-0 max-lg:shadow-[0_-1px_2px_#0000000d] md:gap-3 md:px-[10%] lg:static lg:bg-inherit lg:px-0">
          <button
            type="button"
            className="w-full border border-brand-600 text-brand-600 hover:bg-brand-600/[.15] max-md:rounded-tl-md max-md:border-l-0 md:rounded-lg"
            onClick={isAlreadyInCart ? toggleCartModal : handleAddToCart}
          >
            {isAlreadyInCart ? "Go To Cart" : "Add To Cart"}
          </button>

          <button
            type="button"
            className="w-full bg-brand-600 py-4 text-white max-md:rounded-tr-md md:rounded-lg"
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
