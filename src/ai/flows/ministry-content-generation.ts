'use server';

/**
 * @fileOverview AI-powered content generation tool for ministry coordinators.
 *
 * - generateMinistryContent - A function that generates content for ministry sections.
 * - MinistryContentInput - The input type for the generateMinistryContent function.
 * - MinistryContentOutput - The return type for the generateMinistryContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MinistryContentInputSchema = z.object({
  ministryName: z.string().describe('The name of the ministry.'),
  topic: z.string().describe('The topic for which content needs to be generated.'),
  keywords: z.string().describe('Relevant keywords to guide content generation.'),
});
export type MinistryContentInput = z.infer<typeof MinistryContentInputSchema>;

const MinistryContentOutputSchema = z.object({
  content: z.string().describe('The generated content for the ministry section.'),
});
export type MinistryContentOutput = z.infer<typeof MinistryContentOutputSchema>;

export async function generateMinistryContent(input: MinistryContentInput): Promise<MinistryContentOutput> {
  return ministryContentGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'ministryContentPrompt',
  input: {schema: MinistryContentInputSchema},
  output: {schema: MinistryContentOutputSchema},
  prompt: `You are a helpful AI assistant for Catholic ministry coordinators. Your task is to generate content for their section on the website.

  Ministry: {{ministryName}}
  Topic: {{topic}}
  Keywords: {{keywords}}

  Please generate engaging and relevant content inspired by similar Catholic texts. Include snippets from relevant texts based on reasoning and relevance. Focus on providing inspiration and saving time for the ministry coordinator.
  `,
});

const ministryContentGenerationFlow = ai.defineFlow(
  {
    name: 'ministryContentGenerationFlow',
    inputSchema: MinistryContentInputSchema,
    outputSchema: MinistryContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
