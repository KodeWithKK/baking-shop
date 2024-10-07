import { useSession } from "next-auth/react";

// use it for client side
export const useCurrentRole = () => {
  const session = useSession();

  return session.data?.user.role;
};
