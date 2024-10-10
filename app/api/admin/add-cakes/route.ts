import { NextResponse, NextRequest } from "next/server";
import { getCurrentUserRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { addCakesApiSchema } from "./schema";
import { addCakes, type ExtendedApiCakeData } from "@/data/cake";

export const POST = async (request: NextRequest) => {
  const role = await getCurrentUserRole();

  if (role !== UserRole.ADMIN) {
    return NextResponse.json(
      { message: "Unauthorized Request" },
      { status: 401 },
    );
  }

  const body = await request.json();
  const validatedFields = await addCakesApiSchema.safeParse(body);

  if (!validatedFields.success) {
    return NextResponse.json(
      {
        message: "Invalid Fields",
        firstError: validatedFields.error.issues[0].message,
      },
      { status: 400 },
    );
  }

  const cakeCategory = validatedFields.data.category;
  const cakes = validatedFields.data.data as ExtendedApiCakeData[];

  for (const cake of cakes) {
    cake.category = cakeCategory;
  }

  const result = await addCakes(cakes);

  return NextResponse.json(
    { message: `${result?.count} Cakes Added Sucessfully` },
    { status: 200 },
  );
};
