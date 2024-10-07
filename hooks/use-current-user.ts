import { useSession } from "next-auth/react";

// use it for client side
export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user;
};
