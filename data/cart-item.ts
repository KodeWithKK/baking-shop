"use server";

import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export const addToCart = async (cakeId: string, cakeWeight?: number) => {
  const user = await getCurrentUser();
  if (!user) return null;

  try {
    const result = await db.cartItem.create({
      data: {
        cakeId,
        cakeWeight,
        userId: user.id!,
      },
    });

    return result;
  } catch (error) {
    return null;
  }
};
