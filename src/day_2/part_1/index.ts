import fs from "fs";
import path from "path";
import { partOne } from "..";

const myInput = fs
  .readFileSync(path.join(import.meta.dirname, "input.txt"))
  .toString();

const toto = partOne(myInput);

console.log(toto);
