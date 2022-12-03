import { describe, it } from "vitest";
import { Conversion } from "@/conversion";

describe("dec2bin", () => {
  it("should convert decimal to binary", () => {
    expect(Conversion("dec2bin", "7")).toBe("0000000000000111");
    expect(Conversion("dec2bin", "18")).toBe("0000000000010010");
    expect(Conversion("dec2bin", "300")).toBe("0000000100101100");
    expect(Conversion("dec2bin", "-7")).toBe("1111111111111001");
  });
});

describe("dec2hex", () => {
  it("should convert decimal to hexadecimal", () => {
    expect(Conversion("dec2hex", "42")).toBe("2A");
    expect(Conversion("dec2hex", "-42")).toBe("FFD6");
    expect(Conversion("dec2hex", "495")).toBe("1EF");
  });
});
