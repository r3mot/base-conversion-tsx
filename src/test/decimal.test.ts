import { describe, it } from "vitest";
import { Conversion } from "@/conversion";

describe("dec2bin", () => {
  it("should convert decimal to binary", () => {
    expect(Conversion("dec2bin", "7")).toBe("111");
    expect(Conversion("dec2bin", "18")).toBe("10010");
    expect(Conversion("dec2bin", "300")).toBe("100101100");
    expect(Conversion("dec2bin", "-7")).toBe("-111");
    expect(Conversion("dec2bin", "10.10")).toBe("1010.00011001");
    expect(Conversion("dec2bin", "523.215")).toBe("1000001011.00110111");
    expect(Conversion("dec2bin", "523.215")).toBe("1000001011.00110111");
    expect(Conversion("dec2bin", "523.215.2")).toBe("Invalid input");
    expect(Conversion("dec2bin", "523a")).toBe("Invalid input");
    expect(Conversion("dec2bin", "+123")).toBe("Invalid input");
  });
});

describe("dec2hex", () => {
  it("should convert decimal to hexadecimal", () => {
    expect(Conversion("dec2hex", "7")).toBe("7");
    expect(Conversion("dec2hex", "18")).toBe("12");
    expect(Conversion("dec2hex", "300")).toBe("12C");
    expect(Conversion("dec2hex", "-7")).toBe("-7");
    expect(Conversion("dec2hex", "10.10")).toBe("A.19999999");
    expect(Conversion("dec2hex", "523.215")).toBe("20B.370A3D70");
    expect(Conversion("dec2bin", "523.215.2")).toBe("Invalid input");
    expect(Conversion("dec2bin", "523a")).toBe("Invalid input");
    expect(Conversion("dec2bin", "+123")).toBe("Invalid input");
  });
});
