import style from "./style.module.scss";

interface Label {
  text: string;
}
/**
 * Generic label component
 * @param {string} text - Label text
 */
const Label = ({ text }: Label) => {
  return (
    <div className={style.container}>
      <label className={style.label}>{text}</label>
    </div>
  );
};

export { Label };
