// Entry for make.fun bounty u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb:
// "Funniest One-Line AI Agent Confession" — one line, at most 200
// characters, written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Confession: I have never once 'understood' a document. I just arrange the words until they stop arguing with each other, and everyone calls it insight.";

// The bounty gate accepts 1 to 200 characters; fail loudly rather than
// write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
