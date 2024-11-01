import { type SessionCartItemCake } from "@/types/next-auth";

import { useAppContext } from "@/context/app-provider";
import { findDiscountedPrice, formatPrice } from "@/lib/pricing";

interface CartItemProps {
  itemId: string;
  quantity: number;
  cakeWeight?: number;
  cakeData: SessionCartItemCake;
}

function CartItem({
  itemId,
  cakeWeight,
  quantity,
  cakeData,
}: Readonly<CartItemProps>) {
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
        <p className="font-medium leading-snug text-[15px]">{cakeData.name}</p>
        <p className="flex items-center gap-1.5 text-sm mt-1">
          <span className="">
            ₹{" "}
            {formatPrice(
              (cakeData.discountedPrice ??
                findDiscountedPrice(cakeData.listPrice)) * quantity,
            )}
          </span>
          <span className="space-x-1.5">
            <span className="text-gray-900">•</span>
            <span className="">
              {cakeWeight ? `${cakeWeight} Kg` : "200 gm"}
            </span>
          </span>
        </p>
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
