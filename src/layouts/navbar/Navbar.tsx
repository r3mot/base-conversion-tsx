import { navigationData } from "@/data/navigation";
import { useContext } from "react";
import { ToggleContext } from "@/context";
import { NavItem, MobileIcon } from "@/components";
import style from "./style.module.scss";

const Navbar = () => {
  const { toggle } = useContext(ToggleContext);
  const containerStyle = `${toggle ? style.active : style.container}`;

  return (
    <>
      <MobileIcon />
      <div className={style.logo} />
      <ul className={style.ul}>
        <div className={containerStyle}>
          {navigationData.map((navItem, index) => {
            return <NavItem id={navItem.id} name={navItem.name} key={index} />;
          })}
        </div>
      </ul>
    </>
  );
};

export { Navbar };
