import bestsellerCakes from "@/data/bestSeller";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  const cake = bestsellerCakes.find((cake) => cake.id === params.id);

  if (!cake) return <h3>Cake Not Found</h3>;

  return (
    <div className="flex gap-6 px-[100px] py-[20px]">
      <div className="h-[calc(100vh-70px-53px-70px)] basis-[71%]">
        <img
          src={cake.imgSrc}
          alt="cake-image"
          className="h-full w-full rounded-lg object-cover"
        />
        <div className="mt-3 flex gap-3">
          <AddToCart />
          <BuyNowButton />
        </div>
      </div>

      <div className="w-full">
        <div>
          <h3 className="font-semibold">{cake?.name}</h3>
          <p className="mt-1">
            <span className="font-bold">4.9</span>
            <span className="ml-0.5 text-xl text-[#e3b100]">★</span>
            <span className="ml-2 text-sm text-[#468FCE]">
              ({cake.totalReviews} Reviews)
            </span>
          </p>
        </div>

        <hr className="mt-[10px] border-gray-400" />

        <div className="my-6">
          <span className="mr-3 text-[18px] font-semibold">
            ₹ {cake.currPrice}
          </span>
          <span className="text-gray-800 line-through">
            ₹ {cake?.originalPrice ?? findOrgPrice(cake.currPrice)}
          </span>
          <span className="ml-3 mr-2 font-medium text-[#1C9550]">
            ({findDiscount(cake.currPrice, cake?.originalPrice)}% OFF){" "}
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
                {idx}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="text-[15px] font-medium" htmlFor="cake-message">
            Cake Message
          </label>
          <input
            type="text"
            name="cake-message"
            id="cake-message"
            placeholder="Enter message on cake"
            className="my-[10px] w-full rounded-lg border border-gray-500 p-[10px] placeholder:text-gray-800"
          />
        </div>

        <div className="mb-6">
          <label className="text-[15px] font-medium" htmlFor="cake-message">
            Delivery Location
          </label>
          <input
            type="text"
            name="cake-message"
            id="cake-message"
            placeholder="Enter your city"
            className="my-[10px] w-full rounded-lg border border-gray-500 p-[10px] placeholder:text-gray-800"
          />
        </div>

        <hr className="mt-[10px] border-gray-400" />
      </div>
    </div>
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
