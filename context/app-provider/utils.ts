import bestsellerCakes from "@/data/bakingo-dataset/bestSeller";
import designerCakes from "@/data/bakingo-dataset/designerCakes";
import pastries from "@/data/bakingo-dataset/pastries";
import { CakeDataType, CakeCategories } from "@/types/global";

export function findCake(id: string, category: CakeCategories) {
  let cake: CakeDataType | undefined;

  if (category === "best-seller") {
    cake = bestsellerCakes.find((item) => item.id === id);
  } else if (category === "designer-cakes") {
    cake = designerCakes.find((item) => item.id === id);
  } else if (category === "pastries") {
    cake = pastries.find((item) => item.id === id);
  }

  if (!cake) return;

  return {
    id,
    category,
    name: cake.name,
    imgSrc: cake.imgSrc,
    currPrice: cake.currPrice,
    originalPrice: cake.originalPrice,
    rating: cake.rating,
  };
}
