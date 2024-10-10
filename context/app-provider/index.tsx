"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import useApiHooks from "./use-api";
import { Cake } from "@prisma/client";
import { SessionCartItem } from "@/types/next-auth";

const defaultValues = {
  showCartModal: false as boolean,
  cartItems: [] as SessionCartItem[],
  toggleCartModal: () => {},
  addToCart: (
    cakeId: string,
    cakeWeight: number | undefined,
    cakeData: Cake,
  ) => {},
};

const AppContext = createContext(defaultValues);
export const useAppContext = () => useContext(AppContext);

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: Readonly<AppProviderProps>) {
  const [showCartModal, setShowCartModal] = useState<boolean>(false);

  const { cartItems, addToCart } = useApiHooks();

  const toggleCartModal = useCallback(() => {
    setShowCartModal((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      showCartModal,
      cartItems,
      toggleCartModal,
      addToCart,
    }),
    [showCartModal, cartItems, toggleCartModal, addToCart],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
