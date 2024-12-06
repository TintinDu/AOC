import fs from "fs";
import path from "path";
import { partTwo } from "..";

const myInput = fs
  .readFileSync(path.join(import.meta.dirname, "input.txt"))
  .toString();

const result = partTwo(myInput);

console.log(result);
