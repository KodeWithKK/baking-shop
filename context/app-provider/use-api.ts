import { produce } from "immer";
import { useCallback, useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { SessionCartItem } from "@/types/next-auth";
import { Cake } from "@prisma/client";
import { addToCart } from "@/data/cart-item";

function useApiHooks() {
  const user = useCurrentUser();
  const [cartItems, setCartItems] = useState<SessionCartItem[]>(() => {
    if (user) return user.cartItems;
    else return [];
  });

  const handleAddToCart = useCallback(
    async (cakeId: string, cakeWeight: number | undefined, cakeData: Cake) => {
      if (!user) return;
      const nextCartItem = {
        id: window.crypto.randomUUID(),
        cakeWeight: 0.5,
        quantity: 1,
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
        produce((draftItem) => {
          draftItem.push(nextCartItem);
        }),
      );

      const addedCartItem = await addToCart(cakeId, cakeWeight);

      if (addedCartItem) {
        setCartItems(
          produce((draftItem) => {
            const addedNextCardItem = draftItem.find(
              (item) => item.id === nextCartItem.id,
            );
            if (addedNextCardItem) addedNextCardItem.id = addedCartItem.id;
            else console.log("something went wrong while adding to cart");
          }),
        );
      }
    },
    [user],
  );

  return { cartItems, addToCart: handleAddToCart };
}

export default useApiHooks;
