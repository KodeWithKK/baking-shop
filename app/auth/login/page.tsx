"use client";

import AuthCardWrapper from "@/components/layout/auth-card-wrapper";
import FormMessage from "@/components/layout/form-message";
import Input from "@/components/base/input";
import Button from "@/components/base/button";
import Link from "next/link";

import useLoginPageHooks from "./useHooks";

function LoginForm() {
  const {
    errorMessage,
    successMessage,
    isPending,
    errors,
    register,
    handleSubmit,
  } = useLoginPageHooks();

  return (
    <AuthCardWrapper
      title="Login"
      description="Welcome back"
      showSocial={true}
      backButtonDesc="Didn't have an Account?"
      backButtonLabel="Signup"
      backButtonHref="/auth/register"
    >
      <form className="space-y-[15px]" onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email"
          placeholder="abc@gmail.com"
          error={errors?.email?.message}
          {...register("email")}
        />

        <Input
          type="password"
          label="Password"
          placeholder="********"
          error={errors?.password?.message}
          {...register("password")}
        />

        <Link href={"/auth/reset"} className="inline-block">
          <Button intent={"text"} size={"default"} className="text-sm">
            Forget Password
          </Button>
        </Link>

        <FormMessage type="success" message={successMessage} />
        <FormMessage type="error" message={errorMessage} />

        <Button
          type="submit"
          size="full"
          intent="primary"
          className="py-1.5"
          disabled={isPending}
        >
          Login
        </Button>
      </form>
    </AuthCardWrapper>
  );
}

export default LoginForm;
