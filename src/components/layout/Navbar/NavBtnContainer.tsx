"use client";

import { CartOutlineIcon, HeartOutlineIcon } from "@/Icons/Icons";
import { useAppContext } from "@/context/AppProvider/AppProvider";

function NavBtnContainer() {
  const { wishlistItems, cartItems, toggleCartModal } = useAppContext();

  return (
    <div className="flex items-center">
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
      className="flex items-center gap-[5px] rounded-lg px-[10px] py-[7px] hover:bg-orange-600/[.15]"
      onClick={onClick}
    >
      <Icon className="h-[24px] max-md:h-[28px]" />{" "}
      <div className="max-md:hidden">{children}</div>
    </button>
  );
}

export default NavBtnContainer;
