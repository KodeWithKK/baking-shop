export type ApiCakeDataType = {
  name: string;
  totalReviews?: number;
  listPrice: number;
  discountedPrice?: number;
  imgSrc: string;
  rating?: number;
  description: string;
};

export type URLCakeCategory = "best-seller" | "designer-cakes" | "pastries";
