CREATE TABLE "Files"(
    "id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "data" BLOB NOT NULL, -- BLOB is for binary data (e.g. images, videos, etc.)
    "createdAt" TIMESTAMP NOT NULL,
    "type" VARCHAR(24) NOT NULL,
    "size" INT NOT NULL,
    "postId" INT NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT "fk_post" 
        FOREIGN KEY ("postId")
        REFERENCES "Posts" ("id")
);