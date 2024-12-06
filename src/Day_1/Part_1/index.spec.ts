import fs from "fs";
import path from "path";
import assert from "node:assert";
import { getSum } from "./common";
import { test } from "node:test";

test("should work", () => {
  const myInput = fs
    .readFileSync(path.join(import.meta.dirname, "input.spec.txt"))
    .toString();

  const sum = getSum(myInput);

  assert.equal(sum, 11);
});
