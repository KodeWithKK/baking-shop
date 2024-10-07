"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

import AuthCardWrapper from "@/components/layout/auth-card-wrapper";
import Input from "@/components/base/input";
import Button from "@/components/base/button";

type Inputs = z.infer<typeof RegisterSchema>;

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <AuthCardWrapper
      title="Sign Up"
      description="Create an Account"
      showSocial={true}
      backButtonDesc="Already have an Account?"
      backButtonLabel="Login"
      backButtonHref="/auth/login"
    >
      <form className="space-y-[15px]" onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" size="full" intent="primary" className="py-1.5">
          Create Account
        </Button>
      </form>
    </AuthCardWrapper>
  );
}

export default RegisterForm;
