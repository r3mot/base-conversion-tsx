import { describe, it } from "vitest";
import { Conversion } from "@/conversion";

describe("hexadecimal conversions", () => {
  it("converts hexadecimal to decimal", () => {
    expect(Conversion("hex2dec", "af")).toBe("175");
    expect(Conversion("hex2dec", "af.10")).toBe("175");
    expect(Conversion("hex2dec", "ffff123af")).toBe("68718502831");
    expect(Conversion("hex2dec", "ff.632")).toBe("255");
    expect(Conversion("hex2dec", "af.10.10")).toBe("Invalid input");
    expect(Conversion("hex2dec", "g")).toBe("Invalid input");
  });
  it("converts hexadecimal to binary", () => {
    expect(Conversion("hex2bin", "af")).toBe("10101111");
    expect(Conversion("hex2bin", "af.10")).toBe("10101111.10000");
    expect(Conversion("hex2bin", "ffff123af")).toBe(
      "111111111111111100010010001110101111"
    );
    expect(Conversion("hex2bin", "ff.a")).toBe("11111111.1010");
    expect(Conversion("hex2bin", "af.10.10")).toBe("Invalid input");
    expect(Conversion("hex2bin", "g")).toBe("Invalid input");
  });
});
