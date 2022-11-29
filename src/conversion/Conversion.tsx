import { bin2dec, bin2hex } from "./bases";
import { dec2bin, dec2hex } from "./bases";
import { hex2bin, hex2dec } from "./bases";
import { sanitizeBin, sanitizeDec, sanitizeHex } from "./utility";

/**
 * Performs a conversion from one base to another.
 *
 * @param conversion The conversion to perform.
 * @param input The input to convert.
 * @returns The result of the conversion.
 */
const Conversion = (conversion: string, input: string): string => {
  let validInput = false;

  /**
   * Sanitize user input
   */
  switch (conversion) {
    case "bin2dec":
      validInput = sanitizeBin(input);
      break;
    case "bin2hex":
      validInput = sanitizeBin(input);
      break;
    case "dec2bin":
      validInput = sanitizeDec(input);
      break;
    case "dec2hex":
      validInput = sanitizeDec(input);
      break;
    case "hex2bin":
      validInput = sanitizeHex(input);
      break;
    case "hex2dec":
      validInput = sanitizeHex(input);
      break;
  }

  /**
   * Perform conversion if input is valid
   * Otherwise, return 'Invalid input'
   */
  if (validInput) {
    switch (conversion) {
      case "bin2dec":
        return bin2dec(input);
      case "bin2hex":
        return bin2hex(input);
      case "dec2bin":
        return dec2bin(input);
      case "dec2hex":
        return dec2hex(input);
      case "hex2bin":
        return hex2bin(input);
      case "hex2dec":
        return hex2dec(input);
    }
  }
  return "Invalid input";
};

export { Conversion };
