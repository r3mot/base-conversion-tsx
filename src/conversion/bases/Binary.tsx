import { bin2hexMap } from "../utility/maps";

// binary to hexadecimal conversion
const bin2hex = (input: string): string => {
  let blockWidth = 4;
  let result = "";

  // ensures each block will contain 4 bits
  while (input.length % 4 != 0) {
    input = "0" + input;
  }

  // seperate the binary string into 4 bit blocks
  for (let i = 0; i < input.length; i++) {
    const block = input.substring(i, blockWidth);
    if (block != "0000") {
      result += bin2hexMap.get(block);
    }
    blockWidth += 4;
    i += 3;
  }

  return result;
};

// binary to binary conversion
const bin2bin = (input: string): string => {
  return input;
};

// binary to decimal
const bin2dec = (input: string): string => {
  let decimal = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[input.length - (i + 1)] === "1") {
      decimal += 2 ** i;
    }
  }
  return decimal.toString();
};

export { bin2hex, bin2bin, bin2dec };
