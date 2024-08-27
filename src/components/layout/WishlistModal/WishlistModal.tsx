"use client";

import Link from "next/link";
import { useAppContext } from "@/context/AppProvider/AppProvider";
import { CloseIcon } from "@/Icons/Icons";

function WishlistModal() {
  const { isWishlistModalOpen, toggleWhishlistModal } = useAppContext();

  if (!isWishlistModalOpen) {
    return null;
  }

  return (
    <div
      className="fixed left-0 top-0 z-[1000] h-screen w-full bg-black/90 text-gray-975"
      onClick={toggleWhishlistModal}
    >
      <div
        className="absolute right-0 top-0 h-full w-[480px] overflow-hidden rounded-l-md bg-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between bg-white px-5 py-4">
          <h2 className="text-center text-[28px]">Wishlist</h2>
          <button
            className="grid h-10 w-10 place-items-center rounded-md hover:text-orange-600"
            onClick={toggleWhishlistModal}
          >
            <CloseIcon className="h-8 w-8" />
          </button>
        </div>

        <div className="mx-5 mt-4 space-y-1 overflow-hidden rounded-md bg-white">
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
        </div>
      </div>
    </div>
  );
}

function WishlistItem() {
  return (
    <Link
      href="/"
      className="group flex w-full items-center gap-2 p-2 text-left hover:bg-orange-600/20"
    >
      <img
        src="https://bkmedia.bakingo.com/sq-butterscotch-cake0003butt-AAA_0.jpg?tr=w-320,h-320,q-70"
        alt="cake_image"
        className="w-12 rounded-md"
      />

      <div>
        <p className="font-medium">Round Shape Butterscotch Cake</p>
        <span className="mr-2 font-semibold">₹ 499</span>
        <span className="mr-2 text-[15px] text-gray-800 line-through">
          ₹ 549
        </span>
        <span className="rounded bg-[#1c9550]/10 px-0.5 py-0.5 text-sm font-medium text-[#1c9550]">
          4.9 ★
        </span>
      </div>

      <button
        type="button"
        className="ml-auto hidden h-fit w-fit items-center rounded-md bg-orange-600/20 font-medium text-orange-600 group-hover:flex"
      >
        <CloseIcon className="h-8" />
      </button>
    </Link>
  );
}

export default WishlistModal;
