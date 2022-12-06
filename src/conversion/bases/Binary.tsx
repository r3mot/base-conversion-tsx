const bin2hex = (input: string): string => {
  const decimalPart = input.split(".")[1];
  let result = "";

  if (decimalPart !== undefined) {
    const decPartHex = (
      parseInt(decimalPart, 2) / Math.pow(2, decimalPart.length)
    )
      .toString(16)
      .split(".")[1];

    const intPartHex = parseInt(input.split(".")[0], 2).toString(16);
    result = intPartHex + "." + decPartHex.slice(0, 8);
  }
  // if there are decimal points, convert the binary to hexadecimal
  // and convert the decimal part to hexadecimal
  else {
    result = parseInt(input, 2).toString(16);
  }

  return result;
};

const bin2dec = (input: string): string => {
  const decimalPart = input.split(".")[1];
  let result = "";

  if (decimalPart !== undefined) {
    const decPartDec = (
      parseInt(decimalPart, 2) / Math.pow(2, decimalPart.length)
    )
      .toString(10)
      .split(".")[1];

    const intPartDec = parseInt(input.split(".")[0], 2).toString(10);
    result = intPartDec + "." + decPartDec.slice(0, 8);
  }
  // if there are decimal points, convert the binary to decimal
  // and convert the decimal part to decimal
  else {
    result = parseInt(input, 2).toString(10);
  }

  return result;
};

export { bin2hex, bin2dec };
