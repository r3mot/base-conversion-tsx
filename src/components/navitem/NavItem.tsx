import { useContext, useEffect } from "react";
import { ConvertContext, ToggleContext } from "@/context";
import style from "./style.module.scss";

/**
 * Navigation Item Component
 * @param {string} name - Name of the navigation item
 * @param {string} id - Id of the navigation item
 * @returns
 */
const NavItem = ({ ...props }: INavItemProps) => {
  const { setConversion } = useContext(ConvertContext);
  const { toggle, setToggle } = useContext(ToggleContext);
  const containerStyle = `${toggle ? style.buttonActive : style.button}`;

  // Temporary until I find a more "react" solution
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        setToggle(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 900) {
          setToggle(false);
        }
      });
    };
  }, []);

  const handleClick = () => {
    setConversion([props.id, props.name]);
    setToggle(false);
  };

  return (
    <li>
      <button
        className={containerStyle}
        onClick={handleClick}
        aria-label={`Convert ${props.name}`}>
        <i className={`${style.itemIcon} ${style[props.id]}`} />
        <span className={style.itemTitle}>
          <span className={style.shortName}>{props.id}</span>
          <span className={style.longName}>{props.name}</span>
        </span>
      </button>
    </li>
  );
};

export { NavItem };
