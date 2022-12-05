import { InputField, OutputField, ConvertButton } from "@/components";
import style from "./style.module.scss";

const Card = () => {
  return (
    <div
      aria-label='box which contains an input field, output field, and a button to start the conversion'
      className={style.container}>
      <InputField />
      <OutputField />
      <ConvertButton />
    </div>
  );
};

export { Card };
