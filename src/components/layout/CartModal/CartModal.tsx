"use client";

import { useAppContext } from "@/context/AppProvider/AppProvider";
import { CloseIcon, ItemsListIcon, DeliveryIcon } from "@/Icons/Icons";
import Link from "next/link";

function CartModal() {
  const { isCartModalOpen, toggleCartModal } = useAppContext();

  if (!isCartModalOpen) {
    return null;
  }

  return (
    <div
      className="fixed left-0 top-0 z-[1000] h-screen w-full bg-black/90 text-gray-975"
      onClick={toggleCartModal}
    >
      <div
        className="absolute right-0 top-0 h-full w-[480px] overflow-hidden rounded-l-md bg-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between bg-white px-5 py-4">
          <h2 className="text-center text-[28px]">My Cart</h2>
          <button
            className="grid h-10 w-10 place-items-center rounded-md hover:text-orange-600"
            onClick={toggleCartModal}
          >
            <CloseIcon className="h-8 w-8" />
          </button>
        </div>

        <div className="mx-5 mt-4 overflow-hidden rounded-md bg-white">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="mx-5 mt-4 rounded-md bg-white p-2">
          <BillDetails />
        </div>
      </div>
    </div>
  );
}

function CartItem() {
  return (
    <Link href="/" className="flex items-start gap-2 p-2">
      <img
        src="https://bkmedia.bakingo.com/sq-butterscotch-cake0003butt-AAA_0.jpg?tr=w-320,h-320,q-70"
        alt="cake_image"
        className="h-[52px] rounded-md"
      />

      <div className="w-full">
        <p className="font-medium">Round Shape Butterscotch Cake</p>
        <span className="mr-2 font-semibold">₹ 499</span>
        <span className="mr-2 text-[15px] text-gray-800 line-through">
          ₹ 549
        </span>
        <span className="rounded bg-[#1c9550]/10 px-0.5 py-0.5 text-sm font-medium text-[#1c9550]">
          4.9 ★
        </span>
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
    </Link>
  );
}

function BillDetails() {
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

export default CartModal;
