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
      <ul
        id='navbar'
        className={containerStyle}
        aria-label='Sidebar for conversion buttons. Select an item to change the conversion type'>
        {navigationData.map((navItem) => {
          return <NavItem {...navItem} key={navItem.id} />;
        })}
      </ul>
    </>
  );
};

export { Navbar };
