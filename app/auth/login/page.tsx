import AuthCardWrapper from "@/components/layout/auth-card-wrapper";
import Input from "@/components/base/input";
import Button from "@/components/base/button";
import Link from "next/link";

function LoginForm() {
  return (
    <AuthCardWrapper
      title="Login"
      description="Welcome back"
      showSocial={true}
      backButtonDesc="Didn't have an Account?"
      backButtonLabel="Signup"
      backButtonHref="/auth/register"
    >
      <form className="space-y-[15px]">
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder="abc@gmail.com"
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="********"
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
