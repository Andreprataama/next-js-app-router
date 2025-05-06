"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

type FieldErrors = {
  [key: string]: string[];
};

export async function saction(
  prevState: {
    massage: string;
    erors: object;
  },
  formData: FormData
) {
  const FormSchema = z.object({
    title: z.string().min(1, "Title wajib diisi !"),
    description: z.string().min(1, "Description wajib diisi !"),
  });

  const parse = FormSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!parse.success) {
    {
      const fielderror: FieldErrors = parse.error.formErrors.fieldErrors;
      const errors = Object.keys(fielderror)?.reduce((acc, key) => {
        acc[key] = fielderror[key]?.[0] || "Unknown error";
        return acc;
      }, {} as Record<string, string>);
      return { errors };
    }
  }

  try {
    await fetch("https://service.pace11.my.id/api/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parse.data),
    }).then((res) => res.json());

    revalidatePath("/note/notesserver");
    return { massage: "success" };
  } catch (error) {
    return { massage: error };
  }
}
