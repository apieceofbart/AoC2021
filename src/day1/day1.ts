export function deptMeasure(input: string): number {
  return input
    .split("\n")
    .map((x) => parseInt(x))
    .reduce(
      (acc, curr) => {
        if (curr > acc.previous) {
          return {
            previous: curr,
            measurements: acc.measurements + 1,
          };
        }
        return {
          previous: curr,
          measurements: acc.measurements,
        };
      },
      { previous: +Infinity, measurements: 0 }
    ).measurements;
}

export function deptMeasure3(input: string) {
  return input
    .split("\n")
    .map((x) => parseInt(x))
    .reduce(
      (acc, curr, index) => {
        const currentSum = curr + acc.oneBehind + acc.twoBehind;
        const toReturn = {
          oneBehind: curr,
          twoBehind: acc.oneBehind,
          previousSum: index < 2 ? acc.previousSum : currentSum,
          measurements: acc.measurements,
        };
        if (currentSum > acc.previousSum) {
          toReturn.measurements = acc.measurements + 1;
        }
        return toReturn;
      },
      {
        oneBehind: 0,
        twoBehind: 0,
        previousSum: +Infinity,
        measurements: 0,
      }
    ).measurements;
}
