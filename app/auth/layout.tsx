interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
  return (
    <section className="grid min-h-[calc(100vh-71px)] place-items-center pb-[20px] pt-[20px]">
      {children}
    </section>
  );
}

export default AuthLayout;
