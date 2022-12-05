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
      aria-controls='primary-navigation'
      aria-expanded='false'>
      <span className='hidden'>Menu</span>
      <div className='mobileIcon' aria-hidden='true'></div>
    </button>
  );
};

export { MobileIcon };
