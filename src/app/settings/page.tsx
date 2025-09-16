import { SettingsForm } from "@/components/settings/SettingsForm";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and app preferences.
        </p>
      </div>
      <Separator />
      <SettingsForm />
    </div>
  );
}
