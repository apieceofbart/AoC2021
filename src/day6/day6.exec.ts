import { readFile } from "fs";
import { join } from "path";
import { solution } from "./day6";
const [_, __, file] = process.argv;
//npx ts-node ./src/day6/day6.exec.ts day6.data
readFile(join(__dirname, file), "utf8", (err, data) => {
  console.log(solution(data, 256));
});
