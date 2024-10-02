import AuthCardWrapper from "@/components/layout/auth-card-wrapper";
import Input from "@/components/base/input";
import Button from "@/components/base/button";

function ResetPasswordForm() {
  return (
    <AuthCardWrapper
      title="Reset Password"
      description="Enter your account email"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      centerBackButton
    >
      <form className="space-y-[15px]">
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder="abc@gmail.com"
        />
        <Button type="submit" size="full" intent="primary" className="py-1.5">
          Send rest email
        </Button>
      </form>
    </AuthCardWrapper>
  );
}

export default ResetPasswordForm;
