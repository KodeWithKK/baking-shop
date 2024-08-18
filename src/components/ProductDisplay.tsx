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

function ProductDisplay({ data }: { data: CakesData }) {
  return (
    <section className="flex h-[calc(100vh-71px)] gap-6 overflow-y-hidden px-[100px] py-[20px]">
      <div className="h-[calc(100vh-70px-53px-70px)] basis-[71%]">
        <img
          src={data.imgSrc}
          alt="cake-image"
          className="h-full w-full rounded-lg object-cover"
        />
        <div className="mt-3 flex gap-3">
          <AddToCart />
          <BuyNowButton />
        </div>
      </div>

      <div className="hide-scrollbar w-full overflow-y-scroll">
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

        <div className="mb-6">
          <p className="text-[15px] font-medium">Select Quantity</p>
          <div className="mt-[10px] flex gap-3">
            {[...Array(5)].map((_, idx) => (
              <button
                key={idx}
                className="inline-block w-[75px] rounded-lg border border-gray-500 py-[10px] text-center"
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label
            className="mb-1 block text-[15px] font-medium"
            htmlFor="cake-message"
          >
            Cake Message
          </label>
          <input
            type="text"
            name="cake-message"
            id="cake-message"
            placeholder="Enter message on cake"
            className="w-full rounded-lg border border-gray-500 p-[10px] placeholder:text-gray-800"
          />
        </div>

        <div className="mb-7">
          <label
            className="mb-1 block text-[15px] font-medium"
            htmlFor="delivery-location"
          >
            Delivery Location
          </label>
          <input
            type="text"
            name="delivery-location"
            id="delivery-location"
            placeholder="Enter your city"
            className="w-full rounded-lg border border-gray-500 p-[10px] placeholder:text-gray-800"
          />
        </div>

        <hr className="border-gray-400" />

        <div className="mb-6 mt-5">
          <label
            className="mb-1 block text-[15px] font-medium"
            htmlFor="cake-message"
          >
            Product Description
          </label>
          <p>{data.description}</p>
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

function AddToCart() {
  return (
    <button
      type="button"
      className="w-full rounded-lg border border-orange-600 py-4 text-orange-600"
    >
      Add To Card
    </button>
  );
}

function BuyNowButton() {
  return (
    <button
      type="button"
      className="w-full rounded-lg bg-orange-600 py-4 text-white"
    >
      Buy Now
    </button>
  );
}

function findOrgPrice(currPrice: number): number {
  const price = Math.trunc(currPrice * 1.11);
  const remaining = 9 - (price % 10);
  return price + remaining;
}

function findDiscount(currPrice: number, orgPrice: number | null): number {
  const ogPrice = orgPrice ?? findOrgPrice(currPrice);
  return Math.trunc(((ogPrice - currPrice) / ogPrice) * 100);
}

export default ProductDisplay;
