import { readFile } from "fs";
import { join } from "path";
import { deptMeasure, deptMeasure3 } from "./day1";
const [_, __, file] = process.argv;

readFile(join(__dirname, file), "utf8", (err, data) => {
  console.log(deptMeasure(data));
  console.log(deptMeasure3(data));
});
