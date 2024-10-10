import { formatPrice } from "@/lib/pricing";

function CartFooter({
  totalDiscountedPrice,
}: Readonly<{ totalDiscountedPrice: number }>) {
  return (
    <div className="sticky bottom-0 right-0 w-full rotate-180 rounded-md bg-white px-3 py-5 shadow-md">
      <button
        type="button"
        className="flex w-full rotate-180 items-center justify-between rounded-md bg-orange-600 px-3 py-3 text-white"
      >
        <div className="flex flex-col leading-snug">
          <span className="text-[15px] font-semibold">
            ₹ {formatPrice(totalDiscountedPrice)}
          </span>
          <span className="text-[13px] tracking-wide text-orange-200">
            TOTAL
          </span>
        </div>
        <span className="text-[18px]">Login to Proceed {">"}</span>
      </button>
    </div>
  );
}

export default CartFooter;
