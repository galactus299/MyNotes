// Clerk configuration
export const clerkConfig = {
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
  secretKey: process.env.CLERK_SECRET_KEY!,
  signInUrl: '/sign-in',
  signUpUrl: '/sign-up',
  afterSignInUrl: '/notes',
  afterSignUpUrl: '/notes',
} as const;

// Protected routes that require authentication
export const protectedRoutes = [
  '/notes',
  '/profile',
  '/dashboard',
] as const;

// Public routes that should be accessible to everyone
export const publicRoutes = [
  '/',
  '/share/:token',
  '/api/webhooks/clerk',
] as const; 