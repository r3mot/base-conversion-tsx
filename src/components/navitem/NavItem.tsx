import { useContext, useEffect } from "react";
import { ConvertContext, ToggleContext } from "@/context";
import style from "./style.module.scss";

/**
 * Navigation Item Component
 * @param {string} name - Name of the navigation item
 * @param {string} id - Id of the navigation item
 * @returns
 */
const NavItem = ({ id, name }: INavItemProps) => {
  const { setConversion } = useContext(ConvertContext);
  const { toggle, setToggle } = useContext(ToggleContext);
  const containerStyle = `${toggle ? style.active : style.container}`;

  // Temporary until I find a better solution
  // to close the mobile menu
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        setToggle(false);
      }
    });
  }, []);

  return (
    <button className={containerStyle} onClick={() => setConversion(id)}>
      <i className={`${style.itemIcon} ${style[id]}`} />
      <span className={style.itemTitle}>
        <span className={style.shortName}>{id}</span>
        <span className={style.longName}>{name}</span>
      </span>
    </button>
  );
};

export { NavItem };
