"use server";

import { cache } from "react";
import { auth } from "@/auth";

/*
 * Use it for server side
 */

const getSession = cache(async () => {
  const session = await auth();
  return session;
});

export const getCurrentUser = async () => {
  const session = await getSession();
  return session?.user;
};

export const getCurrentUserRole = async () => {
  const session = await getSession();
  return session?.user?.role;
};
