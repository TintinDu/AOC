import fs from "fs";
import path from "path";
import { getSum } from "./common";

const myInput = fs
  .readFileSync(path.join(import.meta.dirname, "input.txt"))
  .toString();

const sum = getSum(myInput);

console.log(sum);
