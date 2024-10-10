import * as z from "zod";
import { CakeCategory } from "@prisma/client";

const cakeData = z.object({
  name: z
    .string({ message: "Cake name must be a string" })
    .min(1, { message: "Cake name is Requried" }),
  imgSrc: z
    .string({ message: "Image Source must a string" })
    .url({ message: "Invalid image source url" }),
  description: z
    .string({ message: "Description must be a string" })
    .min(1, { message: "Cake description is Required" }),
  listPrice: z
    .number({ message: "List price must be a positve number" })
    .positive({ message: "List price must be a positive number" }),
  discountedPrice: z
    .number({ message: "Discounted price must be a positve number" })
    .positive({ message: "Discounted Price must be a positive number" })
    .optional(),
  totalReviews: z
    .number({ message: "Total reviews must be a positve number" })
    .positive({ message: "Total Reviews must be a positive number" })
    .optional(),
  rating: z
    .number({ message: "Rating must be a number" })
    .positive({ message: "Rating must be a positive number" })
    .optional(),
});

export const addCakesApiSchema = z.object({
  category: z.enum(
    [
      CakeCategory.BEST_SELLER,
      CakeCategory.DESIGNER_CAKES,
      CakeCategory.PASTRIES,
    ],
    {
      required_error: "Category is required",
      invalid_type_error: "Category must a string",
      message: "Incorrect category",
    },
  ),
  data: z.array(cakeData, {
    message: "Cakes data must be an array",
  }),
});
