import { readFile } from "fs";
import { join } from "path";
import { solution, solution2 } from "./day5";
const [_, __, file] = process.argv;
//npx ts-node ./src/day5/day5.exec.ts day5.data
readFile(join(__dirname, file), "utf8", (err, data) => {
  // console.log(solution(data));
  console.log(solution2(data));
});
