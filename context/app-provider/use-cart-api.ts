import { useCallback, useState } from "react";

import { Cake } from "@prisma/client";
import { produce } from "immer";

import { SessionCartItem } from "@/types/next-auth";

import { useCurrentUser } from "@/hooks/use-current-user";
import {
  addToCart,
  decreaseCartItemQuantity,
  deleteCartItem,
  increaseCartItemQuantity,
} from "@/data/cart-item";

function useCartApi() {
  const user = useCurrentUser();
  const [cartItems, setCartItems] = useState<SessionCartItem[]>(() => {
    if (user) return user.cartItems;
    else return [];
  });

  const handleAddToCart = useCallback(
    async (
      cakeId: string,
      cakeQuantity: number,
      cakeWeight: number | undefined,
      cakeMessage: string,
      cakeData: Cake,
    ) => {
      if (!user) return;

      const nextCartItem = {
        id: window.crypto.randomUUID(),
        cakeWeight: cakeWeight,
        cakeMessage: cakeMessage,
        quantity: cakeQuantity,
        cake: {
          id: cakeData.id,
          name: cakeData.name,
          imgSrc: cakeData.imgSrc,
          category: cakeData.category,
          listPrice: cakeData.listPrice,
          discountedPrice: cakeData.discountedPrice ?? undefined,
          rating: cakeData.rating,
        },
      };

      setCartItems(
        produce((draftItems) => {
          draftItems.push(nextCartItem);
        }),
      );

      const addedCartItem = await addToCart(
        cakeId,
        cakeQuantity,
        cakeWeight,
        cakeMessage,
      );

      if (addedCartItem) {
        setCartItems(
          produce((draftItems) => {
            const addedNextCartItem = draftItems.find(
              (item) => item.id === nextCartItem.id,
            );
            if (addedNextCartItem) addedNextCartItem.id = addedCartItem.id;
            else console.log("something went wrong while adding to cart");
          }),
        );
      }
    },
    [user],
  );

  const handleIncreaseCartItemQuantity = useCallback((itemId: string) => {
    setCartItems(
      produce((draftItems) => {
        const cartItem = draftItems.find((item) => item.id === itemId);
        if (cartItem) cartItem.quantity++;
        else console.log("something went wrong while increase cart item qty");
      }),
    );

    increaseCartItemQuantity(itemId);
  }, []);

  const handleDecreaseCartItemQuantity = useCallback((itemId: string) => {
    setCartItems(
      produce((draftItems) => {
        const cartItem = draftItems.find((item) => item.id === itemId);
        if (cartItem && cartItem.quantity >= 2) cartItem.quantity--;
        else if (cartItem && cartItem.quantity == 1) {
          const requiredCartItem = draftItems.findIndex(
            (item) => item.id === cartItem.id,
          );
          draftItems.splice(requiredCartItem, 1);
        } else {
          console.log("something went wrong while decreasing cart item qty");
        }
      }),
    );

    decreaseCartItemQuantity(itemId);
  }, []);

  const handleDeleteCartItem = useCallback((itemId: string) => {
    setCartItems(
      produce((draftItems) => {
        const cartItemIdx = draftItems.findIndex((item) => item.id === itemId);
        if (cartItemIdx != -1) {
          draftItems.splice(cartItemIdx, 1);
        } else {
          console.log("something went wrong while deleting cart item");
        }
      }),
    );

    deleteCartItem(itemId);
  }, []);

  return {
    cartItems,
    addToCart: handleAddToCart,
    increaseCartItemQuantity: handleIncreaseCartItemQuantity,
    decreaseCartItemQuantity: handleDecreaseCartItemQuantity,
    deleteCartItem: handleDeleteCartItem,
  };
}

export default useCartApi;
