"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { Cake } from "@prisma/client";

import { SessionCartItem, SessionWishlistItem } from "@/types/next-auth";

import useCartApi from "./use-cart-api";
import useWishlistApi from "./use-wishlist-api";

const defaultValues = {
  showCartModal: false as boolean,
  cartItems: [] as SessionCartItem[],
  wishlistItems: [] as SessionWishlistItem[],
  toggleCartModal: () => {},
  addToCart: (
    cakeId: string,
    cakeWeight: number | undefined,
    cakeData: Cake,
  ) => {},
  increaseCartItemQuantity: (itemId: string) => {},
  decreaseCartItemQuantity: (itemId: string) => {},
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
  } = useCartApi();
  const { wishlistItems, toggleWishlistItem } = useWishlistApi();

  const toggleCartModal = useCallback(() => {
    setShowCartModal((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      showCartModal,
      cartItems,
      wishlistItems,
      toggleCartModal,
      addToCart,
      increaseCartItemQuantity,
      decreaseCartItemQuantity,
      toggleWishlistItem,
    }),
    [
      showCartModal,
      cartItems,
      wishlistItems,
      toggleCartModal,
      addToCart,
      increaseCartItemQuantity,
      decreaseCartItemQuantity,
      toggleWishlistItem,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
