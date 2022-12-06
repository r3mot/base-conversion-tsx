import { describe, it } from "vitest";
import { Conversion } from "@/conversion";

describe("bin2dec", () => {
  it("should convert binary to decimal", () => {
    expect(Conversion("bin2dec", "101010")).toBe("42");
    expect(Conversion("bin2dec", "1001001")).toBe("73");
    expect(Conversion("bin2dec", "1001001110")).toBe("590");
    expect(Conversion("bin2dec", "1001.1001")).toBe("9.5625");
    expect(Conversion("bin2dec", "111111100111.1111101")).toBe("4071.9765625");
    expect(Conversion("bin2dec", "10110.1010")).toBe("22.625");
    expect(Conversion("bin2dec", "10110.1010.10")).toBe("Invalid input");
    expect(Conversion("bin2dec", "12110.1010")).toBe("Invalid input");
  });
});

describe("bin2hex", () => {
  it("should convert binary to hexadecimal", () => {
    expect(Conversion("bin2hex", "101010")).toBe("2A");
    expect(Conversion("bin2hex", "1001001")).toBe("49");
    expect(Conversion("bin2hex", "1001001110")).toBe("24E");
    expect(Conversion("bin2hex", "1001.1001")).toBe("9.9");
    expect(Conversion("bin2hex", "111111100111.1111101")).toBe("FE7.FA");
    expect(Conversion("bin2hex", "10110.1010")).toBe("16.A");
    expect(Conversion("bin2hex", "10110.1010.10")).toBe("Invalid input");
    expect(Conversion("bin2hex", "12110.1010")).toBe("Invalid input");
  });
});
