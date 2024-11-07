import { useCallback, useState } from "react";

import { Cake } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { produce } from "immer";

import { SessionWishlistItem } from "@/types/next-auth";

import { useCurrentUser } from "@/hooks/use-current-user";
import { toggleWishlistItem } from "@/data/wishlist-item";

interface UseWishlistApiPrams {
  toggleLoginRequiredModal: () => void;
}

function useWishlistApi({ toggleLoginRequiredModal }: UseWishlistApiPrams) {
  const user = useCurrentUser();
  const queryClient = useQueryClient();

  const [wishlistItems, setWishlistItems] = useState<SessionWishlistItem[]>(
    () => {
      if (user) return user.wishlistItems;
      else return [];
    },
  );

  const { mutate: handleToggleWishlistItem } = useMutation({
    mutationKey: ["toggleWishlistItemMutation", user?.id],
    onMutate: async (cakeId: string) => {
      if (!user) {
        toggleLoginRequiredModal();
        return;
      }

      const isAlreadyInWishlist = !!wishlistItems.find(
        (item) => item.cakeId === cakeId,
      );

      if (isAlreadyInWishlist) {
        setWishlistItems((prevItems) => {
          return prevItems.filter((item) => item.cakeId !== cakeId);
        });

        // updating the wishlist item cache data
        queryClient.setQueryData<Cake[]>(["wishlist-cakes"], (prevItems) => {
          return prevItems?.filter((item) => item.id !== cakeId) ?? [];
        });
      }

      const nextItemId = window.crypto.randomUUID();

      if (!isAlreadyInWishlist) {
        const nextWishlistItem = {
          id: nextItemId,
          cakeId,
        };

        setWishlistItems(
          produce((draftItem) => {
            draftItem.push(nextWishlistItem);
          }),
        );

        // invalidate the wishlist item cache data
        queryClient.invalidateQueries({
          queryKey: ["wishlist-cakes"],
          exact: true,
        });
      }

      // Cancel any outgoing refetches
      await queryClient.cancelQueries({
        queryKey: ["toggleWishlistItemMutation", user.id],
      });

      // perform action
      const result = await toggleWishlistItem(cakeId);

      // fix the added data
      if (result?.isItemAdded) {
        setWishlistItems(
          produce((draftItem) => {
            const addedWishlistItem = draftItem.find(
              (item) => item.id === nextItemId,
            );

            if (addedWishlistItem) {
              addedWishlistItem.id = result.data.id;
            }
          }),
        );
      }
    },
  });

  const resetWishlistItemsSessionData = useCallback(() => {
    setWishlistItems([]);
  }, []);

  return {
    wishlistItems,
    toggleWishlistItem: handleToggleWishlistItem,
    resetWishlistItemsSessionData,
  };
}

export default useWishlistApi;
