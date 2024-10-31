import { type SessionCartItemCake } from "@/types/next-auth";

import { useAppContext } from "@/context/app-provider";
import { findDiscountedPrice, formatPrice } from "@/lib/pricing";

interface CartItemProps {
  itemId: string;
  quantity: number;
  cakeData: SessionCartItemCake;
}

function CartItem({ itemId, quantity, cakeData }: Readonly<CartItemProps>) {
  const { increaseCartItemQuantity, decreaseCartItemQuantity } =
    useAppContext();

  return (
    <div className="group flex w-full items-center gap-2 rounded-md">
      <img
        src={`${cakeData.imgSrc}?tr=w-320,h-320,q-70`}
        alt="cake_image"
        className="h-[52px] rounded-md"
      />

      <div className="w-full">
        <p className="font-medium">{cakeData.name}</p>
        <span className="mr-2 font-semibold">
          ₹{" "}
          {formatPrice(
            (cakeData.discountedPrice ??
              findDiscountedPrice(cakeData.listPrice)) * quantity,
          )}
        </span>
        <span className="mr-2 text-[15px] text-gray-800 line-through">
          ₹ {formatPrice(cakeData.listPrice)}
        </span>
        {cakeData?.rating > 0 && (
          <span className="rounded bg-[#1c9550]/10 px-0.5 py-0.5 text-sm font-medium text-[#1c9550]">
            {cakeData.rating} ★
          </span>
        )}
      </div>

      <div className="w-fit">
        <div className="ml-auto flex h-fit w-fit items-center rounded-md bg-orange-600 font-medium text-white">
          <button
            type="button"
            className="px-3 py-1"
            onClick={() => decreaseCartItemQuantity(itemId)}
          >
            -
          </button>
          <div className="select-none">{quantity}</div>
          <button
            type="button"
            className="px-3 py-1"
            onClick={() => increaseCartItemQuantity(itemId)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
