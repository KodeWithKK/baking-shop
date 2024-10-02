interface NavButtonProps {
  Icon: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;
  children?: React.ReactNode;
  onClick?: () => void;
}

function NavButton({ Icon, onClick, children }: Readonly<NavButtonProps>) {
  return (
    <button
      type="button"
      className="flex items-center gap-[5px] rounded-lg px-[6px] py-[7px] hover:bg-orange-100 lg:px-[10px]"
      onClick={onClick}
    >
      <Icon className="h-[24px] max-md:h-[28px]" />
      <div className="hidden decoration-dashed lg:block">{children}</div>
    </button>
  );
}

export default NavButton;
