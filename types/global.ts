import { CakeCategory } from "@prisma/client";

export interface Review {
  id: string;
  name: string;
  rating: number;
  postedOn: string;
  location: string;
  ocassion: string;
  message: string;
}

export interface ApiCakeDataType {
  name: string;
  totalReviews?: number;
  listPrice: number;
  discountedPrice?: number;
  imgSrc: string;
  rating?: number;
  description: string;
}

export type URLCakeCategory = "best-seller" | "designer-cakes" | "pastries";
