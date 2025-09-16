import { SafetySuggestions } from "@/components/dashboard/SafetySuggestions";
import { Separator } from "@/components/ui/separator";

export default function SafetySuggestionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Safety Suggestions</h1>
        <p className="text-muted-foreground">
          Get real-time, AI-powered safety advice for your location.
        </p>
      </div>
      <Separator />
      <SafetySuggestions />
    </div>
  );
}
