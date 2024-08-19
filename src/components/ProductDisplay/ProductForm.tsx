"use client";

import { useState } from "react";
import { cakeWeights } from "./utils";
import cn from "@/utils/cn";

function ProductForm() {
  const [selectedWeight, setSelectedWeight] = useState(0.5);

  return (
    <>
      <div className="mb-6">
        <p className="text-[15px] font-medium">Select Weight</p>
        <div className="mt-[10px] flex gap-3">
          {cakeWeights.map((qty) => (
            <button
              key={qty.id}
              className={cn(
                "inline-block w-[75px] rounded-lg border border-gray-500 py-[10px] text-center text-[15px] font-medium",
                selectedWeight == qty.value && "border-orange-600",
              )}
              onClick={() => setSelectedWeight(qty.value)}
            >
              {qty.value} Kg
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label
          className="mb-1 block text-[15px] font-medium"
          htmlFor="cake-message"
        >
          Cake Message
        </label>
        <input
          type="text"
          name="cake-message"
          id="cake-message"
          placeholder="Enter message on cake"
          className="w-full rounded-lg border border-gray-500 p-[10px] placeholder:text-gray-800"
        />
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
    </>
  );
}

export default ProductForm;
