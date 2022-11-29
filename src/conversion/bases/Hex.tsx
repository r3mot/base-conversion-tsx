import { dec2bin } from "./Decimal";

// Hexadecimal to Binary
const hex2bin = (input: string): string => {
  const decimal = hex2dec(input);
  const binary = dec2bin(decimal);

  return binary;
};

// Hexadecimal to Decimal
//TODO: fix this
const hex2dec = (input: string): string => {
  return parseInt(input, 16).toString();
  //   var result = 0;
  //   var power = input.length - 1;

  //   for (let i = 0; i < input.length; i++) {
  //     console.log("input:: ", input[i]);
  //     var decimal = hex2decMap.get(input[i])!;
  //     result += decimal * Math.pow(16, power);
  //     power--;
  //   }

  //   return result.toString();
};

// Hexadecimal to Hexadecimal
const hex2hex = (input: string): string => {
  return input;
};

export { hex2bin, hex2dec, hex2hex };
