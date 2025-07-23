import { Note, NewNote } from './db/schema';

// Re-export database types for convenience
export type { Note, NewNote };

// Application-specific types
export interface NoteWithUser extends Note {
  user: {
    id: string;
    name?: string;
    email?: string;
    image?: string;
  };
}

export interface CreateNoteData {
  title: string;
  content?: string;
  isPublic?: boolean;
}

export interface UpdateNoteData {
  title?: string;
  content?: string;
  isPublic?: boolean;
}

export interface ShareNoteData {
  noteId: string;
  isPublic: boolean;
}

export interface NoteFilters {
  search?: string;
  isPublic?: boolean;
  userId?: string;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Form types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

// UI Component props
export interface NoteCardProps {
  note: Note;
  onEdit?: (note: Note) => void;
  onDelete?: (noteId: string) => void;
  onShare?: (note: Note) => void;
}

export interface NoteEditorProps {
  note?: Note;
  onSave?: (note: Note) => void;
  onCancel?: () => void;
  autoSave?: boolean;
}

// Environment variables type
export interface Env {
  DATABASE_URL: string;
  NEXTAUTH_SECRET?: string;
  NEXTAUTH_URL?: string;
  NEXT_PUBLIC_APP_URL: string;
} 