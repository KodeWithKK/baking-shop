import { type SessionCartItemCake } from "@/types/next-auth";

import { useAppContext } from "@/context/app-provider";
import { DeleteIcon, MessageIcon } from "@/lib/icons/global";
import { findDiscountedPrice, formatPrice } from "@/lib/pricing";

interface CartItemProps {
  itemId: string;
  quantity: number;
  cakeWeight?: number;
  cakeMessage: string;
  cakeData: SessionCartItemCake;
}

function CartItem({
  itemId,
  cakeWeight,
  quantity,
  cakeMessage,
  cakeData,
}: Readonly<CartItemProps>) {
  const { increaseCartItemQuantity, decreaseCartItemQuantity, deleteCartItem } =
    useAppContext();

  return (
    <div className="border-b py-2 first:pt-0 last:border-b-0 last:pb-0">
      <div className="group flex h-full w-full gap-2">
        <img
          src={`${cakeData.imgSrc}?tr=w-320,h-320,q-70`}
          alt="cake_image"
          className="h-[62px] rounded-md"
        />

        <div className="flex-1">
          <p className="text-[15px] font-medium leading-snug">
            {cakeData.name}
          </p>

          <p className="mt-1 flex items-center gap-1.5 text-sm">
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

          {cakeMessage && (
            <div className="mt-0.5 flex items-center border-gray-400 text-sm">
              <MessageIcon className="mr-1 w-[18px]" />
              <span className="text-brand-600 mx-0.5 font-semibold">❝</span>
              {cakeMessage}
              <span className="text-brand-600 mx-0.5 font-semibold">❞</span>
            </div>
          )}
        </div>

        <div className="flex flex-col items-end justify-between">
          <button type="button" onClick={() => deleteCartItem(itemId)}>
            <DeleteIcon className="text text-brand-600 h-[18px]" />
          </button>

          <div className="bg-brand-600 flex items-center rounded-md font-medium text-white">
            <button
              type="button"
              className="px-2.5 py-1"
              onClick={() => decreaseCartItemQuantity(itemId)}
            >
              -
            </button>
            <div className="select-none">{quantity}</div>
            <button
              type="button"
              className="px-2.5 py-1"
              onClick={() => increaseCartItemQuantity(itemId)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
