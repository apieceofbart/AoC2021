export function position(input: string) {
  type Command = "forward" | "down" | "up";
  const results = input
    .split("\n")
    .map((line) => {
      const [command, value] = line.split(" ") as [Command, string];
      const intValue = parseInt(value);
      return {
        command,
        value: intValue,
      };
    })
    .reduce(
      (acc, { command, value }) => {
        if (command === "up") {
          acc.depth -= value;
        } else if (command === "down") {
          acc.depth += value;
        } else {
          acc.horizontal += value;
        }
        return acc;
      },
      { horizontal: 0, depth: 0 }
    );
  return results.depth * results.horizontal;
}

export function positionWithAim(input: string) {
  type Command = "forward" | "down" | "up";
  const results = input
    .split("\n")
    .map((line) => {
      const [command, value] = line.split(" ") as [Command, string];
      const intValue = parseInt(value);
      return {
        command,
        value: intValue,
      };
    })
    .reduce(
      (acc, { command, value }) => {
        if (command === "up") {
          acc.aim -= value;
        } else if (command === "down") {
          acc.aim += value;
        } else {
          acc.horizontal += value;
          acc.depth += acc.aim * value;
        }
        return acc;
      },
      { horizontal: 0, depth: 0, aim: 0 }
    );
  return results.depth * results.horizontal;
}
