import { CakeCategory, UserRole } from "@prisma/client";
import { DefaultSession } from "next-auth";

export interface CartItemCakeData {
  id: string;
  name: string;
  imgSrc: string;
  category: CakeCategory;
  listPrice: number;
  discountedPrice?: number;
  rating: number;
}

export interface CartItem {
  id: string;
  cakeWeight?: number;
  quantity: number;
  cake: CartItemCakeData;
}

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  cartItems: CartItem[];
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
