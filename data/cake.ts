"use server";

import { CakeCategory } from "@prisma/client";

import { ApiCakeDataType } from "@/types/global";

import { db } from "@/lib/db";

export interface ExtendedApiCakeData extends ApiCakeDataType {
  category: CakeCategory;
}

export const addCakes = async (cakeData: ExtendedApiCakeData[]) => {
  try {
    const result = await db.cake.createMany({
      data: cakeData,
    });

    return result;
  } catch (error) {
    return null;
  }
};

export const getCakesByCategory = async (
  category: CakeCategory,
  skip: number,
  take: number,
) => {
  try {
    const result = await db.cake.findMany({
      skip,
      take,
      where: {
        category,
      },
    });

    return result;
  } catch (error) {
    return null;
  }
};

export const getCakeByIdAndCategory = async (
  productId: string,
  category: CakeCategory,
) => {
  try {
    const result = await db.cake.findUnique({
      where: {
        id: productId,
        category,
      },
    });

    return result;
  } catch (error) {
    return null;
  }
};
