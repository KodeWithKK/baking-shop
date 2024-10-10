"use server";

import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";

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
