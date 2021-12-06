import { readFile } from "fs";
import { join } from "path";
import { solution } from "./dayX";
const [_, __, file] = process.argv;
//npx ts-node ./src/dayX/dayX.exec.ts dayX.data
readFile(join(__dirname, file), "utf8", (err, data) => {
  console.log(solution(data));
});
