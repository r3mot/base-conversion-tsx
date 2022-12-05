import React, { useContext, useEffect } from "react";
import { ConvertContext } from "@/context";
import { Conversion } from "@/conversion";
import { Label } from "@/components/label";
import { navigationData } from "@/data/navigation";
import { AriaAttributes } from "react";
import tfStyle from "../textfield.module.scss";
import style from "./style.module.css";

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
  const { conversion, setResult, input, setInput } = useContext(ConvertContext);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const result = Conversion(conversion[0], input);
      setResult(result);
    }
  };

  useEffect(() => {
    //
  }, [input]);

  return (
    <div className={containerStyle}>
      <Label text={conversion[1]} data={navigationData} />
      <input
        id='conversion-input'
        className={inputStyle}
        type='text'
        aria-label='Text input field. Type in the value you would like to convert. Press enter or space to convert the value.'
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};

export { InputField };
