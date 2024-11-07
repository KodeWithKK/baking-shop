"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Input from "@/components/base/input";
import useSearchQuery from "@/hooks/use-search-query";
import { CloseIcon, LeftArrowIcon, SearchIcon } from "@/lib/icons/global";
import { findDiscountedPrice } from "@/lib/pricing";

function SearchPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading } = useSearchQuery({ searchTerm });

  return (
    <div>
      <div className="fixed top-0 h-[71px] w-full rounded-b-[10px] bg-white p-4 shadow-sm">
        <div className="relative flex items-center gap-2">
          <button
            type="button"
            className="h-[39px]"
            onClick={() => router.back()}
          >
            <LeftArrowIcon className="h-[30px]" />
          </button>

          <Input
            value={searchTerm}
            placeholder="Search for a Cake or Pastrie"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-full border-gray-600 pl-[10px] pr-[72px]"
            containerClassName="flex-1"
            autoFocus
          />

          {searchTerm && (
            <button
              type="button"
              className="absolute right-[42px] top-1.5 grid h-7 w-7 place-items-center rounded-full hover:bg-gray-200"
              onClick={() => setSearchTerm("")}
            >
              <CloseIcon className="h-6 text-gray-950 peer-focus:text-brand-600" />
            </button>
          )}

          <button
            type="button"
            className="absolute right-1 top-1 grid h-8 w-8 place-items-center rounded-full bg-brand-500"
            onClick={() => setSearchTerm("")}
          >
            <SearchIcon className="h-6 text-white" />
          </button>
        </div>
      </div>
      <div className="py-4">
        {searchTerm && data && (
          <div className="">
            {data.map((cake) => (
              <Link
                key={cake.id}
                href={`/${cake.category.toLowerCase().replace("_", "-")}/${cake.id}`}
                className="flex gap-1 px-4 py-1.5 hover:bg-brand-600/[.15]"
              >
                <img
                  src={`${cake.imgSrc}?tr=w-50,h-50,q-90`}
                  className="h-[50px] w-[50px] rounded-md"
                  alt=""
                />
                <div className="w-full overflow-hidden">
                  <p className="truncate text-sm md:text-base">{cake.name}</p>
                  <p className="mt-1.5 space-x-2">
                    <span className="text-[13px] md:text-base">
                      ₹{" "}
                      {cake.discountedPrice ??
                        findDiscountedPrice(cake.listPrice)}
                    </span>
                    <span className="text-[13px] text-gray-800 line-through md:text-base">
                      ₹ {cake.listPrice}
                    </span>
                    <span className="rounded bg-[#1c9550]/10 px-1 py-0.5 text-[11px] text-[#1c9550] md:text-[13px]">
                      {cake.rating} ★
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
