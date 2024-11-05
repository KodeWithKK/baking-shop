import { NextRequest, NextResponse } from "next/server";

import { LoginSchema } from "@/schemas";

import { signIn } from "@/auth";

/* For Authentication in Postman */
export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validatedFields = LoginSchema.safeParse(body);

  if (!validatedFields.success) {
    return NextResponse.json(
      { message: "Unauthorized Request" },
      { status: 401 },
    );
  }

  await signIn("credentials", {
    email: body.email,
    password: body.password,
    redirect: false,
  });

  return NextResponse.json(
    { message: "Operation Successful" },
    { status: 200 },
  );
};
