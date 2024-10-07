"use client";

import useRegisterPageHooks from "./useHooks";
import AuthCardWrapper from "@/components/layout/auth-card-wrapper";
import FormMessage from "@/components/layout/form-message";
import Input from "@/components/base/input";
import Button from "@/components/base/button";

function RegisterForm() {
  const {
    errorMessage,
    successMessage,
    isPending,
    errors,
    register,
    handleSubmit,
  } = useRegisterPageHooks();

  return (
    <AuthCardWrapper
      title="Sign Up"
      description="Create an Account"
      showSocial={true}
      backButtonDesc="Already have an Account?"
      backButtonLabel="Login"
      backButtonHref="/auth/login"
    >
      <form className="space-y-[15px]" onSubmit={handleSubmit}>
        <Input
          label="Name"
          placeholder="John Doe"
          error={errors?.name?.message}
          {...register("name")}
        />

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

        <FormMessage type="success" message={successMessage} />
        <FormMessage type="error" message={errorMessage} />

        <Button
          type="submit"
          size="full"
          intent="primary"
          className="py-1.5"
          disabled={isPending}
        >
          Create Account
        </Button>
      </form>
    </AuthCardWrapper>
  );
}

export default RegisterForm;
