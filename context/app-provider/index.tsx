"use client";

import { createContext, useCallback, useContext, useState } from "react";

import { Cake } from "@prisma/client";

import { SessionCartItem, SessionWishlistItem } from "@/types/next-auth";

import useCartApi from "./use-cart-api";
import useWishlistApi from "./use-wishlist-api";

interface AppContextValue {
  showCartModal: boolean;
  showLoginRequiredModal: boolean;
  cartItems: SessionCartItem[];
  wishlistItems: SessionWishlistItem[];
  toggleCartModal: () => void;
  toggleLoginRequiredModal: () => void;
  closeLoginRequiredModal: () => void;
  addToCart: (
    cakeId: string,
    cakeQuantity: number,
    cakeWeight: number | undefined,
    cakeMessage: string,
    cakeData: Cake,
  ) => Promise<void>;
  increaseCartItemQuantity: (itemId: string) => void;
  decreaseCartItemQuantity: (itemId: string) => void;
  deleteCartItem: (itemId: string) => void;
  toggleWishlistItem: (cakeId: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);
export const useAppContext = () => {
  return useContext(AppContext) as AppContextValue;
};

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: Readonly<AppProviderProps>) {
  const [showLoginRequiredModal, setShowLoginRequiredModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const toggleCartModal = useCallback(() => {
    setShowCartModal((prev) => !prev);
  }, []);

  const toggleLoginRequiredModal = useCallback(() => {
    setShowLoginRequiredModal((prev) => !prev);
  }, []);

  const closeLoginRequiredModal = useCallback(() => {
    setShowLoginRequiredModal(false);
  }, []);

  const {
    cartItems,
    addToCart,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    deleteCartItem,
  } = useCartApi({ toggleLoginRequiredModal });

  const { wishlistItems, toggleWishlistItem } = useWishlistApi({
    toggleLoginRequiredModal,
  });

  return (
    <AppContext.Provider
      value={{
        showCartModal,
        showLoginRequiredModal,
        cartItems,
        wishlistItems,
        toggleCartModal,
        toggleLoginRequiredModal,
        closeLoginRequiredModal,
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
