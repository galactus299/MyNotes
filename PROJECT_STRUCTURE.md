# Project Structure

This document outlines the organized folder structure for the My Note application.

## Directory Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── avatar.tsx
│   │   └── sonner.tsx
│   ├── notes/            # Note-related components
│   ├── auth/             # Authentication components
│   └── layout/           # Layout components
├── lib/                  # Utility libraries
│   ├── db/              # Database configuration
│   │   ├── index.ts     # Database connection
│   │   ├── schema.ts    # Database schema
│   │   └── utils.ts     # Database utilities
│   ├── auth/            # Authentication utilities
│   ├── validations/     # Validation schemas
│   │   └── note.ts      # Note validation
│   ├── types.ts         # TypeScript types
│   ├── config.ts        # Application configuration
│   ├── constants.ts     # Application constants
│   ├── helpers.ts       # Helper functions
│   ├── utils.ts         # Utility functions
│   └── index.ts         # Main exports
└── public/              # Static assets
```

## Key Files

### Environment Configuration
- `.env.local` - Environment variables for database and authentication

### Database
- `src/lib/db/schema.ts` - Database schema definitions
- `src/lib/db/index.ts` - Database connection and setup
- `src/lib/db/utils.ts` - Database utility functions

### Types and Validation
- `src/lib/types.ts` - TypeScript type definitions
- `src/lib/validations/note.ts` - Zod validation schemas

### Configuration
- `src/lib/config.ts` - Application configuration
- `src/lib/constants.ts` - Application constants

### Utilities
- `src/lib/helpers.ts` - Helper functions (ID generation, formatting, etc.)
- `src/lib/utils.ts` - General utility functions
- `src/lib/index.ts` - Main exports for easy importing

## Component Organization

### UI Components (`src/components/ui/`)
- Reusable shadcn/ui components
- Consistent styling and behavior
- Accessible and responsive

### Feature Components
- `src/components/notes/` - Note creation, editing, display
- `src/components/auth/` - Login, signup, profile
- `src/components/layout/` - Header, footer, navigation

## Import Patterns

### From lib directory:
```typescript
import { Note, createNoteSchema, config, generateId } from '@/lib';
```

### From components:
```typescript
import { Button } from '@/components/ui/button';
import { NoteCard } from '@/components/notes/note-card';
```

## Environment Variables

Required environment variables:
- `DATABASE_URL` - Database connection string
- `NEXTAUTH_SECRET` - Authentication secret (for production)
- `NEXTAUTH_URL` - Authentication URL (for production)
- `NEXT_PUBLIC_APP_URL` - Public app URL

## Development Workflow

1. **Database Changes**: Update schema in `src/lib/db/schema.ts`
2. **Type Changes**: Update types in `src/lib/types.ts`
3. **Validation**: Add schemas in `src/lib/validations/`
4. **Components**: Create in appropriate feature folder
5. **Utilities**: Add to `src/lib/helpers.ts` or create new utility file

## Best Practices

- Use TypeScript for all files
- Follow consistent naming conventions
- Export types and utilities from `src/lib/index.ts`
- Use Zod for validation
- Keep components small and focused
- Use proper error handling
- Follow accessibility guidelines 