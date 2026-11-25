import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse that almost works: a boring, specific, verifiable-sounding
// civic detail — the car is physically trapped behind the roadworks.
const LINE =
  "cant come in, the council shut our street for resurfacing and my car's boxed in behind the rollers";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
chmodSync(outPath, 0o644);
