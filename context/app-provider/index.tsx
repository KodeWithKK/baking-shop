"use client";

import { createContext, useCallback, useContext, useState } from "react";

import { Cake } from "@prisma/client";

import { SessionCartItem, SessionWishlistItem } from "@/types/next-auth";

import useCartApi from "./use-cart-api";
import useWishlistApi from "./use-wishlist-api";

const defaultValues = {
  showCartModal: false as boolean,
  cartItems: [] as SessionCartItem[],
  wishlistItems: [] as SessionWishlistItem[],
  toggleCartModal: () => {},
  addToCart: async (
    cakeId: string,
    cakeQuantity: number,
    cakeWeight: number | undefined,
    cakeMessage: string,
    cakeData: Cake,
  ) => {},
  increaseCartItemQuantity: (itemId: string) => {},
  decreaseCartItemQuantity: (itemId: string) => {},
  deleteCartItem: (itemId: string) => {},
  toggleWishlistItem: (cakeId: string) => {},
};

const AppContext = createContext(defaultValues);
export const useAppContext = () => useContext(AppContext);

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: Readonly<AppProviderProps>) {
  const [showCartModal, setShowCartModal] = useState<boolean>(false);

  const {
    cartItems,
    addToCart,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    deleteCartItem,
  } = useCartApi();
  const { wishlistItems, toggleWishlistItem } = useWishlistApi();

  const toggleCartModal = useCallback(() => {
    setShowCartModal((prev) => !prev);
  }, []);

  return (
    <AppContext.Provider
      value={{
        showCartModal,
        cartItems,
        wishlistItems,
        toggleCartModal,
        addToCart,
        increaseCartItemQuantity,
        decreaseCartItemQuantity,
        deleteCartItem,
        toggleWishlistItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
