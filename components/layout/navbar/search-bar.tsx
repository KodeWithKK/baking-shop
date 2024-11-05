import React from "react";

import { SearchIcon } from "@/lib/icons/global";

import NavButton from "./nav-btn";

function SearchBar() {
  return (
    <>
      <div className="relative hidden lg:block">
        <input
          type="text"
          className="peer w-[268px] rounded-full border border-gray-700 p-[5px] pl-[40px] text-gray-700 placeholder:text-[14px] placeholder:text-gray-800 focus:border-brand-600/[.75] focus:outline-brand-600/[.75]"
          placeholder="Search for cakes"
          spellCheck={false}
        />

        <SearchIcon className="absolute left-2 top-1 h-7 text-gray-950 peer-focus:text-brand-600" />
      </div>

      <div className="lg:hidden">
        <NavButton Icon={SearchIcon} />
      </div>
    </>
  );
}

export default SearchBar;
