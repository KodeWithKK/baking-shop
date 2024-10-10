"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { Fragment, useMemo } from "react";
import { useAppContext } from "@/context/app-provider";
import { RemoveScroll } from "react-remove-scroll";
import CartItem from "./cart-item";
import BillDetails from "./bill-details";
import CartFooter from "./cart-footer";
import { CloseIcon } from "@/lib/icons/global";
import { findDiscountedPrice } from "@/lib/pricing";

function CartModal() {
  const { cartItems, showCartModal, toggleCartModal } = useAppContext();

  const totalDiscountedPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const discountedPrice =
        item.cake.discountedPrice ?? findDiscountedPrice(item.cake.listPrice);
      return acc + discountedPrice;
    }, 0);
  }, [cartItems]);

  const totalListPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.cake.listPrice, 0);
  }, [cartItems]);

  if (!showCartModal) {
    return null;
  }

  return (
    <RemoveScroll>
      <div
        className="fixed left-0 top-0 z-[1000] h-screen w-full bg-black/90 text-gray-975"
        onClick={toggleCartModal}
      >
        <div
          className="absolute right-0 top-0 h-full w-full overflow-y-auto bg-gray-100 md:w-[440px] md:rounded-l-md md:bg-gray-200"
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
              <Fragment>
                <div className="space-y-5 rounded-md bg-white p-2">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} cakeData={item.cake} />
                  ))}
                </div>
                <div className="rounded-md bg-white p-2">
                  <BillDetails
                    totalDiscountedPrice={totalDiscountedPrice}
                    totalListPrice={totalListPrice}
                  />
                </div>
              </Fragment>
            )}
            {cartItems.length === 0 && (
              <p className="text-center">No items in cart found!</p>
            )}
          </div>

          {cartItems.length > 0 && (
            <CartFooter totalDiscountedPrice={totalDiscountedPrice} />
          )}
        </div>
      </div>
    </RemoveScroll>
  );
}

export default CartModal;
