import { solution } from "./dayX";
import * as chai from "chai";
import "mocha";
const { expect } = chai;
const input = `hello
World`;
it("should return hello worlds", () => {
  expect(solution(input)).to.equal("hello\nWorld");
});
