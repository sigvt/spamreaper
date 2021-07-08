function bonafideMod(i: number, j: number) {
  return ((i % j) + j) % j;
}

function suffixArray(input: string): number[] {
  const charArr = Array.from(input).map((v, i) => [v, i]) as [string, number][];
  charArr.sort((a, b) => (a[0] > b[0] ? 1 : -1));
  return charArr.map((r) => r[1]);
}

function bwt(input: string) {
  const ref = suffixArray(input);
  return ref.map((x) => input[bonafideMod(x - 1, input.length)]).join("");
}

// Popped out from GitHub Copilot (wow)
function rle(input: string) {
  const compressed = [];
  let count = 1;
  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      compressed.push(input[i - 1] + count.toString());
      count = 1;
    }
  }
  compressed.push(input[input.length - 1] + count.toString());
  return compressed.join("");
}

// the bigger the number, the more likely it is to be spam.
// judging it around 0.5 will give you a reasonably good result.
export function sentenceComplexityScore(input: string) {
  const bwt2 = bwt(bwt(input));
  const rleStr = rle(bwt2);
  const score = rleStr.length / 2;
  return -1 * Math.log(score / input.length);
}

export function concatinatedScore(inputs: string[]) {
  return sentenceComplexityScore(inputs.join(""));
}

export function isSpam(inputs: string[], threshold: number = 0.65) {
  const score = concatinatedScore(inputs);
  return score > threshold;
}
