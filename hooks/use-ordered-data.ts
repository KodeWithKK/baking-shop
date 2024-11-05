import { useEffect, useState } from "react";

import { Cake } from "@prisma/client";

import { findDiscountedPrice } from "@/lib/pricing";

interface UseOrderedDataParams {
  data: Cake[] | undefined | null;
  orderBy: string;
}

function useOrderedData({ data, orderBy }: UseOrderedDataParams) {
  const [orderedCakes, setOrderedCakes] = useState<Cake[] | null>(null);

  useEffect(() => {
    if (!data) return;

    if (orderBy === "Popularity") {
      setOrderedCakes(data);
    } else if (orderBy == "Price Ascending") {
      setOrderedCakes(
        data.toSorted((cake1, cake2) => {
          const cake1DiscountedPrice =
            cake1.discountedPrice ?? findDiscountedPrice(cake1.listPrice);
          const cake2DiscountedPrice =
            cake2.discountedPrice ?? findDiscountedPrice(cake2.listPrice);
          return cake1DiscountedPrice - cake2DiscountedPrice;
        }),
      );
    } else {
      setOrderedCakes(
        data.toSorted((cake1, cake2) => {
          const cake1DiscountedPrice =
            cake1.discountedPrice ?? findDiscountedPrice(cake1.listPrice);
          const cake2DiscountedPrice =
            cake2.discountedPrice ?? findDiscountedPrice(cake2.listPrice);
          return cake2DiscountedPrice - cake1DiscountedPrice;
        }),
      );
    }
  }, [data, orderBy]);

  return orderedCakes;
}

export default useOrderedData;
