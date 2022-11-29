import { useContext } from "react";
import { ToggleContext } from "../../context";
import { NavItem } from "./components";
import { navData } from "./data";
import "./style.css";

/**
 * Navigation bar component
 * @example <Navbar />
 *
 */
const Navbar = () => {
  const { toggle, setToggle } = useContext(ToggleContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div
        className={`toggle-icon ${toggle ? "close" : "open"}`}
        onClick={handleToggle}
      />
      <div className={` ${toggle ? "active" : "navbar-container"}`}>
        {navData.map((navItem) => {
          return <NavItem {...navItem} key={navItem.id} />;
        })}
      </div>
    </>
  );
};

export { Navbar };
