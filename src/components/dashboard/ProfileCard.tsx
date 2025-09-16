import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { QrCode } from "lucide-react";

export function ProfileCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage
            src="https://picsum.photos/seed/user-avatar/100/100"
            alt="User"
            data-ai-hint="person avatar"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="text-xl font-bold font-headline">John Doe</h3>
          <p className="text-sm text-muted-foreground">Passport: ****1234</p>
        </div>
        <div className="rounded-lg border p-4 bg-secondary/30">
          <p className="text-sm font-medium mb-2 flex items-center justify-center gap-2">
            <QrCode size={16} /> Digital Tourist ID
          </p>
          <Image
            src="https://picsum.photos/seed/qr-code/200/200"
            width={150}
            height={150}
            alt="QR Code"
            className="rounded-md mx-auto"
            data-ai-hint="qr code"
          />
        </div>
      </CardContent>
    </Card>
  );
}
