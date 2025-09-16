"use server";

import {
  getRealTimeSafetySuggestions,
  type RealTimeSafetySuggestionsInput,
} from "@/ai/flows/real-time-safety-suggestions";

export async function getSafetySuggestionsAction(
  input: RealTimeSafetySuggestionsInput
) {
  try {
    const suggestions = await getRealTimeSafetySuggestions(input);
    return { success: true, data: suggestions };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to get safety suggestions." };
  }
}
