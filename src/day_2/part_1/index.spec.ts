import fs from "fs";
import path from "path";
import { test } from "node:test";
import assert from "node:assert";
import { partOne } from "..";

test("should work", () => {
  const myInput = fs
    .readFileSync(path.join(import.meta.dirname, "input.spec.txt"))
    .toString();

  assert.equal(partOne(myInput), 2);
});
