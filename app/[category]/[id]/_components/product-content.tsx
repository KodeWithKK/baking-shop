import { Cake } from "@prisma/client";

import WrappedText from "@/components/features/wrapped-text";

import ProductForm from "./product-form";
import ProductHeading from "./product-heading";
import ProductReviews from "./product-review";
import { dummyReviews } from "./utils";

function ProductContent({ cakeData }: Readonly<{ cakeData: Cake }>) {
  return (
    <section className="w-full">
      <ProductHeading cakeData={cakeData} />

      <hr className="mt-[10px] border-gray-400" />

      <ProductForm cakeData={cakeData} />

      <hr className="border-gray-400" />

      <div className="mb-6 mt-5">
        <div className="mb-1 block text-[15px] font-medium">
          Product Description
        </div>
        <WrappedText className="text-[15px]">
          {cakeData.description}
        </WrappedText>
      </div>

      <img
        src="https://media.bakingo.com/bakingo-ssr/static/media/Info-1.aa9d95cd.png"
        alt="banner"
        className="my-6 w-[400px] rounded-lg bg-gray-600"
      />

      <div>
        <h3 className="text-[20px] font-semibold">Rating & Reviews</h3>
        <div className="my-6">
          <span className="text-[36px] font-medium text-[#ffca08]">★</span>
          <span className="mx-0.5 text-[32px] font-medium">
            {cakeData.rating}
          </span>
          <span className="text-[32px] font-medium text-gray-800">/ 5</span>
        </div>

        <ProductReviews reviews={dummyReviews} />
      </div>
    </section>
  );
}

export default ProductContent;
