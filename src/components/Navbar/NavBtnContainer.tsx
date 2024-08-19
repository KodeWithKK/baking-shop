"use client";

import { CartOutlineIcon, HeartOutlineIcon } from "@/Icons/Icons";
import { useAppContext } from "@/context/AppProvider/AppProvider";

function NavBtnContainer() {
  const { wishlistItems, cartItems } = useAppContext();

  return (
    <div className="flex items-center">
      <NavButton Icon={HeartOutlineIcon}>
        {wishlistItems.length === 0 && "Wishlist"}
        {wishlistItems.length > 0 && (
          <div className="flex flex-col text-sm font-medium leading-tight">
            <span>{wishlistItems.length} Items</span>
            <span>
              ₹ {wishlistItems.reduce((acc, curr) => acc + curr.currPrice, 0)}
            </span>
          </div>
        )}
      </NavButton>
      <NavButton Icon={CartOutlineIcon}>
        {cartItems.length === 0 && "Cart"}
        {cartItems.length > 0 && (
          <div className="flex flex-col text-sm font-medium leading-tight">
            <span>{cartItems.length} Items</span>
            <span>
              ₹ {cartItems.reduce((acc, curr) => acc + curr.currPrice, 0)}
            </span>
          </div>
        )}
      </NavButton>
    </div>
  );
}

type NavButtonProps = {
  Icon: React.ComponentType<{ className: string }>;
  children: React.ReactNode;
};

function NavButton({ Icon, children }: Readonly<NavButtonProps>) {
  return (
    <button
      type="button"
      className="flex items-center gap-[5px] rounded-lg px-[10px] py-[7px] hover:bg-orange-600/[.15]"
    >
      <Icon className="h-[24px]" /> {children}
    </button>
  );
}

export default NavBtnContainer;
