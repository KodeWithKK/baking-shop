"use server";

import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
      include: {
        CartItem: {
          select: {
            id: true,
            cakeWeight: true,
            quantity: true,
            cake: {
              select: {
                id: true,
                name: true,
                imgSrc: true,
                category: true,
                listPrice: true,
                discountedPrice: true,
                rating: true,
              },
            },
          },
        },
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      include: {
        CartItem: {
          select: {
            id: true,
            cakeWeight: true,
            quantity: true,
            cake: {
              select: {
                id: true,
                name: true,
                imgSrc: true,
                category: true,
                listPrice: true,
                discountedPrice: true,
                rating: true,
              },
            },
          },
        },
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};
