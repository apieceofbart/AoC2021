function toCoords(line: string) {
  const [x, y] = line.split(",");
  return { x: parseInt(x), y: parseInt(y) };
}

function parseLine(line: string) {
  const [from, to] = line.split(" -> ");
  return {
    x1: toCoords(from).x,
    y1: toCoords(from).y,
    x2: toCoords(to).x,
    y2: toCoords(to).y,
  };
}

type Cords = ReturnType<typeof parseLine>;

function getPoints(cords: Cords) {
  const points = [];
  if (cords.x1 === cords.x2) {
    let from = Math.min(cords.y1, cords.y2);
    let to = Math.max(cords.y1, cords.y2);
    for (let y = from; y <= to; y++) {
      points.push({ x: cords.x1, y });
    }
  } else if (cords.y1 === cords.y2) {
    let from = Math.min(cords.x1, cords.x2);
    let to = Math.max(cords.x1, cords.x2);
    for (let x = from; x <= to; x++) {
      points.push({ x, y: cords.y1 });
    }
  }

  return points;
}

function getPoints2(cords: Cords) {
  const points = [];
  if (cords.x1 === cords.x2 || cords.y1 === cords.y2) {
    return getPoints(cords);
  } else {
    if (cords.x1 <= cords.x2) {
      if (cords.y1 <= cords.y2) {
        let xC = cords.x1,
          yC = cords.y1;
        // console.log(cords);
        while (xC <= cords.x2 && yC <= cords.y2) {
          // console.log("xC", xC, "yC", yC);

          points.push({ x: xC, y: yC });
          xC++;
          yC++;
        }
      } else {
        let xC = cords.x1,
          yC = cords.y1;
        while (xC <= cords.x2 && yC >= cords.y2) {
          points.push({ x: xC, y: yC });
          xC++;
          yC--;
        }
      }
    } else {
      if (cords.y1 <= cords.y2) {
        let xC = cords.x1,
          yC = cords.y1;
        while (xC >= cords.x2 && yC <= cords.y2) {
          points.push({ x: xC, y: yC });
          xC--;
          yC++;
        }
      } else {
        let xC = cords.x1,
          yC = cords.y1;
        while (xC >= cords.x2 && yC >= cords.y2) {
          points.push({ x: xC, y: yC });
          xC--;
          yC--;
        }
      }
    }
  }

  return points;
}

export function solution(input: string) {
  const cords = input.split("\n").map(parseLine);
  const grid: number[][] = new Array(1000)
    .fill(0)
    .map(() => new Array(1000).fill(0));
  cords
    .map(getPoints)
    .flat()
    .forEach((point) => {
      grid[point.x][point.y] += 1;
    });

  let counter = 0;
  for (let x = 0; x < 1000; x++) {
    for (let y = 0; y < 1000; y++) {
      if (grid[x][y] > 1) {
        counter++;
      }
    }
  }
  return counter;
}
export function solution2(input: string) {
  const cords = input.split("\n").map(parseLine);
  const grid: number[][] = new Array(1000)
    .fill(0)
    .map(() => new Array(1000).fill(0));

  cords
    .map(getPoints2)
    .flat()
    .forEach((point) => {
      grid[point.x][point.y] += 1;
    });

  let counter = 0;
  for (let x = 0; x < 1000; x++) {
    for (let y = 0; y < 1000; y++) {
      if (grid[x][y] > 1) {
        counter++;
      }
    }
  }
  // drawGrid(grid);
  return counter;
}

function drawGrid(grid: number[][]) {
  for (let x = 0; x < 10; x++) {
    let row = "";
    for (let y = 0; y < 10; y++) {
      row += grid[y][x] ? grid[y][x] : ".";
    }
    console.log(row);
  }
}
