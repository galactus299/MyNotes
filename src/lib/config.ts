// Application configuration
export const config = {
  app: {
    name: 'My Note',
    description: 'A personal note-taking application',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
  database: {
    url: process.env.DATABASE_URL || 'file:./dev.db',
  },
  auth: {
    secret: process.env.NEXTAUTH_SECRET,
    url: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  },
  features: {
    autoSave: true,
    autoSaveDelay: 1000, // 1 second
    maxTitleLength: 200,
    maxContentLength: 10000,
  },
} as const;

// Validation constants
export const VALIDATION = {
  TITLE_MIN_LENGTH: 1,
  TITLE_MAX_LENGTH: 200,
  CONTENT_MAX_LENGTH: 10000,
  SHARE_TOKEN_LENGTH: 32,
} as const;

// API endpoints
export const API_ENDPOINTS = {
  NOTES: '/api/notes',
  USERS: '/api/users',
  AUTH: '/api/auth',
} as const;

// Route paths
export const ROUTES = {
  HOME: '/',
  NOTES: '/notes',
  NOTE: (id: string) => `/notes/${id}`,
  SHARE: (token: string) => `/share/${token}`,
  LOGIN: '/login',
  SIGNUP: '/signup',
  PROFILE: '/profile',
} as const; 