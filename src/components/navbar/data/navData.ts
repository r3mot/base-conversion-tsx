interface INavData {
  name: string;
  id: string;
}

const navData: INavData[] = [
  {
    name: "Binary to Decimal",
    id: "bin2dec",
  },
  {
    name: "Hex to Decimal",
    id: "hex2dec",
  },
  {
    name: "Decimal to Binary",
    id: "dec2bin",
  },
  {
    name: "Hex to Binary",
    id: "hex2bin",
  },
  {
    name: "Binary to Hex",
    id: "bin2hex",
  },
  {
    name: "Decimal to Hex",
    id: "dec2hex",
  },
];

export { navData };
