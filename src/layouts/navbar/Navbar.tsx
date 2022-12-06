import { navigationData } from "@/data/navigation";
import { useContext } from "react";
import { ToggleContext } from "@/context";
import { NavItem } from "@/components";
import style from "./style.module.scss";

const Navbar = () => {
  const { toggle } = useContext(ToggleContext);
  const containerStyle = `${toggle ? style.active : style.container}`;

  return (
    <ul className={containerStyle} aria-label='conversion type buttons'>
      {navigationData.map((navItem) => {
        return <NavItem {...navItem} key={navItem.id} />;
      })}
    </ul>
  );
};

export { Navbar };
