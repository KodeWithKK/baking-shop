import ProductAction from "./ProductAction";
import ProductForm from "./ProductForm";
import { findDiscount, findOrgPrice } from "./utils";

import { CakeCategories } from "@/types/global";

type Reviews = {
  id: string;
  name: string;
  rating: number;
  postedOn: string;
  location: string;
  ocassion: string;
  message: string;
};

type CakesData = {
  id: string;
  name: string;
  totalReviews?: number;
  originalPrice: number | null;
  currPrice: number;
  imgSrc: string;
  rating: number | null;
  description: string;
  reviews: Reviews[];
};

type Props = {
  readonly data: CakesData;
  readonly category: CakeCategories;
};

function ProductDisplay({ data, category }: Props) {
  return (
    <section className="relative flex gap-6 px-[100px] py-[20px]">
      <div className="sticky left-0 top-[91px] h-[calc(100vh-70px-53px-70px)] w-[71%]">
        <img
          src={data.imgSrc}
          alt="cake-image"
          className="h-full w-full rounded-lg object-cover"
        />
        <ProductAction productId={data.id} category={category} />
      </div>

      <div className="hide-scrollbar w-full">
        <div>
          <h3 className="font-semibold">{data.name}</h3>
          <p className="mt-1">
            <span className="font-bold">{data.rating}</span>
            <span className="ml-0.5 text-xl text-[#e3b100]">★</span>
            <span className="ml-2 text-sm text-[#468FCE]">
              ({data.totalReviews} Reviews)
            </span>
          </p>
        </div>

        <hr className="mt-[10px] border-gray-400" />

        <div className="my-6">
          <span className="mr-3 text-[18px] font-semibold">
            ₹ {data.currPrice}
          </span>
          <span className="text-gray-800 line-through">
            ₹ {data?.originalPrice ?? findOrgPrice(data.currPrice)}
          </span>
          <span className="ml-3 mr-2 font-medium text-[#1C9550]">
            ({findDiscount(data.currPrice, data.originalPrice)}% OFF){" "}
          </span>
          <span className="rounded-md bg-gray-300 px-[10px] py-1 text-[11px] font-semibold">
            (Inclusive of GST)
          </span>
        </div>

        <ProductForm category={category} />

        <hr className="border-gray-400" />

        <div className="mb-6 mt-5">
          <label
            className="mb-1 block text-[15px] font-medium"
            htmlFor="cake-message"
          >
            Product Description
          </label>
          <p className="text-[15px]">{data.description}</p>
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
              {data.rating}
            </span>
            <span className="text-[32px] font-medium text-gray-800">/ 5</span>
          </div>

          <div>
            {data.reviews.map((review) => (
              <div
                key={review.id}
                className="border-b border-gray-400 py-2.5 first:border-t"
              >
                <p>
                  <span className="text-[15px] font-bold">{review.name}</span>
                  <span className="ml-2 rounded bg-[#1C9550]/10 px-1 py-0.5 text-sm text-[#1C9550]">
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
        </div>
      </div>
    </section>
  );
}
export default ProductDisplay;
