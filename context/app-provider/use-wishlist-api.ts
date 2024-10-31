import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { produce } from "immer";

import { SessionWishlistItem } from "@/types/next-auth";

import { useCurrentUser } from "@/hooks/use-current-user";
import { toggleWishlistItem } from "@/data/wishlist-item";

function useWishlistApi() {
  const user = useCurrentUser();
  const queryClient = useQueryClient();

  const [wishlistItems, setWishlistItems] = useState<SessionWishlistItem[]>(
    () => {
      if (user) return user.wishlistItems;
      else return [];
    },
  );

  const { mutate: handleToggleWishlistItem } = useMutation({
    mutationKey: ["toggleWishlistItem", user?.id],
    onMutate: async (cakeId: string) => {
      if (user) {
        // Optimistic Update
        const isAlreadyInWishlist = !!wishlistItems.find(
          (item) => item.cakeId === cakeId,
        );

        if (isAlreadyInWishlist) {
          setWishlistItems((prevItems) => {
            return prevItems.filter((item) => item.cakeId !== cakeId);
          });
        } else {
          const nextWishlistItem = {
            id: window.crypto.randomUUID(),
            cakeId,
          };

          setWishlistItems(
            produce((draftItem) => {
              draftItem.push(nextWishlistItem);
            }),
          );
        }

        // Cancel any outgoing refetches
        await queryClient.cancelQueries({
          queryKey: ["toggleWishlistItem", user.id],
        });

        // perform action
        const result = await toggleWishlistItem(cakeId);

        // fix the added data
        if (result?.isItemAdded) {
          setWishlistItems(
            produce((draftItem) => {
              const addedWishlistItem = draftItem.find(
                (item) => item.id === result.data.id,
              );
              if (addedWishlistItem) addedWishlistItem.id = result.data.id;
              else console.log("something went wrong while adding to wishlist");
            }),
          );
        }
      }
    },
  });

  return {
    wishlistItems,
    toggleWishlistItem: handleToggleWishlistItem,
  };
}

export default useWishlistApi;
