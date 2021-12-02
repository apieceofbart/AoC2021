import { readFile } from "fs";
import { join } from "path";
import { position, positionWithAim } from "./day2";
const [_, __, file] = process.argv;
// npx ts-node ./src/day2/day2.exec.ts day2.data
readFile(join(__dirname, file), "utf8", (err, data) => {
  console.log(position(data));
  console.log(positionWithAim(data));
});
