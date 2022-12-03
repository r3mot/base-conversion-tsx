import { describe, it } from "vitest";
import { Conversion } from "@/conversion";

describe("hexadecimal conversions", () => {
  it("converts hexadecimal to decimal", () => {
    expect(Conversion("hex2dec", "AF")).toBe("175");
  });
  it("converts hexadecimal to binary", () => {
    expect(Conversion("hex2bin", "EF")).toBe("0000000011101111");
  });
});
