'use server';

/**
 * @fileOverview Provides real-time safety suggestions to tourists based on their location and surroundings.
 *
 * - getRealTimeSafetySuggestions - A function that returns safety advice for the current location.
 * - RealTimeSafetySuggestionsInput - The input type for the getRealTimeSafetySuggestions function.
 * - RealTimeSafetySuggestionsOutput - The return type for the getRealTimeSafetySuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RealTimeSafetySuggestionsInputSchema = z.object({
  latitude: z.number().describe('The latitude of the tourist.'),
  longitude: z.number().describe('The longitude of the tourist.'),
  nearbyAccidentLocations: z.string().optional().describe('A comma-separated list of locations where accidents have recently occurred.'),
  weatherInformation: z.string().optional().describe('Current weather conditions at the location.'),
});
export type RealTimeSafetySuggestionsInput = z.infer<typeof RealTimeSafetySuggestionsInputSchema>;

const RealTimeSafetySuggestionsOutputSchema = z.object({
  safetyAdvice: z.string().describe('Safety advice for the tourist based on their location and surroundings.'),
  safeRoutePlanning: z.string().optional().describe('Suggest route to avoid danger zones.'),
  dangerZoneAvoidance: z.string().optional().describe('Advise what danger zone to avoid.'),
  preventiveMeasures: z.string().optional().describe('Suggest preventive measures to take.'),
});
export type RealTimeSafetySuggestionsOutput = z.infer<typeof RealTimeSafetySuggestionsOutputSchema>;

export async function getRealTimeSafetySuggestions(
  input: RealTimeSafetySuggestionsInput
): Promise<RealTimeSafetySuggestionsOutput> {
  return realTimeSafetySuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'realTimeSafetySuggestionsPrompt',
  input: {schema: RealTimeSafetySuggestionsInputSchema},
  output: {schema: RealTimeSafetySuggestionsOutputSchema},
  prompt: `You are a safety advisor for tourists. Based on the tourist's current location (latitude: {{latitude}}, longitude: {{longitude}}), 
nearby accident locations ({{nearbyAccidentLocations}}), and weather information ({{weatherInformation}}), provide safety advice, suggest safe route planning,
danger zone avoidance, and preventive measures to help them stay safe.

Consider all the provided data points. Your response should be tailored to the specific circumstances and provide actionable recommendations.

Output safety advice in natural language.`,
});

const realTimeSafetySuggestionsFlow = ai.defineFlow(
  {
    name: 'realTimeSafetySuggestionsFlow',
    inputSchema: RealTimeSafetySuggestionsInputSchema,
    outputSchema: RealTimeSafetySuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
