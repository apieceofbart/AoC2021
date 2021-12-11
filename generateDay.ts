import { mkdirSync, readFile, writeFileSync } from "fs";
import { join } from "path";

const [_, __, day] = process.argv;

const getDayXTemplate = () => `export function solution(input: string) {
    return input;
  }
`;

const getDayXTestTemplate = (
  day: string
) => `import { solution } from "./day${day}";
import * as chai from "chai";
import "mocha";
const { expect } = chai;
const input = \`hello
World\`;
it("should return hello worlds", () => {
  expect(solution(input)).to.equal("hello\\nWorld");
});
`;
const getDayXExecTemplate = (day: string) => `import { readFile } from "fs";
import { join } from "path";
import { solution } from "./day${day}";
const [_, __, file] = process.argv;
//npx ts-node ./src/day${day}/day${day}.exec.ts day${day}.data
readFile(join(__dirname, file), "utf8", (err, data) => {
  console.log(solution(data));
});
`;

mkdirSync(`./src/day${day}`);
writeFileSync(`./src/day${day}/day${day}.ts`, getDayXTemplate());
writeFileSync(`./src/day${day}/day${day}.data`, "");
writeFileSync(`./src/day${day}/day${day}.test.ts`, getDayXTestTemplate(day));
writeFileSync(`./src/day${day}/day${day}.exec.ts`, getDayXExecTemplate(day));
