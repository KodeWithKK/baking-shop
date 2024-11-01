"use client";

import { CakeCategory } from "@prisma/client";

import Input from "@/components/base/input";
import { cn } from "@/lib/utils";

import { useProductPageContext } from "./product-page-provider";
import { cakeQuantities, cakeWeights } from "./utils";

function ProductForm({ category }: Readonly<{ category: CakeCategory }>) {
  const {
    selectedQuantity,
    selectedWeight,
    cakeMessage,
    setSelectedQuantity,
    setSelectedWeight,
    setCakeMessage,
  } = useProductPageContext();

  return (
    <>
      <div className="mb-6">
        <p className="text-[15px] font-medium">
          Select {category === CakeCategory.PASTRIES ? "Quantity" : "Weights"}
        </p>
        <div className="mt-[10px] flex gap-3">
          {category === "PASTRIES" &&
            cakeQuantities.map(({ id, value }) => (
              <button
                key={id}
                className={cn(
                  "inline-block w-[70px] rounded-lg border border-gray-500 py-[10px] text-center text-[15px] font-medium",
                  selectedQuantity === value && "border-orange-600",
                )}
                onClick={() => setSelectedQuantity(value)}
              >
                {value}
              </button>
            ))}

          {category !== "PASTRIES" &&
            cakeWeights.map(({ id, value }) => (
              <button
                key={id}
                className={cn(
                  "inline-block w-[75px] rounded-lg border border-gray-500 py-[10px] text-center text-[15px] font-medium",
                  selectedWeight === value && "border-orange-600",
                )}
                onClick={() => setSelectedWeight(value)}
              >
                {value} Kg
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
        <Input
          name="cake-message"
          id="cake-message"
          value={cakeMessage}
          onChange={(e) => setCakeMessage(e.target.value)}
          placeholder="Enter message on cake"
          size="large"
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
        <Input
          type="text"
          name="delivery-location"
          id="delivery-location"
          placeholder="Enter your city"
          size="large"
        />
      </div>
    </>
  );
}

export default ProductForm;
