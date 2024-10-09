"use client";

import { getSession } from "next-auth/react";
import { logout } from "@/actions/logout";
import { cn } from "@/lib/utils";
import { ExitIcon, UserIcon } from "@/lib/icons/global";

interface UserOptionsProps {
  handleClose: () => void;
}

function UserOptions({ handleClose }: Readonly<UserOptionsProps>) {
  const handleLogout = () => {
    logout().then(async () => {
      await getSession();
      handleClose();
    });
  };

  return (
    <div className="boder-gray-800 animate-flip-down animate-duration-300 absolute right-0 top-[60px] w-[168px] rounded-md border bg-white text-gray-950">
      <UserOption Icon={UserIcon} label="My Profile" />
      <hr />
      <UserOption
        Icon={ExitIcon}
        label="Log out"
        actionType="dangerous"
        onClick={handleLogout}
      />
    </div>
  );
}

interface UserOption {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  actionType?: "normal" | "dangerous";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function UserOption({
  Icon,
  label,
  actionType = "normal",
  onClick,
}: Readonly<UserOption>) {
  return (
    <div className="p-0.5">
      <button
        type="button"
        className={cn(
          "flex w-full items-center gap-2 rounded-md p-1.5 hover:bg-orange-100",
          actionType === "dangerous" && "text-orange-600",
        )}
        onClick={onClick}
      >
        <Icon className="h-5" />
        <span>{label}</span>
      </button>
    </div>
  );
}

export default UserOptions;
