import { CakeCategories, CakeDataType } from "@/types/global";

import bestsellerCakes from "@/data/bestSeller";
import designerCakes from "@/data/designerCakes";
import pastries from "@/data/pastries";

function getCakesData(
  category: CakeCategories | "all" = "all",
): CakeDataType[] | null {
  if (category === "all")
    return [...bestsellerCakes, ...designerCakes, ...pastries];
  else if (category === "best-seller") return bestsellerCakes;
  else if (category === "designer-cakes") return designerCakes;
  else if (category === "pastries") return pastries;
  else return null;
}

export default getCakesData;
