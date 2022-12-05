/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

/**
 * Conversion context
 * @example const { input, setInput, output, setOutput } = useContext(ConvertContext);
 */
interface IConvertContext {
  conversion: string[];
  input: string;
  result: string;
  setConversion: React.Dispatch<React.SetStateAction<string[]>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const defaultState = {
  conversion: ["bin2dec", "Binary to Decimal"],
  input: "Input",
  result: "Output",
  setConversion: () => {},
  setInput: () => {},
  setResult: () => {},
};

const ConvertContext = createContext<IConvertContext>(defaultState);

export { ConvertContext };
