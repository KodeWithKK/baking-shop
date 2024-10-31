"use server";

import { UserRole } from "@prisma/client";

import { getCurrentUserRole } from "@/lib/auth";

export const admin = async () => {
  const role = await getCurrentUserRole();

  if (role === UserRole.ADMIN) {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" };
};
