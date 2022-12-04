import style from "./style.module.scss";
import { useEffect, useState } from "react";

/**
 * Generic label component
 * @param {string} text - Label text
 * @param {INavData} data - id and name of the label
 */
const Label = ({ text, data }: ILabelProps) => {
  const [name, setName] = useState(text);

  const updateLabelText = () => {
    data.map((item) => {
      if (item.id === text) {
        setName(item.name);
      }
    });
  };

  useEffect(() => {
    updateLabelText();
  }, [text]);

  return (
    <div className={style.container}>
      <label className={style.label}>{name}</label>
    </div>
  );
};

export { Label };
