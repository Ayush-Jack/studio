import { SignupForm } from '@/components/auth/SignupForm';
import { ShieldAlertIcon } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="flex min-h-[calc(100vh-56px)] flex-col items-center justify-center bg-background">
      <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <ShieldAlertIcon className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your information to get started with SafeTourism
          </p>
        </div>
        <SignupForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/login"
            className="underline underline-offset-4 hover:text-primary"
          >
            Already have an account? Login
          </Link>
        </p>
      </div>
    </div>
  );
}
