import { useContext } from "react";
import { ConvertContext } from "../../context";
import style from "./style.module.css";

/**
 * Navigation Item Component
 * @param {string} name - Name of the navigation item
 * @param {string} id - Id of the navigation item
 * @returns
 */
const NavItem = ({ id, name }: INavItemProps) => {
  const { setConversion } = useContext(ConvertContext);

  return (
    <button className={style.container} onClick={() => setConversion(id)}>
      <i className={`${style.itemIcon} ${style[id]}`} />
      <span className={style.itemTitle}>
        <span className={style.shortName}>{id}</span>
        <span className={style.longName}>{name}</span>
      </span>
    </button>
  );
};

export { NavItem };
