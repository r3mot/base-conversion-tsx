import { useContext } from "react";
import { ConvertContext } from "@/context";
import { Conversion } from "@/conversion";
import { Button } from "../Button";
import { buttons } from "@/data/button";
import style from "./style.module.scss";

/**
 *  Convert Button Component
 *  Handles the conversion of the input value
 */
const ConvertButton = () => {
  const { conversion, input, setResult } = useContext(ConvertContext);

  const executeConversion = () => {
    const result = Conversion(conversion[0], input);
    setResult(result);
  };

  return (
    <div className={style.container}>
      <Button
        name={buttons.convert.name}
        styles={style.convertButton}
        onClick={executeConversion}
      />
    </div>
  );
};

export { ConvertButton };
