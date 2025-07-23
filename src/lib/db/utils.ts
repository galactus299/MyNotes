import { db } from './index';
import { notes } from './schema';
import { eq, and } from 'drizzle-orm';

// Note utilities - all operations use Clerk user IDs directly
export async function createNote(noteData: { 
  id: string; 
  title: string; 
  content?: string; 
  userId: string;
  isPublic?: boolean;
  shareToken?: string;
}) {
  return await db.insert(notes).values(noteData);
}

export async function getNotesByUserId(userId: string) {
  return await db.select().from(notes).where(eq(notes.userId, userId));
}

export async function getNoteById(id: string) {
  const result = await db.select().from(notes).where(eq(notes.id, id));
  return result[0];
}

export async function getUserNoteById(noteId: string, userId: string) {
  const result = await db
    .select()
    .from(notes)
    .where(and(eq(notes.id, noteId), eq(notes.userId, userId)));
  return result[0];
}

export async function updateNote(
  id: string, 
  userId: string,
  updates: { title?: string; content?: string; isPublic?: boolean }
) {
  return await db
    .update(notes)
    .set({ ...updates, updatedAt: new Date() })
    .where(and(eq(notes.id, id), eq(notes.userId, userId)));
}

export async function deleteNote(id: string, userId: string) {
  return await db
    .delete(notes)
    .where(and(eq(notes.id, id), eq(notes.userId, userId)));
}

export async function getPublicNoteByShareToken(shareToken: string) {
  const result = await db
    .select()
    .from(notes)
    .where(and(eq(notes.shareToken, shareToken), eq(notes.isPublic, true)));
  return result[0];
} 