import { solution, fishRec } from "./day6";
import * as chai from "chai";
import "mocha";
const { expect } = chai;
const input = `3,4,3,1,2`;

it("should return 26 after 18 days", () => {
  expect(solution(input, 18)).to.equal(26);
});
