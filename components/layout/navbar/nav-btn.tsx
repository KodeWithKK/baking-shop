interface NavButtonProps {
  Icon: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;
  children?: React.ReactNode;
  onClick?: () => void;
}

function NavButton({ Icon, onClick, children }: Readonly<NavButtonProps>) {
  return (
    <button
      type="button"
      className="flex items-center gap-[5px] rounded-lg py-[7px] pl-[3px] pr-[8px] hover:bg-gray-100 lg:px-[10px]"
      onClick={onClick}
    >
      <Icon className="h-[24px] text-gray-950 max-md:h-[28px]" />
      <div className="hidden text-gray-950 decoration-dashed lg:block">
        {children}
      </div>
    </button>
  );
}

export default NavButton;
