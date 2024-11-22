"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { InlineLoader } from "@/components/base/loaders";
import useSearchQuery from "@/hooks/use-search-query";
import { CloseIcon, SearchIcon } from "@/lib/icons/global";
import { formatPrice } from "@/lib/pricing";

import NavButton from "./nav-btn";

function SearchBar() {
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(true);

  const { data, isLoading } = useSearchQuery({ searchTerm });

  useEffect(() => {
    if (
      pathname.startsWith("/best-seller") ||
      pathname.startsWith("/designer-cakes") ||
      pathname.startsWith("/pastries")
    ) {
      setShowSearchResults(false);
    } else {
      setShowSearchResults(true);
    }
  }, [pathname]);

  return (
    <>
      <div className="relative hidden lg:block">
        <input
          type="text"
          value={searchTerm}
          spellCheck={false}
          placeholder="Search for cakes"
          className="peer w-[268px] rounded-full border border-gray-700 p-[5px] pl-[40px] text-gray-950 placeholder:text-[14px] placeholder:text-gray-800 focus:border-brand-600/[.75] focus:outline-brand-600/[.75]"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <SearchIcon className="absolute left-2 top-1 h-7 text-gray-950 peer-focus:text-brand-600" />

        {searchTerm && (
          <button
            type="button"
            className="absolute right-2 top-1 grid h-7 w-7 place-items-center rounded-full hover:bg-gray-200"
            onClick={() => setSearchTerm("")}
          >
            <CloseIcon className="h-6 text-gray-950 peer-focus:text-brand-600" />
          </button>
        )}

        {searchTerm && showSearchResults && (
          <div className="absolute mt-1 max-h-[280px] w-full overflow-y-auto rounded-lg border border-gray-600 bg-white text-sm text-gray-950 max-lg:hidden">
            {isLoading && (
              <div className="grid h-[280px] scale-90 place-items-center">
                <InlineLoader />
              </div>
            )}

            {data && data.length === 0 && (
              <div className="p-1">No search result found</div>
            )}

            {data?.map((cake) => (
              <Link
                key={cake.id}
                href={`/${cake.category.toLowerCase().replace("_", "-")}/${cake.id}`}
                className="flex gap-1 p-1 hover:bg-brand-100"
              >
                <img
                  src={`${cake.imgSrc}?tr=w-50,h-50,q-90`}
                  className="h-[50px] w-[50px] rounded-md"
                  alt=""
                />
                <div className="w-full overflow-hidden">
                  <p className="truncate">{cake.name}</p>
                  <p className="mt-1.5 space-x-2">
                    <span>
                      ₹ {formatPrice(cake.discountedPrice ?? cake.listPrice)}
                    </span>
                    <span className="text-gray-800 line-through">
                      ₹ {cake.listPrice}
                    </span>
                    <span className="rounded bg-[#1c9550]/10 px-1 py-0.5 text-[13px] text-[#1c9550]">
                      {cake.rating} ★
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link href="/search" className="lg:hidden">
        <NavButton Icon={SearchIcon} />
      </Link>
    </>
  );
}

export default SearchBar;
