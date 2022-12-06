// Hexadecimal to Binary
const hex2bin = (input: string): string => {
  const [beforePoint, afterPoint] = input.split(".");
  const binaryBeforePoint = parseInt(beforePoint, 16).toString(2);
  const binaryAfterPoint = parseInt(afterPoint, 16).toString(2);

  if (input.includes(".")) {
    return `${binaryBeforePoint}.${binaryAfterPoint}`;
  } else {
    return binaryBeforePoint;
  }
};

const hex2dec = (input: string): string => {
  return parseInt(input, 16).toString(10);
};

export { hex2bin, hex2dec };
