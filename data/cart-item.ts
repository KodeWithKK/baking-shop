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

export const increaseCartItemQuantity = async (itemId: string) => {
  const user = await getCurrentUser();
  if (!user) return null;

  try {
    const result = await db.cartItem.update({
      where: {
        id: itemId,
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });

    return result;
  } catch (error) {
    return null;
  }
};

export const decreaseCartItemQuantity = async (itemId: string) => {
  const user = await getCurrentUser();
  if (!user) return null;

  const cartItem = user.cartItems.find((item) => (item.id = itemId));
  if (!cartItem) return { error: "Cart Item not found" };

  const currQty = cartItem.quantity;

  try {
    if (currQty >= 2) {
      await db.cartItem.update({
        where: {
          id: itemId,
        },
        data: {
          quantity: {
            decrement: 1,
          },
        },
      });
    } else {
      await db.cartItem.delete({
        where: {
          id: itemId,
        },
      });
    }

    return { message: "Operation completed successfully" };
  } catch (error) {
    return null;
  }
};
