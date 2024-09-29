import { SearchIcon } from "@/lib/icons/global";

function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-[240px] rounded-md border border-orange-500 p-[5px] pl-[40px] placeholder:text-[14px] placeholder:text-gray-800 focus:border-orange-600 focus:outline-orange-600"
        placeholder="Search for cakes"
      />

      <SearchIcon className="absolute left-2.5 top-1.5 h-6" />
    </div>
  );
}

export default SearchBar;
