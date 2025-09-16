"use server";

import {
  getRealTimeSafetySuggestions,
  type RealTimeSafetySuggestionsInput,
} from "@/ai/flows/real-time-safety-suggestions";
import { getAuth } from "firebase/auth";
import { auth, firestore } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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

interface SosAlertInput {
  latitude: number;
  longitude: number;
}

export async function sendSosAlertAction(input: SosAlertInput) {
  try {
    const user = auth.currentUser;

    if (!user) {
      return { success: false, error: "User not authenticated." };
    }

    const alertData = {
      userId: user.uid,
      userName: user.displayName || "N/A",
      userEmail: user.email || "N/A",
      nationality: "Indian", // Placeholder
      tripInfo: {
        destination: "Delhi, India",
        dates: "15 May - 20 May",
      },
      currentLocation: {
        latitude: input.latitude,
        longitude: input.longitude,
      },
      timestamp: serverTimestamp(),
      emergencyContacts: [ // Placeholder
        { name: "Emergency Contact 1", phone: "123-456-7890" }
      ],
      status: "new",
    };

    await addDoc(collection(firestore, "SOS_Alerts"), alertData);

    return { success: true };
  } catch (error) {
    console.error("SOS Alert Error:", error);
    if (error instanceof Error) {
        return { success: false, error: error.message };
    }
    return { success: false, error: "An unknown error occurred while sending the SOS alert." };
  }
}
