import React from "react";
import { SearchIcon } from "@/lib/icons/global";
import NavButton from "./nav-btn";

function SearchBar() {
  return (
    <>
      <div className="relative hidden lg:block">
        <input
          type="text"
          className="w-[240px] rounded-md border border-orange-500 p-[5px] pl-[40px] text-gray-975 placeholder:text-[14px] placeholder:text-gray-800 focus:border-orange-600/[.75] focus:outline-orange-600/[.75]"
          placeholder="Search for cakes"
          spellCheck={false}
        />

        <SearchIcon className="absolute left-2 top-1 h-7" />
      </div>

      <div className="lg:hidden">
        <NavButton Icon={SearchIcon} />
      </div>
    </>
  );
}

export default SearchBar;
