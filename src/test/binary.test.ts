import { describe, it } from "vitest";
import { Conversion } from "@/conversion";

describe("bin2dec", () => {
  it("should convert binary to decimal", () => {
    expect(Conversion("bin2dec", "1010")).toBe("10");
    expect(Conversion("bin2dec", "11001010110")).toBe("1622");
    expect(Conversion("bin2dec", "1011101010")).toBe("746");
    expect(Conversion("bin2dec", "110200000000")).toBe("Invalid input");
  });
});

describe("bin2hex", () => {
  it("should convert binary to hexadecimal", () => {
    expect(Conversion("bin2hex", "101010")).toBe("2A");
    expect(Conversion("bin2hex", "1001001")).toBe("49");
    expect(Conversion("bin2hex", "1001001110")).toBe("24E");
  });
});
