import { divideDecimal } from "../utility";
import { bin2hex } from "./Binary";

// Decimal to Decimal
const dec2dec = (input: string): string => {
  return input;
};

// Decimal to Binary
const dec2bin = (input: string): string => {
  let len = 16;
  let result = "";
  const dec = parseInt(input);

  while (len-- !== 0) {
    result += (dec >> len) & 1;
  }
  return result.trimStart();
};

// Decimal to Hexadecimal
// If input is negative, first convert to binary.
// Otherwise, manually convert to hex using division
const dec2hex = (input: string): string => {
  let temp = "";
  if (parseInt(input) < 0) {
    temp = dec2bin(input);
    return bin2hex(temp);
  }
  return divideDecimal(parseInt(input));
};

export { dec2bin, dec2dec, dec2hex };
