/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext, useState, useEffect } from "react";
import { ConvertContext } from "../../../context";
import { Label } from "../components";
import "./style.css";

/* This file will likely change. Most of this is hacky and needs to be refactored */

/**
 * OutputFild Component
 * It renders the output field for the application
 * It also renders the label for the output field
 *
 * - {@link ConvertContext}
 */
const OutputField = () => {
  const { result, conversion } = useContext(ConvertContext);
  const [show, setShow] = useState(false);
  const [copy, setCopy] = useState(true);

  const mouseEnteredField = () => {
    setShow(!show);
    setCopy(true);
  };

  /*
   * This function is used to copy the output
   * to the clipboard
   */
  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopy(false);
  };

  useEffect(() => {}, [copy]);

  return (
    <div className='text-field-container output-field-container'>
      <Label text={conversion} type={"output"} />
      <output
        className='text-field output-field'
        onMouseOver={mouseEnteredField}
        onMouseLeave={mouseEnteredField}
        onClick={handleCopy}>
        {result}
      </output>
      <div className={`${show ? "hover-text" : "hide-text"}`}>
        {copy ? "Click to copy" : "Copied to clipboard"}
      </div>
    </div>
  );
};

export { OutputField };
