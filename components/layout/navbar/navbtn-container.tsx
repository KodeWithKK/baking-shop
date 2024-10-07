"use client";

import { useAppContext } from "@/context/app-provider";
import { useCurrentUser } from "@/hooks/use-current-user";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Button from "@/components/base/button";
import NavButton from "./nav-btn";
import { CartOutlineIcon, HeartOutlineIcon } from "@/lib/icons/global";

function NavBtnContainer() {
  const { wishlistItems, cartItems, toggleCartModal } = useAppContext();
  const user = useCurrentUser();
  const pathname = usePathname();

  return (
    <div className="flex items-center text-[15px] font-medium text-orange-600">
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
              ₹ {cartItems.reduce((acc, curr) => acc + curr.currPrice, 0)}
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
    </div>
  );
}

export default NavBtnContainer;
