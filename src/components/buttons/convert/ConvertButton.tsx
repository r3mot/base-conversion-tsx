import { useContext } from "react";
import { ConvertContext } from "../../../context";
import { Conversion } from "../../../conversion";
import { Button } from "../Button";
import { buttonData } from "../data";
import "./style.css";

const Props = {
  id: buttonData.convertbtn.lower,
  name: buttonData.convertbtn.upper,
};

/**
 * This button performs the base conversion.
 * If the input is invalid, it displays 'Invalid input'.
 * Otherwise, it displays the result of the conversion.
 */
const ConvertButton = () => {
  const { conversion, input, setResult } = useContext(ConvertContext);

  const convert = () => {
    const result = Conversion(conversion, input);
    setResult(result);
  };

  return <Button {...Props} onClick={convert} />;
};

export { ConvertButton };
