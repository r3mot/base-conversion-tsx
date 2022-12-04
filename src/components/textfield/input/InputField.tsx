import React, { useContext, useEffect, useState } from "react";
import { ConvertContext } from "@/context";
import { Label } from "@/components/label";
import tfStyle from "../textfield.module.scss";
import style from "./style.module.css";
import { navigationData } from "@/data/navigation";
import { Conversion } from "@/conversion";

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

  // Start conversion on "Enter" key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const result = Conversion(conversion, input);
      setResult(result);
    }
  };

  useEffect(() => {
    //
  }, [input]);

  return (
    <div className={containerStyle}>
      <Label text={conversion} data={navigationData} />
      <input
        className={inputStyle}
        type='text'
        placeholder='Enter a value'
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};

export { InputField };
