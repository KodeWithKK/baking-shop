"use server";

import { db } from "@/lib/db";
import { CakeCategory } from "@prisma/client";
import { ApiCakeDataType } from "@/types/global";

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

export const getCakes = async (
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

export const getCake = async (id: string) => {
  try {
    const result = await db.cake.findUnique({
      where: {
        id,
      },
    });

    return result;
  } catch (error) {
    return null;
  }
};
