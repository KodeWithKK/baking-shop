"use client";

import {
  CartOutlineIcon,
  HeartOutlineIcon,
  DividerIcon,
  UserOutlineIcon,
} from "@/lib/icons/global";
import { useAppContext } from "@/context/app-provider";

function NavBtnContainer() {
  const { wishlistItems, cartItems, toggleCartModal } = useAppContext();

  return (
    <div className="flex items-center text-[15px] font-medium">
      {/* Wishlist */}
      <NavButton Icon={HeartOutlineIcon}>
        {wishlistItems.length === 0 && "Wishlist"}
        {wishlistItems.length > 0 && (
          <span>
            {wishlistItems.length} {wishlistItems.length > 1 ? "Items" : "Item"}
          </span>
        )}
      </NavButton>

      <DividerIcon className="h-5 text-orange-100" />

      {/* Cart */}
      <NavButton Icon={CartOutlineIcon} onClick={toggleCartModal}>
        {cartItems.length === 0 && "Cart"}
        {cartItems.length > 0 && (
          <span>
            {cartItems.length} {cartItems.length > 1 ? "Items" : "Item"}
          </span>
        )}
      </NavButton>

      <DividerIcon className="h-5 text-orange-100" />

      {/* Login */}
      <NavButton Icon={UserOutlineIcon}>Login</NavButton>
    </div>
  );
}

type NavButtonProps = {
  Icon: React.ComponentType<{ className: string }>;
  children: React.ReactNode;
  onClick?: () => void;
};

function NavButton({ Icon, onClick, children }: Readonly<NavButtonProps>) {
  return (
    <button
      type="button"
      className="group flex items-center gap-[5px] rounded-lg px-[10px] py-[7px]"
      onClick={onClick}
    >
      <Icon className="h-[24px] max-md:h-[28px]" />{" "}
      <div className="decoration-dashed underline-offset-4 group-hover:underline max-md:hidden">
        {children}
      </div>
    </button>
  );
}

export default NavBtnContainer;
