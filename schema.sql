CREATE TABLE IF NOT EXISTS "Issues" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`number`	INTEGER NOT NULL,
	`created_at`	TIMESTAMP NOT NULL,
	`updated_at`	TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS "IssuesPages" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`issue_id`	INTEGER NOT NULL UNIQUE,
	`page_id`	INTEGER NOT NULL UNIQUE,
	`created_at`	TIMESTAMP NOT NULL,
	`updated_at`	TIMESTAMP NOT NULL,
	FOREIGN KEY(`issue_id`) REFERENCES Issues (id),
	FOREIGN KEY(`page_id`) REFERENCES Pages (id)
);

CREATE TABLE IF NOT EXISTS "IssuesTags" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`issue_id`	INTEGER NOT NULL UNIQUE,
	`tag_id`	INTEGER NOT NULL UNIQUE,
	`created_at`	TIMESTAMP NOT NULL,
	`updated_at`	TIMESTAMP NOT NULL,
	FOREIGN KEY(`issue_id`) REFERENCES Issues (id),
	FOREIGN KEY(`tag_id`) REFERENCES Tags (id)
);

CREATE TABLE IF NOT EXISTS "Pages" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`image`	BLOB NOT NULL,
	`created_at`	TIMESTAMP NOT NULL,
	`updated_at`	TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS "Tags" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`name`	TEXT NOT NULL UNIQUE,
	`created_at`	TIMESTAMP NOT NULL,
	`updated_at`	TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS "Titles" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`name`	TEXT NOT NULL UNIQUE,
	`created_at`	TIMESTAMP NOT NULL,
	`updated_at`	TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS "TitlesIssues" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`title_id`	INTEGER NOT NULL UNIQUE,
	`issue_id`	INTEGER NOT NULL UNIQUE,
	`created_at`	TIMESTAMP NOT NULL,
	`updated_at`	TIMESTAMP NOT NULL,
	FOREIGN KEY(`title_id`) REFERENCES Titles ( id ),
	FOREIGN KEY(`issue_id`) REFERENCES Issues ( id )
);
