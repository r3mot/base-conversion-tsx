import { InputField, OutputField, ConvertButton } from "@/components";
import style from "./style.module.scss";

const Card = () => {
  return (
    <div className={style.container}>
      <InputField />
      <OutputField />
      <ConvertButton />
    </div>
  );
};

export { Card };
