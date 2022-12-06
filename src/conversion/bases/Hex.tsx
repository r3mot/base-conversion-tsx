import { dec2bin } from "./Decimal";

// Hexadecimal to Binary
const hex2bin = (input: string): string => {
  const decimal = hex2dec(input);
  const binary = dec2bin(decimal);

  return binary;
};

const hex2dec = (input: string): string => {
  const hex = input.toUpperCase();
  const hexArray = hex.split("");
  const hexArrayLength = hexArray.length;
  let decimal = 0;

  for (let i = 0; i < hexArrayLength; i++) {
    const hexChar = hexArray[i];
    const hexCharValue = parseInt(hexChar, 16);
    const hexCharValueTimes16Power =
      hexCharValue * Math.pow(16, hexArrayLength - i - 1);
    decimal += hexCharValueTimes16Power;
  }

  return decimal.toString();
};

export { hex2bin, hex2dec };
