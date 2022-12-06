const dec2bin = (input: string) => {
  const decPart = input.split(".")[1];
  let result = "";

  if (decPart !== undefined) {
    const decPartBin = (parseInt(decPart) / Math.pow(10, decPart.length))
      .toString(2)
      .split(".")[1];

    const intPartBin = parseInt(input).toString(2);
    result = intPartBin + "." + decPartBin.slice(0, 8);
  } else {
    result = parseInt(input).toString(2);
  }

  return result;
};

const dec2hex = (input: string): string => {
  const decimalInput = parseInt(input);
  const decPart = input.split(".")[1];
  let result = "";

  if (decPart !== undefined) {
    const decPartHex = (parseInt(decPart) / Math.pow(10, decPart.length))
      .toString(16)
      .split(".")[1];

    const intPartHex = decimalInput.toString(16);
    result = intPartHex + "." + decPartHex.slice(0, 8);
  } else {
    result = decimalInput.toString(16);
  }

  return result.toUpperCase();
};
export { dec2bin, dec2hex };
