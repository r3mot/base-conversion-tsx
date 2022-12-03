import { useContext } from "react";
import { ConvertContext } from "../../../context";
import { Label } from "../../label";
import style from "./style.module.css";
import tfStyle from "../textfield.module.css";

const containerStyle = `${style.container} ${tfStyle.container}`;
const inputStyle = `${style.input} ${tfStyle.textField}`;

/**
 * InputField Component
 * It renders the input field for the application
 * It also renders the label for the input field
 *
 * - {@link ConvertContext}
 */
const InputField = () => {
  const { setInput, conversion } = useContext(ConvertContext);

  return (
    <div className={containerStyle}>
      <Label text={conversion} />
      <input
        className={inputStyle}
        type='text'
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export { InputField };
