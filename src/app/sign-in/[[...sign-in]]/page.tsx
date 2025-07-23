import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Sign in to My Note
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Access your personal notes and more
          </p>
        </div>
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-black hover:bg-gray-800',
              card: 'shadow-lg',
            },
          }}
          redirectUrl="/notes"
        />
      </div>
    </div>
  );
} 