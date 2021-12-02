import { position, positionWithAim } from "./day2";
import * as chai from "chai";
import "mocha";
const { expect } = chai;
const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
it("should return multiplier", () => {
  expect(position(input)).to.equal(150);
});

it("should return multiplier with aim", () => {
  expect(positionWithAim(input)).to.equal(900);
});
