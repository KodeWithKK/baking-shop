"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { newVerification } from "@/actions/new-verification";

import AuthCardWrapper from "@/components/layout/auth-card-wrapper";
import FormMessage from "@/components/layout/form-message";
import { BeatLoaderIcon } from "./icons";

function NewVerificationForm() {
  const isSubmitApiCalled = useRef<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (successMessage || errorMessage) return;

    if (!token) {
      setErrorMessage("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccessMessage(data.success);
        setErrorMessage(data.error);
      })
      .catch(() => {
        setErrorMessage("Something went wrong!");
      });
  }, [token, successMessage, errorMessage]);

  useEffect(() => {
    if (!isSubmitApiCalled.current) {
      isSubmitApiCalled.current = true;
      onSubmit();
    }
  }, [isSubmitApiCalled, onSubmit]);

  return (
    <AuthCardWrapper
      title="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      centerBackButton
    >
      <div className="flex justify-center space-y-[15px]">
        {!successMessage && !errorMessage && (
          <BeatLoaderIcon className="h-[64px] text-orange-600" />
        )}
        <FormMessage type="success" message={successMessage} />
        {!successMessage && <FormMessage type="error" message={errorMessage} />}
      </div>
    </AuthCardWrapper>
  );
}

export default NewVerificationForm;
