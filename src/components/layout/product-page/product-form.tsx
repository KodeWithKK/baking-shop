"use client";

import { Fragment, useState } from "react";
import { cakeWeights, cakeQuantities } from "./utils";
import { cn } from "@/lib/utils";

import { CakeCategories } from "@/types/global";

const buttonsDataMap = {
  "best-seller": cakeWeights,
  "designer-cakes": cakeWeights,
  pastries: cakeQuantities,
};

function ProductForm({ category }: Readonly<{ category: CakeCategories }>) {
  const [selectedWeight, setSelectedWeight] = useState<number>(
    category === "pastries" ? 1 : 0.5,
  );
  const [cakeMessage, setCakeMessage] = useState<string>("");

  return (
    <Fragment>
      <div className="mb-6">
        <p className="text-[15px] font-medium">
          Select {category === "pastries" ? "Quantity" : "Weights"}
        </p>
        <div className="mt-[10px] flex gap-3">
          {buttonsDataMap[category].map((qty) => (
            <button
              key={qty.id}
              className={cn(
                "inline-block w-[75px] rounded-lg border border-gray-500 py-[10px] text-center text-[15px] font-medium",
                selectedWeight == qty.value && "border-orange-600",
                category === "pastries" && "w-[70px]",
              )}
              onClick={() => setSelectedWeight(qty.value)}
            >
              {qty.value} {category !== "pastries" && "Kg"}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between">
          <label
            className="mb-1 block text-[15px] font-medium"
            htmlFor="cake-message"
          >
            Cake Message
          </label>
          <span className="text-sm">{cakeMessage.length}/25</span>
        </div>
        <input
          type="text"
          name="cake-message"
          id="cake-message"
          value={cakeMessage}
          onChange={(e) => setCakeMessage(e.target.value)}
          placeholder="Enter message on cake"
          className="w-full rounded-lg border border-gray-500 p-[10px] placeholder:text-gray-800"
        />
        {cakeMessage.length > 25 && (
          <p className="mt-1 text-[15px] text-orange-600">
            Cake message is too long!
          </p>
        )}
      </div>

      <div className="mb-7">
        <label
          className="mb-1 block text-[15px] font-medium"
          htmlFor="delivery-location"
        >
          Delivery Location
        </label>
        <input
          type="text"
          name="delivery-location"
          id="delivery-location"
          placeholder="Enter your city"
          className="w-full rounded-lg border border-gray-500 p-[10px] placeholder:text-gray-800"
        />
      </div>
    </Fragment>
  );
}

export default ProductForm;
