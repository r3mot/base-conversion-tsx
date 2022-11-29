const alertMessage = (type: string) => {
  alert("Not a valid " + type + " value");
};

// Sanitize Decimal
const sanitizeDec = (input: string) => {
  if (!isNaN(parseInt(input))) {
    return true;
  }
  alertMessage("decimal");
  return false;
};

// Sanitize Binary
const sanitizeBin = (input: string) => {
  let isBinary = false;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "0" || input[i] == "1") {
      isBinary = true;
    } else {
      isBinary = false;
      break;
    }
  }

  if (isBinary == false) {
    alertMessage("binary");
    return false;
  }
  return true;
};

// Sanitize Hexadecimal
const sanitizeHex = (input: string) => {
  const hex = parseInt(input, 16);
  if (hex.toString(16) === input.toLowerCase()) {
    return true;
  }

  alertMessage("hexadecimal");
  return false;
};

export { sanitizeBin, sanitizeDec, sanitizeHex };
