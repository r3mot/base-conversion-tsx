// Sanitize Decimal
const sanitizeDec = (input: string) => {
  const decimalCount = (input.match(/\./g) || []).length;
  if (input.match(/^[0-9.]+$/) && decimalCount <= 1) {
    return true;
  }

  return false;
};

// Sanitize Binary
const sanitizeBin = (input: string) => {
  const decimalCount = (input.match(/\./g) || []).length;
  if (input.match(/^[0-1.]+$/) && decimalCount <= 1) {
    return true;
  }
  return false;
};

// Sanitize Hexadecimal
const sanitizeHex = (input: string) => {
  if (input.toUpperCase().match(/^[0-9A-F]+$/)) {
    return true;
  }
  return false;
};

export { sanitizeBin, sanitizeDec, sanitizeHex };
