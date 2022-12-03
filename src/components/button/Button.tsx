import style from "./style.module.css";

/**
 * Generic Button Component
 * @see {@link IButtonProps} for more information
 * @example ```<Button name="Convert" onClick={handleClick} style?={myStyle.countButton}/>```
 */
const Button = ({ name, onClick, styles }: IButtonProps) => {
  return (
    <button className={`${styles} ${style.button}`} onClick={onClick}>
      {name}
    </button>
  );
};

export { Button };
