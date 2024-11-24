"use client";

import { useMemo } from "react";

import { RemoveScroll } from "react-remove-scroll";

import Button from "@/components/base/button";
import { useAppContext } from "@/context/app-provider";
import { CloseIcon } from "@/lib/icons/global";

import BillDetails from "./bill-details";
import CartFooter from "./cart-footer";
import CartItem from "./cart-item";
import { EmptyCartIcon } from "./icons";

function CartModal() {
  const { cartItems, showCartModal, toggleCartModal } = useAppContext();

  const totalDiscountedPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const discountedPrice = item.cake.discountedPrice ?? item.cake.listPrice;
      return acc + discountedPrice * item.quantity;
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
        className="fixed left-0 top-0 z-[1000] h-screen w-full bg-black/90 text-gray-975 backdrop-blur-sm"
        onClick={toggleCartModal}
      >
        <div
          className="absolute right-0 top-0 h-full w-full overflow-y-auto bg-gray-100 md:w-[440px] md:rounded-l-md md:bg-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky right-0 top-0 flex w-full items-center justify-between bg-white px-5 py-4 shadow-md max-md:rounded-b-md">
            <h2 className="text-center text-2xl">My Cart</h2>
            <button
              className="grid h-10 w-10 place-items-center rounded-md hover:text-brand-600"
              onClick={toggleCartModal}
            >
              <CloseIcon className="h-8 w-8" />
            </button>
          </div>

          <div
            className="min-h-[calc(100vh-174.5px)] space-y-3 px-5 py-3"
            style={{ minHeight: "calc(100dvh - 174.5px)" }}
          >
            {cartItems.length === 0 && (
              <div
                className="flex h-[calc(100vh-72px-24px)] translate-y-[-5%] flex-col items-center justify-center"
                style={{ height: "calc(100dvh - 72px - 24px)" }}
              >
                <EmptyCartIcon />
                <div className="mt-10 w-[300px] text-pretty text-center md:w-[320px]">
                  <h3 className="text-xl">Your Cart is empty!</h3>
                  <p className="mt-4 leading-snug text-gray-900">
                    Look&apos;s like your haven&apos;t added anything to your
                    cart yet.
                  </p>
                  <Button className="mt-10" onClick={toggleCartModal}>
                    Start Shopping
                  </Button>
                </div>
              </div>
            )}
            {cartItems.length > 0 && (
              <>
                <div className="rounded-md bg-white p-2">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      itemId={item.id}
                      cakeWeight={item.cakeWeight}
                      cakeMessage={item.cakeMessage}
                      quantity={item.quantity}
                      cakeData={item.cake}
                    />
                  ))}
                </div>
                <div className="rounded-md bg-white p-2">
                  <BillDetails
                    totalDiscountedPrice={totalDiscountedPrice}
                    totalListPrice={totalListPrice}
                  />
                </div>
              </>
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
