import { useContext } from "react";
import { ConvertContext } from "../../../context";
import { Label } from "../../label";
import style from "./style.module.css";
import tfStyle from "../textfield.module.css";

const containerStyle = `${style.container} ${tfStyle.container}`;
const outputStyle = `${style.output} ${tfStyle.textField}`;

const OutputField = () => {
  const { result, conversion } = useContext(ConvertContext);

  return (
    <div className={containerStyle}>
      <Label text={conversion} />
      <output className={outputStyle}>{result}</output>
    </div>
  );
};

export { OutputField };
