import { useEffect, useState } from "react";
import { LabelMap } from "../../../utility";
import "./style.css";

interface LabelProps {
  text: string;
  type: string;
}

/**
 * Label component for TextFields
 */
const Label = ({ text, type }: LabelProps) => {
  const [labelText, setLabelText] = useState("");

  /**
   * Text comes from the parent component in the
   * form of `bin2dec` or `dec2bin`, etc.
   *
   * This function converts it to `Binary to Decimal`
   * or `Decimal to Binary`
   *
   * It's a hacky way to do it, but it works.
   * I will change this at a later date.
   */
  useEffect(() => {
    LabelMap.forEach((value, key) => {
      if (key === text) {
        if (type === "input") {
          setLabelText(value[0]);
        } else {
          setLabelText(value[1]);
        }
      }
    });
  });

  return (
    <div className='label-container'>
      <label className='label'>{labelText}</label>
    </div>
  );
};

export { Label };
