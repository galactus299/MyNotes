// Application constants
export const APP_NAME = 'My Note';
export const APP_DESCRIPTION = 'A personal note-taking application';

// Database constants
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

// Note constants
export const NOTE_TITLE_MAX_LENGTH = 200;
export const NOTE_CONTENT_MAX_LENGTH = 10000;
export const SHARE_TOKEN_LENGTH = 32;

// Time constants
export const AUTO_SAVE_DELAY = 1000; // 1 second
export const DEBOUNCE_DELAY = 300; // 300ms

// Error messages
export const ERROR_MESSAGES = {
  NOTE_NOT_FOUND: 'Note not found',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  VALIDATION_ERROR: 'Please check your input and try again',
  SERVER_ERROR: 'Something went wrong. Please try again later',
  NETWORK_ERROR: 'Network error. Please check your connection',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  NOTE_CREATED: 'Note created successfully',
  NOTE_UPDATED: 'Note updated successfully',
  NOTE_DELETED: 'Note deleted successfully',
  NOTE_SHARED: 'Note shared successfully',
  LINK_COPIED: 'Link copied to clipboard',
} as const;

// UI constants
export const UI = {
  TOAST_DURATION: 3000,
  ANIMATION_DURATION: 200,
  LOADING_DELAY: 500,
} as const;

// File types
export const SUPPORTED_FILE_TYPES = {
  IMAGES: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
  DOCUMENTS: ['.pdf', '.doc', '.docx', '.txt'],
} as const;

// Regex patterns
export const PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  SHARE_TOKEN: /^[a-zA-Z0-9]{32}$/,
} as const; 