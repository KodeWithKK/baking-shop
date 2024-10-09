"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import Button from "@/components/base/button";
import { GoogleIcon, FacebookIcon, TwitterIcon } from "@/lib/icons/global";

function SocalForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "facebook" | "twitter") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <>
      <Button intent="outline" size="full" onClick={() => onClick("google")}>
        <GoogleIcon className="h-5 w-5" />
      </Button>
      <Button intent="outline" size="full" onClick={() => onClick("facebook")}>
        <FacebookIcon className="h-5 w-5" />
      </Button>
      <Button intent="outline" size="full" onClick={() => onClick("twitter")}>
        <TwitterIcon className="h-5 w-5" />
      </Button>
    </>
  );
}

export default SocalForm;
