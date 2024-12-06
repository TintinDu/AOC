import fs from "fs";
import path from "path";
import { getSimilarityScore } from "./common";
import assert from "node:assert";
import { test } from "node:test";

test("should work", () => {
  const myInput = fs
    .readFileSync(path.join(import.meta.dirname, "input.spec.txt"))
    .toString();

  const sum = getSimilarityScore(myInput);

  assert.equal(sum, 31);
});
