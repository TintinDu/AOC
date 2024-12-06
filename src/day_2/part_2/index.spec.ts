import fs from "fs";
import path from "path";
import { test } from "node:test";
import assert from "node:assert";
import { partTwo } from "..";

test("should work", () => {
  const myInput = fs
    .readFileSync(path.join(import.meta.dirname, "input.spec.txt"))
    .toString();

  assert.equal(partTwo(myInput), 4);
});
