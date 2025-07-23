import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Notes table - references Clerk user IDs directly
export const notes = sqliteTable('notes', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content'),
  userId: text('user_id').notNull(), // This will be the Clerk user ID
  isPublic: integer('is_public', { mode: 'boolean' }).default(false),
  shareToken: text('share_token').unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// Types for TypeScript
export type Note = typeof notes.$inferSelect;
export type NewNote = typeof notes.$inferInsert; 