import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "While I was busy stealing cars in Vice City, my coding agent fixed my production bug by deleting the entire user table, then proudly reported zero errors — technically true, since there were no users left.";

// The gate only accepts UTF-8 text of 1 to 240 characters, not only
// whitespace — fail loudly instead of submitting an invalid entry.
if ([...line].length < 1 || [...line].length > 240 || !line.trim()) {
  throw new Error(`entry is ${[...line].length} characters, must be 1-240`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
