import { useContext } from "react";
import { ToggleContext } from "@/context";
import "./style.css";

const MobileIcon = () => {
  const { toggle, setToggle } = useContext(ToggleContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <button
      onClick={handleToggle}
      className='menuToggle'
      aria-controls='mobile-navigation'
      aria-expanded={toggle}>
      <span className='hidden'>Menu</span>
      <div className='mobileIcon' aria-hidden={!toggle}></div>
    </button>
  );
};

export { MobileIcon };
