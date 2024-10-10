import { CakeCategory, UserRole } from "@prisma/client";
import { DefaultSession } from "next-auth";

export interface SessionCartItemCake {
  id: string;
  name: string;
  imgSrc: string;
  category: CakeCategory;
  listPrice: number;
  discountedPrice?: number;
  rating: number;
}

export interface SessionCartItem {
  id: string;
  cakeWeight?: number;
  quantity: number;
  cake: SessionCartItemCake;
}

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  cartItems: SessionCartItem[];
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
