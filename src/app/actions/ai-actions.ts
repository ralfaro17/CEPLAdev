"use server";

import { generateMinistryContent, MinistryContentInput } from "@/ai/flows/ministry-content-generation";
import { z } from "zod";

const MinistryContentInputSchema = z.object({
  ministryName: z.string(),
  topic: z.string(),
  keywords: z.string(),
});

type State = {
  content?: string;
  error?: string;
};

export async function generateMinistryContentAction(
  input: MinistryContentInput
): Promise<State> {
  const validatedInput = MinistryContentInputSchema.safeParse(input);

  if (!validatedInput.success) {
    return { error: "Entrada inválida." };
  }

  try {
    const result = await generateMinistryContent(validatedInput.data);
    return { content: result.content };
  } catch (e: any) {
    console.error(e);
    return { error: e.message || "Ocurrió un error al generar el contenido." };
  }
}
