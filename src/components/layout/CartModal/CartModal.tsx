"use client";

import { useMemo } from "react";
import { useAppContext } from "@/context/AppProvider/AppProvider";
import { RemoveScroll } from "react-remove-scroll";
import CartItem from "./CartItem";
import BillDetails from "./BillDetails";
import CartFooter from "./CartFooter";
import { CloseIcon } from "@/Icons/Icons";
import findOrgPrice from "@/utils/findOrgPrice";

function CartModal() {
  const { isCartModalOpen, cartItems, toggleCartModal } = useAppContext();

  const totalBuyPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.currPrice, 0);
  }, [cartItems]);

  const totalCostPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      if (item?.originalPrice) {
        return acc + item.originalPrice;
      } else {
        return acc + findOrgPrice(item.currPrice);
      }
    }, 0);
  }, [cartItems]);

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
          className="absolute right-0 top-0 h-full w-full overflow-y-auto bg-gray-100 md:w-[480px] md:rounded-l-md md:bg-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky right-0 top-0 flex w-full justify-between bg-white px-5 py-4 shadow-md max-md:rounded-b-md">
            <h2 className="text-center text-[28px]">My Cart</h2>
            <button
              className="grid h-10 w-10 place-items-center rounded-md hover:text-orange-600"
              onClick={toggleCartModal}
            >
              <CloseIcon className="h-8 w-8" />
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
                  <BillDetails
                    totalBuyPrice={totalBuyPrice}
                    totalCostPrice={totalCostPrice}
                  />
                </div>
              </>
            )}
            {cartItems.length === 0 && (
              <p className="text-center">No items in cart found!</p>
            )}
          </div>

          {cartItems.length > 0 && <CartFooter totalBuyPrice={totalBuyPrice} />}
        </div>
      </div>
    </RemoveScroll>
  );
}

export default CartModal;
