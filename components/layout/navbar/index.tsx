"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import NavBtnContainer from "./navbtn-container";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-[100] flex w-full items-center justify-between rounded-b-[10px] bg-white px-5 py-[10px] text-brand-600 shadow-sm max-sm:px-[4%]",
        pathname.startsWith("/search") && "hidden",
      )}
    >
      <Link href="/">
        <div className="justify-content flex items-center">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjDx2OsUI6YsGeG89N9DA7dc0Ui7yfZj8kPwj0VhZaPbU-oXXkulF_pADO7TxTYQS_QCw8emlpDlKwdgnTcAKxuLiFYxB5wp1z94Mp6u9i73Ba8Mz76GEyWvPc7MhfuY__GCDSaBCZDUki94WC_kQXzbDx_isekkpO4--Bd5LXf6VuykH2W6YXD6qhISjk"
            className="-mt-[5px] mr-1 h-[56px] w-[56px] max-sm:h-[54px] max-sm:w-[54x]"
            alt="brand-logo"
          />
          <h2 className="ml-2.5 text-[26px] font-bold max-md:hidden">
            Bakings Shop
          </h2>
        </div>
      </Link>

      <NavBtnContainer />
    </nav>
  );
}

export default Navbar;
