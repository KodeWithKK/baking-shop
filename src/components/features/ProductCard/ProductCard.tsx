import Link from "next/link";
import cn from "@/utils/cn";
import findOrgPrice from "@/utils/findOrgPrice";

type CakesData = {
  id: string;
  name: string;
  totalReviews?: number;
  originalPrice: number | null;
  currPrice: number;
  imgSrc: string;
  rating: number | null;
  description: string;
};

type Props = {
  data: CakesData;
  href: string;
  className?: string;
};

function ProductCard({ data, href, className }: Readonly<Props>) {
  return (
    <Link
      href={href}
      className={cn(
        "overflow-hidden rounded-[15px] border border-gray-200 bg-white",
        className,
      )}
    >
      <img src={`${data.imgSrc}?tr=w-320,h-320,q-90`} alt="data-img" />

      <div className="space-y-px p-2 pt-0">
        <p className="overflow-hidden text-ellipsis text-nowrap text-[15px] font-semibold">
          {data.name}
        </p>

        <p className="">
          <span className="mr-[10px] text-[15px] font-semibold">
            ₹ {data.currPrice}
          </span>
          <span className="text-[13px] line-through">
            ₹ {data.originalPrice ?? findOrgPrice(data.currPrice)}
          </span>
          <span className="ml-2 text-[13px] font-medium text-[#1c9550]">
            ({findDiscount(data.currPrice, data.originalPrice)}% OFF)
          </span>
        </p>

        <p className="">
          <span className="rounded bg-[#1c9550]/10 px-1 py-0.5 text-sm font-medium text-[#1c9550]">
            {data.rating ?? "NEW"} ★
          </span>
          {data.totalReviews && (
            <span className="ml-2 text-sm">{data.totalReviews} Reviews</span>
          )}
        </p>
      </div>
    </Link>
  );
}

function findDiscount(currPrice: number, orgPrice: number | null): number {
  const ogPrice = orgPrice ?? findOrgPrice(currPrice);
  return Math.trunc(((ogPrice - currPrice) / ogPrice) * 100);
}

export default ProductCard;
