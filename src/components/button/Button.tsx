import style from "./style.module.scss";

/**
 * Generic Button Component
 * @see {@link IButtonProps} for more information
 * @example ```<Button name="Convert" onClick={handleClick} style?={myStyle.countButton}/>```
 */
const Button = ({ name, onClick, styles, disabled }: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${styles} ${style.button}`}
      onClick={onClick}>
      {name}
    </button>
  );
};

export { Button };
