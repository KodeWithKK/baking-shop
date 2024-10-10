"use client";

import { useCallback, useState } from "react";
import { useAppContext } from "@/context/app-provider";
import { useCurrentUser } from "@/hooks/use-current-user";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Button from "@/components/base/button";
import NavButton from "./nav-btn";
import UserOptions from "./user-options";

import {
  CartOutlineIcon,
  HeartOutlineIcon,
  UserCircledIcon,
} from "@/lib/icons/global";
import { findDiscountedPrice } from "@/lib/pricing";

function NavBtnContainer() {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { toggleCartModal } = useAppContext();
  const user = useCurrentUser();
  const pathname = usePathname();

  const wishlistItems = [];
  const cartItems = user?.cartItems ?? [];

  const handleCloseOptions = useCallback(() => {
    setShowOptions(false);
  }, []);

  return (
    <div className="relative flex items-center text-[15px] font-medium text-orange-600">
      {/* Wishlist */}
      <NavButton Icon={HeartOutlineIcon}>
        {wishlistItems.length === 0 && "Wishlist"}
        {wishlistItems.length > 0 && (
          <div className="flex flex-col text-sm font-medium leading-tight">
            <span>
              {wishlistItems.length}{" "}
              {wishlistItems.length > 1 ? "Items" : "Item"}
            </span>
          </div>
        )}
      </NavButton>

      {/* Cart */}
      <NavButton Icon={CartOutlineIcon} onClick={toggleCartModal}>
        {cartItems.length === 0 && "Cart"}
        {cartItems.length > 0 && (
          <div className="flex flex-col text-sm font-medium leading-tight">
            <span>
              {cartItems.length} {cartItems.length > 1 ? "Items" : "Item"}
            </span>
            <span>
              ₹{" "}
              {cartItems.reduce((acc, item) => {
                const discountedPrice =
                  item.cake.discountedPrice ??
                  findDiscountedPrice(item.cake.listPrice);

                return acc + discountedPrice;
              }, 0)}
            </span>
          </div>
        )}
      </NavButton>

      {/* Login */}
      {!user && !pathname.startsWith("/auth") && (
        <Link href="/auth/login">
          <Button className="ml-2 text-sm">Sign In</Button>
        </Link>
      )}

      {user && (
        <button
          type="button"
          className="ml-2"
          onClick={() => setShowOptions((prev) => !prev)}
        >
          <UserCircledIcon className="h-[32px]" />
        </button>
      )}

      {user && showOptions && <UserOptions handleClose={handleCloseOptions} />}
    </div>
  );
}

export default NavBtnContainer;
