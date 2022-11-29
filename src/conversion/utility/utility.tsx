import { dec2hexMap } from "./maps";

const reverseString = (s: string): string => {
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const temp = s[i];
    s =
      s.substring(0, i) +
      s.charAt(len - i - 1) +
      s.substring(i + 1, len - i - 1) +
      temp +
      s.substring(len - i);
  }
  return s;
};

const divideDecimal = (input: number): string => {
  let remainder = 0;
  const base = 16;
  let result = "";

  while (input > 0) {
    remainder = input % base;
    input = Math.floor(input / base);
    result += dec2hexMap.get(remainder);
  }
  return reverseString(result).toUpperCase();
};

export { divideDecimal };
