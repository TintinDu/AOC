import fs from "fs";
import path from "path";
import { getSimilarityScore } from "./common";

const myInput = fs
  .readFileSync(path.join(import.meta.dirname, "input.txt"))
  .toString();

const sum = getSimilarityScore(myInput);

console.log(sum);
