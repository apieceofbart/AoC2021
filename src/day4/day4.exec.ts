import { readFile } from "fs";
import { join } from "path";
import { bingoForLoosers } from "./day4";
const [_, __, file] = process.argv;
//npx ts-node ./src/day4/day4.exec.ts day4.data
readFile(join(__dirname, file), "utf8", (err, data) => {
  // console.log(bingo(data));
  console.log(bingoForLoosers(data));
});
