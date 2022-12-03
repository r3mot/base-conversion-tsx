import { navigationData } from "../../data/navigation";
import { NavItem } from "../../components/navitem";
import style from "./style.module.css";

const Navbar = () => {
  return (
    <ul className={style.ul}>
      <div className={style.container}>
        {navigationData.map((navItem, index) => {
          return <NavItem {...navItem} index={index + 1} key={index} />;
        })}
      </div>
    </ul>
  );
};

export { Navbar };
