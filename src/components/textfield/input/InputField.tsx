import { useContext } from "react";
import { ConvertContext } from "../../../context";
import { Label } from "../components";
import "./style.css";

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
    <div className='text-field-container input-field-container'>
      <Label text={conversion} type={"input"} />
      <input
        className='text-field input-field'
        type='text'
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export { InputField };
