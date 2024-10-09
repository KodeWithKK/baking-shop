import Link from "next/link";
import Button from "@/components/base/button";
import SocalForm from "./social-form";
import { cn } from "@/lib/utils";

interface AuthCardWrapperProps {
  title: string;
  description?: string;
  backButtonDesc?: string;
  backButtonLabel: string;
  backButtonHref: string;
  centerBackButton?: boolean;
  showSocial?: boolean;
  children: React.ReactNode;
}

function AuthCardWrapper({
  title,
  description,
  backButtonDesc,
  backButtonLabel,
  backButtonHref,
  showSocial = false,
  centerBackButton = false,
  children,
}: Readonly<AuthCardWrapperProps>) {
  return (
    <div className="text-[15px]">
      <div className="w-[398px] rounded-md bg-white p-[20px] shadow">
        <div className="mb-[20px] text-center">
          <h2 className="mb-1 text-[28px]">{title}</h2>
          <p className="text-pretty text-[15px] text-gray-800">{description}</p>
        </div>

        {children}

        {showSocial && (
          <>
            <div className="relative my-[30px]">
              <hr className="border-gray-200" />
              <div className="absolute flex w-full -translate-y-1/2 justify-center">
                <span className="bg-white px-2 text-sm text-gray-800">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="flex w-full items-center gap-x-2">
              <SocalForm />
            </div>
          </>
        )}

        <div
          className={cn(
            "mt-[20px] space-x-[0.5ch] text-sm text-gray-800",
            centerBackButton && "text-center",
          )}
        >
          <span>{backButtonDesc}</span>
          <Link href={backButtonHref}>
            <Button intent={"text"} size={"default"}>
              {backButtonLabel}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthCardWrapper;
