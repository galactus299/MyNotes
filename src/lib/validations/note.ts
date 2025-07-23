import { z } from 'zod';

export const createNoteSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  content: z.string().optional(),
  isPublic: z.boolean().default(false),
});

export const updateNoteSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters').optional(),
  content: z.string().optional(),
  isPublic: z.boolean().optional(),
});

export const shareNoteSchema = z.object({
  noteId: z.string().min(1, 'Note ID is required'),
  isPublic: z.boolean(),
});

export type CreateNoteInput = z.infer<typeof createNoteSchema>;
export type UpdateNoteInput = z.infer<typeof updateNoteSchema>;
export type ShareNoteInput = z.infer<typeof shareNoteSchema>; 