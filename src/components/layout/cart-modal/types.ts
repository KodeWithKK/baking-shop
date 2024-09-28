import { CakeCategories } from "@/types/global";

export type CartItemDataType = {
  id: string;
  name: string;
  imgSrc: string;
  category: CakeCategories;
  currPrice: number;
  originalPrice: number | null;
  rating: number | null;
};
