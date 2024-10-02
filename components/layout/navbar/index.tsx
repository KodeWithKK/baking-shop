import Link from "next/link";
import NavBtnContainer from "./navbtn-container";
import SearchBar from "./search-bar";

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-[100] flex w-full items-center justify-between rounded-b-[10px] bg-white px-5 py-[10px] text-orange-600 shadow-sm max-sm:px-[4%]">
      <Link href="/">
        <div className="justify-content flex items-center">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjiJsyFdqTbr-zK8IeKUJcdiFOTpoN7QNyUkELPbSKOafFNiH3szSqIG7HVqIAqde7k3jBthnwkoueXU3fF0HjH9Nfg-QSNJtw7b_tKsNyZ74zjz105lurwxV5AAillsKMZSGNRxfWnEdNOeyyzbR0Xw2Fo8TISK4ecNdvOxr0faEkDgwPaGKqR3NPHES4"
            className="-mt-[5px] mr-1 h-[56px] w-[56px] max-sm:h-[54px] max-sm:w-[54x]"
            alt="brand-logo"
          />
          <h2 className="ml-2.5 text-[26px] font-bold max-sm:hidden">
            Bakings Shop
          </h2>
        </div>
      </Link>

      <div className="flex items-center lg:gap-2">
        <SearchBar />
        <NavBtnContainer />
      </div>
    </nav>
  );
}

export default Navbar;
