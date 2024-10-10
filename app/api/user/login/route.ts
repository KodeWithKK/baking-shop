import { NextResponse, NextRequest } from "next/server";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";

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
