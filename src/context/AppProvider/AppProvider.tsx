"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { produce } from "immer";
import { findCake } from "./utils";
import { CakeCategories } from "@/types/global";

type ListItem = {
  id: string;
  category: CakeCategories;
  currPrice: number;
  originalPrice: number | null;
  rating: number | null;
};

const defaultValues = {
  wishlistItems: [] as ListItem[],
  cartItems: [] as ListItem[],
  addToCart: (id: string, category: CakeCategories) => {},
  removeFromCart: (id: string, category: CakeCategories) => {},
  addToWishlist: (id: string, category: CakeCategories) => {},
  removeFromWishlist: (id: string, category: CakeCategories) => {},
};

const AppContext = createContext(defaultValues);
export const useAppContext = () => useContext(AppContext);

type Props = {
  children: React.ReactNode;
};

function AppProvider({ children }: Readonly<Props>) {
  const [wishlistItems, setWishlistItems] = useState<ListItem[]>([]);
  const [cartItems, setCartItems] = useState<ListItem[]>([]);

  const addToCart = useCallback((id: string, category: CakeCategories) => {
    let cake = findCake(id, category);
    if (!cake) return;

    setCartItems(
      produce((draft) => {
        draft.push(cake);
      }),
    );
  }, []);

  const removeFromCart = useCallback((id: string, category: CakeCategories) => {
    setCartItems(
      produce((draft) => {
        const index = draft.findIndex((item) => {
          if (item.id === id && item.category === category) {
            return true;
          }
          return false;
        });
        draft.splice(index, 1);
      }),
    );
  }, []);

  const addToWishlist = useCallback((id: string, category: CakeCategories) => {
    let cake = findCake(id, category);
    if (!cake) return;

    setWishlistItems(
      produce((draft) => {
        draft.push(cake);
      }),
    );
  }, []);

  const removeFromWishlist = useCallback(
    (id: string, category: CakeCategories) => {
      setWishlistItems(
        produce((draft) => {
          const index = draft.findIndex(
            (item) => item.id === id && item.category === category,
          );
          draft.splice(index, 1);
        }),
      );
    },
    [],
  );

  const value = useMemo(
    () => ({
      wishlistItems,
      cartItems,
      addToCart,
      removeFromCart,
      addToWishlist,
      removeFromWishlist,
    }),
    [
      wishlistItems,
      cartItems,
      addToCart,
      removeFromCart,
      addToWishlist,
      removeFromWishlist,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
