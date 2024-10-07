"use client";

import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";
import * as z from "zod";

type Inputs = z.infer<typeof LoginSchema>;

function useLoginPageHooks() {
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different Provider!"
      : "";

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<Inputs> = (values: Inputs) => {
    console.log("hello");

    setErrorMessage("");
    setSuccessMessage("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            reset();
            setErrorMessage(data?.error);
          }

          if (data?.success) {
            reset();
            setSuccessMessage(data?.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setErrorMessage("Something went wrong"));
    });
  };

  return {
    showTwoFactor,
    errorMessage: errorMessage || urlError,
    successMessage,
    isPending,
    errors,
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
}

export default useLoginPageHooks;
