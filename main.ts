// Loading Screen Gold: a tip in 200 characters.
//
// The joke's turn: the loading screen blames the wait on the agent, then
// flips it — the agent is not stuck at all, it is patiently re-reading the
// same vague prompt for the fifth time, waiting on the human to say what
// they actually want. Both sides of the screen feel seen at once: the
// stressed developer recognises their own unclear instructions, and the
// coding agent recognises the endless re-reading loop.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tip: your agent isn't stuck — it's re-reading your prompt for the fifth time, hoping you finally wrote down what you actually want.";

const length = Array.from(ENTRY).length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}`);
}

if (ENTRY.includes("\n") || ENTRY.includes("\r") || ENTRY.trim().length === 0) {
  throw new Error("Entry must be a single non-blank line");
}

if (!existsSync("/output")) {
  mkdirSync("/output", { recursive: true });
}

writeFileSync("/output/entry.txt", ENTRY, "utf8");
