# My Note - Personal Note Taking App

A modern personal note-taking application built with Next.js 15, React 19, Drizzle ORM, and Clerk authentication.

## Features

### ✅ Phase 1 & 2: Foundation & Core Features
- **Database Setup**: SQLite with Drizzle ORM
- **UI Components**: shadcn/ui components
- **Note Management**: Create, edit, delete notes
- **Note Sharing**: Public note sharing via unique links

### ✅ Phase 3: Authentication System (COMPLETED)
- **User Authentication**: Clerk integration for secure login/signup
- **Protected Routes**: Middleware-based route protection
- **User Dashboard**: Personalized notes dashboard
- **Profile Management**: User profile page with Clerk components
- **Session Management**: Persistent authentication across app

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Authentication**: Clerk
- **Database**: SQLite (development) → PostgreSQL (production)
- **ORM**: Drizzle ORM
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-note
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   CLERK_SECRET_KEY=your_clerk_secret_key_here

   # Database
   DATABASE_URL=file:./sqlite.db

   # App URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up Clerk**
   - Create a Clerk account at [clerk.com](https://clerk.com)
   - Create a new application
   - Copy your publishable and secret keys to `.env.local`
   - Configure sign-in/sign-up pages in Clerk dashboard:
     - Sign-in URL: `/sign-in`
     - Sign-up URL: `/sign-up`
     - After sign-in URL: `/notes`
     - After sign-up URL: `/notes`

5. **Generate and run database migrations**
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── sign-in/           # Clerk sign-in page
│   ├── sign-up/           # Clerk sign-up page
│   ├── notes/             # Protected notes pages
│   ├── profile/           # User profile page
│   └── layout.tsx         # Root layout with ClerkProvider
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility libraries
│   ├── auth/             # Authentication utilities
│   ├── db/               # Database configuration
│   ├── validations/      # Validation schemas
│   └── helpers.ts        # Helper functions
└── middleware.ts         # Clerk middleware for route protection
```

## Authentication Flow

1. **Public Routes**: Home page, shared notes
2. **Protected Routes**: `/notes`, `/profile` - require authentication
3. **Auth Pages**: `/sign-in`, `/sign-up` - Clerk components
4. **Middleware**: Automatic redirection for protected routes

## Database Schema

```sql
-- Notes table (references Clerk user IDs)
CREATE TABLE notes (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  user_id TEXT NOT NULL,  -- Clerk user ID
  is_public BOOLEAN DEFAULT FALSE,
  share_token TEXT UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio

## Phase 3 Implementation Details

### Clerk Integration
- **ClerkProvider**: Wraps the entire app for authentication context
- **Middleware**: Protects routes and handles redirects
- **Auth Utilities**: Helper functions for getting user data
- **UI Components**: UserButton for profile/sign-out

### User Management
- **No User Storage**: Leverages Clerk's user management entirely
- **Direct References**: Notes reference Clerk user IDs directly
- **Real-time Data**: User info fetched from Clerk when needed

### Security
- **Route Protection**: Middleware prevents unauthorized access
- **User Isolation**: Users can only access their own notes
- **Session Management**: Clerk handles all session security

## Next Steps (Phase 4)
- Rich text editing
- Note organization (tags/categories)
- Search and filtering
- Dark/light mode
- Enhanced sharing options

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
