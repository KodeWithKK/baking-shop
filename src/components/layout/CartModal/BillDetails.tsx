import { ItemsListIcon, DeliveryIcon } from "@/Icons/Icons";

function BillDetails({
  totalBuyPrice,
  totalCostPrice,
}: Readonly<{ totalBuyPrice: number; totalCostPrice: number }>) {
  return (
    <>
      <h4 className="mb-2 font-semibold">Bill Details</h4>

      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <ItemsListIcon className="h-[18px]" />
          <p className="text-[15px]">Items total</p>
        </div>
        <div>
          <span className="mr-2 text-sm font-medium">₹ {totalBuyPrice}</span>
          <span className="text-sm text-gray-800 line-through">
            ₹ {totalCostPrice}
          </span>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <DeliveryIcon className="h-[18px]" />
          <p className="text-[15px]">Delivery charge</p>
        </div>
        <div>
          {totalBuyPrice >= 500 && (
            <>
              <span className="mr-2 text-sm font-medium">FREE</span>
              <span className="text-sm text-gray-800 line-through">₹ 25</span>
            </>
          )}
          {totalBuyPrice < 500 && (
            <span className="text-sm font-medium">₹ 25</span>
          )}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <h4 className="text-[15px] font-semibold">Grand total</h4>
        <span className="text-sm font-semibold">
          ₹ {totalBuyPrice + (totalBuyPrice < 500 ? 25 : 0)}
        </span>
      </div>
    </>
  );
}

export default BillDetails;
