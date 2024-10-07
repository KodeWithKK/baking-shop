"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import * as z from "zod";

import AuthCardWrapper from "@/components/layout/auth-card-wrapper";
import Input from "@/components/base/input";
import Button from "@/components/base/button";
import Link from "next/link";

type Inputs = z.infer<typeof LoginSchema>;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <AuthCardWrapper
      title="Login"
      description="Welcome back"
      showSocial={true}
      backButtonDesc="Didn't have an Account?"
      backButtonLabel="Signup"
      backButtonHref="/auth/register"
    >
      <form className="space-y-[15px]" onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" size="full" intent="primary" className="py-1.5">
          Login
        </Button>
      </form>
    </AuthCardWrapper>
  );
}

export default LoginForm;
