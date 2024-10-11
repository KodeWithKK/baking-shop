"use server";

import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export const toggleWishlistItem = async (cakeId: string) => {
  const user = await getCurrentUser();
  if (!user) return null;

  try {
    const wishlistItem = await db.wishlistItem.findFirst({
      where: {
        cakeId,
        userId: user.id!,
      },
    });

    const isItemAdded = !wishlistItem;

    if (wishlistItem) {
      const deletedItem = await db.wishlistItem.delete({
        where: {
          cakeId_userId: {
            cakeId,
            userId: user.id!,
          },
        },
      });

      return {
        isItemAdded,
        data: deletedItem,
      };
    } else {
      const addedItem = await db.wishlistItem.create({
        data: {
          cakeId,
          userId: user.id!,
        },
      });

      return {
        isItemAdded,
        data: addedItem,
      };
    }
  } catch (error) {
    return null;
  }
};
