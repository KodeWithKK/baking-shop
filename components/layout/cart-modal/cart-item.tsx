import findOrgPrice from "@/utils/findOrgPrice";
import { CartItemDataType } from "./types";

function CartItem({ data }: Readonly<{ data: CartItemDataType }>) {
  return (
    <div className="group flex w-full items-center gap-2 rounded-md">
      <img
        src={`${data.imgSrc}?tr=w-320,h-320,q-70`}
        alt="cake_image"
        className="h-[52px] rounded-md"
      />

      <div className="w-full">
        <p className="font-medium">{data.name}</p>
        <span className="mr-2 font-semibold">₹ {data.currPrice}</span>
        <span className="mr-2 text-[15px] text-gray-800 line-through">
          ₹ {data?.originalPrice ?? findOrgPrice(data.currPrice)}
        </span>
        {data?.rating && (
          <span className="rounded bg-[#1c9550]/10 px-0.5 py-0.5 text-sm font-medium text-[#1c9550]">
            {data.rating} ★
          </span>
        )}
      </div>

      <div className="w-fit">
        <div className="ml-auto flex h-fit w-fit items-center rounded-md bg-orange-600 font-medium text-white">
          <button type="button" className="px-3 py-1">
            -
          </button>
          <div className="select-none">1</div>
          <button type="button" className="px-3 py-1">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
