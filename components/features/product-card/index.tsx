import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  findDiscountedPrice,
  findDiscount,
  getCakeCategoryURL,
} from "@/lib/pricing";
import { Cake } from "@prisma/client";

type Props = {
  data: Cake;
  className?: string;
};

function ProductCard({ data, className }: Readonly<Props>) {
  return (
    <Link
      href={`${getCakeCategoryURL(data.category)}/${data.id}`}
      className={cn(
        "overflow-hidden rounded-lg border border-gray-200 bg-white",
        className,
      )}
    >
      <img src={`${data.imgSrc}?tr=w-320,h-320,q-90`} alt="data-img" />

      <div className="space-y-px p-2 pt-0">
        <p className="overflow-hidden text-ellipsis text-nowrap text-[15px] font-medium">
          {data.name}
        </p>

        <p className="">
          <span className="text-[15px] font-medium">
            ₹ {data.discountedPrice ?? findDiscountedPrice(data.listPrice)}
          </span>
          <span className="mx-1.5 text-[13px] line-through">
            ₹ {data.listPrice}
          </span>
          <span className="text-[13px] font-medium text-[#1c9550]">
            ({findDiscount(data.listPrice, data.discountedPrice)}% OFF)
          </span>
        </p>

        <p className="">
          <span className="rounded bg-[#1c9550]/10 px-1 py-0.5 text-[13px] font-medium text-[#1c9550]">
            {data.rating || "NEW"} ★
          </span>
          {data.rating > 0 && data.totalReviews > 0 && (
            <span className="ml-1.5 text-[13px]">
              {data.totalReviews} Review{data.totalReviews > 1 && "s"}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
