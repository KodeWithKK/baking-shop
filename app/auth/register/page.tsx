import AuthCardWrapper from "@/components/layout/auth-card-wrapper";
import Input from "@/components/base/input";
import Button from "@/components/base/button";

function RegisterForm() {
  return (
    <AuthCardWrapper
      title="Sign Up"
      description="Create an Account"
      showSocial={true}
      backButtonDesc="Already have an Account?"
      backButtonLabel="Login"
      backButtonHref="/auth/login"
    >
      <form className="space-y-[15px]">
        <Input label="Name" name="name" placeholder="John Doe" />
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
        <Button type="submit" size="full" intent="primary" className="py-1.5">
          Create Account
        </Button>
      </form>
    </AuthCardWrapper>
  );
}

export default RegisterForm;
