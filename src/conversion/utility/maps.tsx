const dec2hexMap = new Map<number, string>([
  [0, "0"],
  [1, "1"],
  [2, "2"],
  [3, "3"],
  [4, "4"],
  [5, "5"],
  [6, "6"],
  [7, "7"],
  [8, "8"],
  [9, "9"],
  [10, "A"],
  [11, "B"],
  [12, "C"],
  [13, "D"],
  [14, "E"],
  [15, "F"],
]);

const hex2decMap = new Map<string, number>([
  ["0", 0],
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["A", 10],
  ["B", 11],
  ["C", 12],
  ["D", 13],
  ["E", 14],
  ["F", 15],
]);

const bin2hexMap = new Map<string, string>([
  ["0000", "0"],
  ["0001", "1"],
  ["0010", "2"],
  ["0011", "3"],
  ["0100", "4"],
  ["0101", "5"],
  ["0110", "6"],
  ["0111", "7"],
  ["1000", "8"],
  ["1001", "9"],
  ["1010", "A"],
  ["1011", "B"],
  ["1100", "C"],
  ["1101", "D"],
  ["1110", "E"],
  ["1111", "F"],
]);

const hex2binMap = new Map<string, string>([
  ["0", "0000"],
  ["1", "0001"],
  ["2", "0010"],
  ["3", "0011"],
  ["4", "0100"],
  ["5", "0101"],
  ["6", "0110"],
  ["7", "0111"],
  ["8", "1000"],
  ["9", "1001"],
  ["A", "1010"],
  ["B", "1011"],
  ["C", "1100"],
  ["D", "1101"],
  ["E", "1110"],
  ["F", "1111"],
]);

export { dec2hexMap, hex2decMap, bin2hexMap, hex2binMap };
