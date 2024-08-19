/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

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
};

function ProductCard({ data, href }: Readonly<Props>) {
  return (
    <Link
      href={href}
      className="rounded-[15px] border border-gray-200 bg-white p-[10px]"
    >
      <img src={data.imgSrc} alt="data-img" className="rounded-[10px]" />
      <div className="space-y-px">
        <p className="text-[15px] font-semibold">{data.name}</p>
        <p className="">
          <span className="mr-[10px] text-[16px] font-semibold">
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
          <span className="rounded-md bg-[#1c9550]/10 p-1 text-[14px] font-medium text-[#1c9550]">
            {data.rating ?? "NEW"} ★
          </span>
          {data.totalReviews && (
            <span className="ml-2 text-[15px]">
              {data.totalReviews} Reviews
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}

function findOrgPrice(currPrice: number): number {
  const price = Math.trunc(currPrice * 1.11);
  const remaining = 9 - (price % 10);
  return price + remaining;
}

function findDiscount(currPrice: number, orgPrice: number | null): number {
  const ogPrice = orgPrice ?? findOrgPrice(currPrice);
  return Math.trunc(((ogPrice - currPrice) / ogPrice) * 100);
}

export default ProductCard;
