import ProductHeading from "./product-heading";
import ProductForm from "./product-form";
import WrappedText from "@/components/features/wrapped-text";
import { Cake } from "@prisma/client";
import { findDiscountedPrice, findDiscount, formatPrice } from "@/lib/pricing";
import { dummyReviews } from "./utils";
import { Review } from "@/types/global";

function ProductContent({ cakeData }: Readonly<{ cakeData: Cake }>) {
  return (
    <section className="w-full">
      <ProductHeading cakeData={cakeData} />

      <hr className="mt-[10px] border-gray-400" />

      <div className="my-6">
        <span className="mr-3 text-[18px] font-semibold">
          ₹{" "}
          {formatPrice(
            cakeData.discountedPrice ?? findDiscountedPrice(cakeData.listPrice),
          )}
        </span>
        <span className="text-gray-800 line-through">
          ₹ {formatPrice(cakeData.listPrice)}
        </span>
        <span className="ml-3 mr-2 font-medium text-[#1C9550]">
          ({findDiscount(cakeData.listPrice, cakeData.discountedPrice)}% OFF){" "}
        </span>
        <span className="rounded-md bg-gray-300 px-[10px] py-1 text-[11px] font-semibold">
          (Inclusive of GST)
        </span>
      </div>

      <ProductForm category={cakeData.category} />

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
        className="my-6 h-[135px] w-[400px] rounded-lg bg-gray-600"
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

function ProductReviews({ reviews }: Readonly<{ reviews: Review[] }>) {
  return (
    <div>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border-b border-gray-400 py-2.5 first:border-t"
        >
          <p>
            <span className="text-[15px] font-bold">{review.name}</span>
            <span className="ml-2 rounded bg-[#1C9550]/10 px-1 py-0.5 text-[13px] font-medium text-[#1C9550]">
              {review.rating} ★
            </span>
          </p>
          <p className="text-[12px] text-gray-700">
            <span>Posted on {review.postedOn} • </span>
            <span>{review.location}</span>
          </p>
          <p className="text-[15px]">{review.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductContent;
