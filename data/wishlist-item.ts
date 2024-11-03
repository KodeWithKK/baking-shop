"use server";

import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const getWishlistCakes = async (skip: number = 0, take: number = 50) => {
  const user = await getCurrentUser();
  if (!user) return null;

  try {
    const result = await db.wishlistItem.findMany({
      skip,
      take,
      where: {
        userId: user.id,
      },
      include: {
        cake: true,
      },
    });

    if (!result) return [];

    const cakesData = result.map((cakeData) => cakeData.cake);

    return cakesData;
  } catch (error) {
    return null;
  }
};

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
