"use client";

import { useAppContext } from "@/context/AppProvider/AppProvider";
import { RemoveScroll } from "react-remove-scroll";
import { CloseIcon, ItemsListIcon, DeliveryIcon } from "@/Icons/Icons";
import { CakeCategories } from "@/types/global";
import findOrgPrice from "@/utils/findOrgPrice";

function CartModal() {
  const { isCartModalOpen, cartItems, toggleCartModal } = useAppContext();

  if (!isCartModalOpen) {
    return null;
  }

  return (
    <RemoveScroll>
      <div
        className="fixed left-0 top-0 z-[1000] h-screen w-full bg-black/90 text-gray-975"
        onClick={toggleCartModal}
      >
        <div
          className="absolute right-0 top-0 h-full overflow-y-auto rounded-l-md bg-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky right-0 top-0 flex w-[480px] justify-between bg-white px-5 py-4 shadow-md">
            <h2 className="text-center text-[28px]">My Cart</h2>
            <button
              className="grid h-10 w-10 place-items-center rounded-md hover:text-orange-600"
              onClick={toggleCartModal}
            >
              <CloseIcon className="z h-8 w-8" />
            </button>
          </div>

          <div
            className="min-h-[calc(100vh-174.5px)] space-y-3 px-5 py-3"
            style={{ minHeight: "calc(100dvh - 174.5px)" }}
          >
            {cartItems.length > 0 && (
              <>
                <div className="space-y-5 rounded-md bg-white p-2">
                  {cartItems.map((item) => (
                    <CartItem data={item} key={item.id} />
                  ))}
                </div>

                <div className="rounded-md bg-white p-2">
                  <BillDetails />
                </div>
              </>
            )}
            {cartItems.length === 0 && (
              <p className="text-center">No items in cart found!</p>
            )}
          </div>

          <CartFooter />
        </div>
      </div>
    </RemoveScroll>
  );
}

type CartItemData = {
  id: string;
  name: string;
  imgSrc: string;
  category: CakeCategories;
  currPrice: number;
  originalPrice: number | null;
  rating: number | null;
};

function CartItem({ data }: Readonly<{ data: CartItemData }>) {
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

function BillDetails({ data }: Readonly<{ data: CartItemData }>) {
  return (
    <>
      <h4 className="mb-2 font-semibold">Bill Details</h4>

      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <ItemsListIcon className="h-[18px]" />
          <p className="text-[15px]">Items total</p>
        </div>
        <div>
          <span className="mr-2 text-sm font-medium">₹ 499</span>
          <span className="text-sm text-gray-800 line-through">₹ 549</span>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <DeliveryIcon className="h-[18px]" />
          <p className="text-[15px]">Delivery charge</p>
        </div>
        <div>
          <span className="mr-2 text-sm font-medium">FREE</span>
          <span className="text-sm text-gray-800 line-through">₹ 25</span>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <h4 className="text-[15px] font-semibold">Grand total</h4>
        <span className="text-sm font-semibold">₹ 499</span>
      </div>
    </>
  );
}

function CartFooter() {
  return (
    <div className="sticky bottom-0 right-0 w-[480px] rotate-180 rounded-md bg-white px-3 py-5 shadow-md">
      <button
        type="button"
        className="flex w-full rotate-180 items-center justify-between rounded-md bg-orange-600 px-3 py-3 text-white"
      >
        <div className="flex flex-col leading-snug">
          <span className="text-[15px] font-semibold">₹ 1499</span>
          <span className="text-[13px] tracking-wide text-orange-200">
            TOTAL
          </span>
        </div>
        <span className="text-[18px]">Login to Proceed {">"}</span>
      </button>
    </div>
  );
}

export default CartModal;
