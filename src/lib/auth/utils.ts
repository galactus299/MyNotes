import { auth, currentUser } from '@clerk/nextjs/server';

// Get the current authenticated user from Clerk
export async function getCurrentUser() {
  return await currentUser();
}

// Get the current user ID from Clerk
export async function getCurrentUserId() {
  const { userId } = await auth();
  return userId;
}

// Require authentication and return user ID
export async function requireAuth() {
  const { userId } = await auth();
  
  if (!userId) {
    throw new Error('Authentication required');
  }
  
  return userId;
} 