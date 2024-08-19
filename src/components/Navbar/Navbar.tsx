import Link from "next/link";
import NavBtnContainer from "./NavBtnContainer";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-[1000] flex w-full items-center justify-between rounded-b-[10px] bg-white py-[10px] pl-[14px] pr-5 text-orange-600 shadow-sm">
      <div className="justify-content flex items-center">
        <img
          src="https://blogger.googleusercontent.com/img/a/AVvXsEjiJsyFdqTbr-zK8IeKUJcdiFOTpoN7QNyUkELPbSKOafFNiH3szSqIG7HVqIAqde7k3jBthnwkoueXU3fF0HjH9Nfg-QSNJtw7b_tKsNyZ74zjz105lurwxV5AAillsKMZSGNRxfWnEdNOeyyzbR0Xw2Fo8TISK4ecNdvOxr0faEkDgwPaGKqR3NPHES4"
          className="-mt-[5px] mr-1 h-[56px] w-[56px]"
          alt="brand-logo"
        />
        <Link href="/">
          <h2 className="ml-2.5 text-[26px] font-bold">Bakings Shop</h2>
        </Link>
      </div>

      <NavBtnContainer />
    </nav>
  );
}
