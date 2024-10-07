"use client";

import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { register as doRegisteration } from "@/actions/register";
import * as z from "zod";

type Inputs = z.infer<typeof RegisterSchema>;

function useRegisterPageHooks() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();

  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different Provider!"
      : "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit: SubmitHandler<Inputs> = (values: Inputs) => {
    console.log("hello");

    setErrorMessage("");
    setSuccessMessage("");

    startTransition(() => {
      doRegisteration(values)
        .then((data) => {
          setErrorMessage(data?.error);
          setSuccessMessage(data?.success);
        })
        .catch(() => setErrorMessage("Something went wrong"));
    });
  };

  return {
    errorMessage: errorMessage || urlError,
    successMessage,
    isPending,
    errors,
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
}

export default useRegisterPageHooks;
