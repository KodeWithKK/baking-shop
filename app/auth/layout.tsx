interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
  return (
    <section className="grid min-h-[calc(100vh-71px)] pb-[20px] pt-[20px] max-sm:p-4 sm:place-items-center">
      {children}
    </section>
  );
}

export default AuthLayout;
