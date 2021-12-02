import { deptMeasure, deptMeasure3 } from "./day1";
import * as chai from "chai";
import "mocha";
const { expect } = chai;
const input = `199
  200
  208
  210
  200
  207
  240
  269
  260
  263`;
it("should return 7 for test data", () => {
  expect(deptMeasure(input)).to.equal(7);
});

it("should return 5 for 3 depth measure", () => {
  expect(deptMeasure3(input)).to.equal(5);
});
