import style from "./style.module.scss";

/**
 * Generic label component
 * @param {string} text - Label text
 */
const Label = ({ text }: ILabelProps) => {
  return (
    <div className={style.container}>
      <label aria-label='label' className={style.label}>
        {text}
      </label>
    </div>
  );
};

export { Label };
