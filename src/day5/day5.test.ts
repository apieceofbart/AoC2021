import { solution, solution2 } from "./day5";
import * as chai from "chai";
import "mocha";
const { expect } = chai;
const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;
// it("should return hello worlds", () => {
//   expect(solution(input)).to.equal(5);
// });

it("should return hello worlds", () => {
  expect(solution2(input)).to.equal(12);
});
