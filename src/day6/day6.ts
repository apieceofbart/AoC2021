export function solution(input: string, days: number) {
  const fish = input
    .split(",")
    .map(Number)
    .map((f) => fishRec(days + (7 - f)));
  return fish.reduce((a, b) => a + b, 0);
}

const cache: Record<number, number> = {};

export function fishRec(X: number): number {
  if (X < 8) {
    return 1;
  }
  if (cache[X]) {
    return cache[X];
  }

  const cX = fishRec(X - 7) + fishRec(X - 9);
  cache[X] = cX;
  return cX;
}
