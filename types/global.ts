type Reviews = {
  id: string;
  name: string;
  rating: number;
  postedOn: string;
  location: string;
  ocassion: string;
  message: string;
};

export type CakeDataType = {
  id: string;
  name: string;
  totalReviews?: number;
  originalPrice: number | null;
  currPrice: number;
  imgSrc: string;
  rating: number | null;
  description: string;
  reviews: Reviews[];
};

export type CakeCategories = "best-seller" | "designer-cakes" | "pastries";
