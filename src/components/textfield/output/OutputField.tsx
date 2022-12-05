import { useContext } from "react";
import { ConvertContext } from "@/context";
import tfStyle from "../textfield.module.scss";
import style from "./style.module.scss";

const containerStyle = `${style.container} ${tfStyle.container}`;
const outputStyle = `${style.output} ${tfStyle.textField}`;

const OutputField = () => {
  const { result } = useContext(ConvertContext);

  return (
    <div className={containerStyle}>
      <label className={style.hiddenLabel} htmlFor='output' aria-hidden={true}>
        Conversion Output
      </label>
      <output className={outputStyle}>{result}</output>
    </div>
  );
};

export { OutputField };
