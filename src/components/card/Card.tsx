import { OutputField, InputField } from "../textfield";
import { ConvertButton } from "../buttons";
import "./style.css";

/**
 * Card component for the application.
 *
 * It renders the :
 * - {@link InputField}
 * - {@link OutputField}
 * - {@link ConvertButton}
 *
 */
const Card = () => {
  return (
    <div className='card-container'>
      <InputField />
      <OutputField />
      <ConvertButton />
    </div>
  );
};

export { Card };
