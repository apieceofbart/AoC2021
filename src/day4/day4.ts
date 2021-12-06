function lineToNum(line: string) {
  const nums: number[] = [];
  for (let i = 0; i < line.length; i = i + 3) {
    nums.push(parseInt(line[i] + line[i + 1]));
  }
  return nums;
}

function parseLineNumbers(line: string) {
  return line.split(",").map((x) => parseInt(x));
}

function parseInput(input: string) {
  const [numbers, ...rest] = input.split("\n");
  const boards: number[][][] = [];
  let boardIndex = -1;
  for (let i = 0; i < rest.length; i++) {
    if (i % 6 === 0) {
      boardIndex++;
      boards.push([]);
    } else {
      boards[boardIndex].push(lineToNum(rest[i]));
    }
  }
  return { boards, numbers: parseLineNumbers(numbers) };
}

function checkFoBingo(boards: number[][][]) {
  let winners = new Set<number>();
  for (let i = 0; i < boards.length; i++) {
    const board = boards[i];
    const row = checkForFullRow(board);
    if (row !== null) {
      winners.add(i);
    }
    const column = checkForFullColumn(board);
    if (column !== null) {
      winners.add(i);
    }
  }
  if (winners.size !== 0) {
    return Array.from(winners);
  }
  return null;
}

function checkForFullColumn(board: number[][]) {
  for (let i = 0; i < board[0].length; i++) {
    const column = board.map((row) => row[i]);
    if (column.every((x) => x === -1)) {
      return i;
    }
  }
  return null;
}

function checkForFullRow(board: number[][]) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if (row.every((x) => x === -1)) {
      return i;
    }
  }
  return null;
}

function fillBoard(num: number, board: number[][]) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === num) {
        board[i][j] = -1;
      }
    }
  }
}

function fillBoards(number: number, boards: number[][][]) {
  for (let b = 0; b < boards.length; b++) {
    fillBoard(number, boards[b]);
  }
}

function getSumOfAllUnmarkedNumbers(board: number[][]) {
  let sum = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== -1) {
        sum += board[i][j];
      }
    }
  }
  return sum;
}

function doTheRound(numbers: number[], boards: number[][][]) {
  for (let n = 0; n < numbers.length; n++) {
    fillBoards(numbers[n], boards);
    let winningBoard = checkFoBingo(boards);
    if (winningBoard !== null) {
      return {
        winningBoard,
        luckyNumber: numbers[n],
      };
    }
  }
  return "NO WINNERS! BOOOO";
}

function drawBoards(boards: number[][][]) {
  for (let i = 0; i < boards.length; i++) {
    const board = boards[i];
    console.log("Board " + i);
    console.log(board);
  }
}

function doTheRoundForLooosers(numbers: number[], boards: number[][][]) {
  let boardsThatDidNotWin = boards.length;
  let theWinningBoard = null;

  for (let n = 0; n < numbers.length; n++) {
    fillBoards(numbers[n], boards);
    let winningBoards = checkFoBingo(boards);
    if (winningBoards !== null) {
      boardsThatDidNotWin -= winningBoards.length;
      theWinningBoard = winningBoards[winningBoards.length - 1];
      if (boardsThatDidNotWin === 0) {
        return {
          winningBoard: theWinningBoard,
          luckyNumber: numbers[n],
          boards,
        };
      }
      if (n === numbers.length - 1) {
        return {
          winningBoard: theWinningBoard,
          luckyNumber: numbers[n],
          boards,
        };
      }
      boards = boards.filter((_, index) => !winningBoards!.includes(index));
    }
  }
  return "NO WINNERS! BOOOO";
}

// export function bingo(input: string) {
//   const { numbers, boards } = parseInput(input);
//   const result = doTheRound(numbers, boards);
//   // is is the index of the winning boards
//   if (typeof result === "string") {
//     console.log("NO WINNERS! BOOOOO");
//   } else {
//     const sum = getSumOfAllUnmarkedNumbers(boards[result.winningBoard]);
//     return sum * result.luckyNumber;
//   }
// }

export function bingoForLoosers(input: string) {
  const { numbers, boards } = parseInput(input);
  const result = doTheRoundForLooosers(numbers, boards);
  if (typeof result === "string") {
    console.log("NO WINNERS! BOOOOO");
  } else {
    const sum = getSumOfAllUnmarkedNumbers(result.boards[result.winningBoard!]);
    return sum * result.luckyNumber;
  }
}
