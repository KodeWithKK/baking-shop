"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "@/components/base/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useAppContext } from "@/context/app-provider";
import { CartOutlineIcon, UserCircledIcon } from "@/lib/icons/global";
import { findDiscountedPrice, formatPrice } from "@/lib/pricing";

import NavButton from "./nav-btn";
import SearchBar from "./search-bar";
import UserOptions from "./user-options";

function NavBtnContainer() {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { cartItems, toggleCartModal } = useAppContext();

  const user = useCurrentUser();
  const pathname = usePathname();

  const handleCloseOptions = useCallback(() => {
    setShowOptions(false);
  }, []);

  const totalCartValue = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const discountedPrice =
        item.cake.discountedPrice ?? findDiscountedPrice(item.cake.listPrice);

      return acc + discountedPrice;
    }, 0);
  }, [cartItems]);

  return (
    <div className="relative flex h-[49px] items-center gap-2.5 text-[15px] font-medium text-brand-600 lg:gap-4">
      {/* Search Bar */}
      <SearchBar />

      {/* Cart */}
      <NavButton Icon={CartOutlineIcon} onClick={toggleCartModal}>
        {cartItems.length === 0 && "Cart"}
        {cartItems.length > 0 && (
          <div className="flex flex-col text-sm font-medium leading-tight">
            <span>
              {cartItems.length} {cartItems.length > 1 ? "Items" : "Item"}
            </span>
            <span>₹ {formatPrice(totalCartValue)}</span>
          </div>
        )}
      </NavButton>

      {/* Login */}
      {!user && !pathname.startsWith("/auth") && (
        <Link href="/auth/login">
          <Button className="text-sm">Sign In</Button>
        </Link>
      )}

      {/* User Menu */}
      {user && (
        <button
          type="button"
          className=""
          onClick={() => setShowOptions((prev) => !prev)}
        >
          {!user.image && <UserCircledIcon className="h-[36px]" />}
          {user.image && (
            <img
              src={user.image}
              className="h-[36px] rounded-full text-[15px] text-gray-900"
              alt="user"
            />
          )}
        </button>
      )}

      {user && showOptions && <UserOptions handleClose={handleCloseOptions} />}
    </div>
  );
}

export default NavBtnContainer;
