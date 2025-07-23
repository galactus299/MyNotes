CREATE TABLE `notes` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text,
	`user_id` text NOT NULL,
	`is_public` integer DEFAULT false,
	`share_token` text,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `notes_share_token_unique` ON `notes` (`share_token`);