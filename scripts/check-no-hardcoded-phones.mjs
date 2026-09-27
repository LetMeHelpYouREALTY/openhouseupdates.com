#!/usr/bin/env node
/**
 * Build gate: fail if banned template phone numbers appear in source trees.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SCAN_DIRS = ["app", "components", "lib", "public"];

const BANNED_PATTERNS = [
  { name: "702-222-1964 variants", re: /702[-.\s)]*\s*222[-.\s]*1964|222[-.\s]*1964|7022221964/i },
  { name: "702-500-1942 variants", re: /702[-.\s)]*\s*500[-.\s]*1942|500[-.\s]*1942|17025001942|7025001942/i },
  { name: "702-820-5408 variants", re: /702[-.\s)]*\s*820[-.\s]*5408|820[-.\s]*5408/i },
  { name: "tel:+1702", re: /tel:\+1[-.\s]*702/i },
  { name: "generic 702 area code", re: /\b702[-.\s)]?\s*\d{3}[-.\s]?\d{4}\b/ },
];

const SKIP_EXT = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico", ".mp4", ".woff", ".woff2"]);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (entry === "node_modules" || entry === ".next") continue;
      walk(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

const violations = [];

for (const dir of SCAN_DIRS) {
  const base = join(ROOT, dir);
  for (const file of walk(base)) {
    const ext = file.slice(file.lastIndexOf("."));
    if (SKIP_EXT.has(ext)) continue;
    if (file.includes("check-no-hardcoded-phones")) continue;

    const content = readFileSync(file, "utf8");
    for (const { name, re } of BANNED_PATTERNS) {
      const match = content.match(re);
      if (match) {
        violations.push({
          file: relative(ROOT, file),
          pattern: name,
          sample: match[0],
        });
      }
    }
  }
}

if (violations.length > 0) {
  console.error("Hardcoded phone numbers found (use lib/contact.ts SITE_PHONE only):\n");
  for (const v of violations) {
    console.error(`  ${v.file}: [${v.pattern}] → "${v.sample}"`);
  }
  process.exit(1);
}

console.log("check-no-hardcoded-phones: OK");
