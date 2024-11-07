"use client";

import { usePathname } from "next/navigation";

import { RemoveScroll } from "react-remove-scroll";

import LoginForm from "@/app/auth/login/page";
import { useAppContext } from "@/context/app-provider";
import { CloseIcon } from "@/lib/icons/global";

function LoginRequiredModal() {
  const pathname = usePathname();
  const {
    showLoginRequiredModal,
    toggleLoginRequiredModal,
    closeLoginRequiredModal,
  } = useAppContext();

  if (pathname.startsWith("/auth")) {
    closeLoginRequiredModal();
  }

  if (!showLoginRequiredModal || pathname.startsWith("/auth")) {
    return null;
  }

  return (
    <RemoveScroll>
      <div className="w fixed left-0 top-0 z-[100] grid h-screen w-full place-items-center bg-black/90 px-4 backdrop-blur-sm">
        <div className="relative max-sm:w-full">
          <button
            type="button"
            className="absolute right-1 top-1 rounded-md border-2 border-transparent p-0.5 focus:border-black"
            onClick={toggleLoginRequiredModal}
          >
            <CloseIcon className="h-5" />
          </button>
          <LoginForm />
        </div>
      </div>
    </RemoveScroll>
  );
}

export default LoginRequiredModal;
