"use client";

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
      </div>
    </div>
  );
}

export default WishlistModal;
