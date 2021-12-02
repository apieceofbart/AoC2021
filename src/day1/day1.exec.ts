import { readFile } from "fs";
import { join } from "path";
import { deptMeasure, deptMeasure3 } from "./day1";
const [_, __, file] = process.argv;
//npx ts-node ./src/day1/day1.exec.ts day1.data
readFile(join(__dirname, file), "utf8", (err, data) => {
  console.log(deptMeasure(data));
  console.log(deptMeasure3(data));
});
