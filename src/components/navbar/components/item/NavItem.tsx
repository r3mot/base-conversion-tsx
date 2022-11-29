import { useContext } from "react";
import { ConvertContext, ToggleContext } from "../../../../context";
import "./style.css";

/**
 * Navigation item component
 * @param {INavItemProps} props
 * @see {@link INavItemProps} for more information
 *
 */
const NavItem = ({ ...props }: INavItemProps) => {
  const { setConversion } = useContext(ConvertContext);

  // Toggle mobile menu
  const { toggle, setToggle } = useContext(ToggleContext);
  const container = `nav-item-container ${toggle ? "active-item" : ""}`;

  const handleClick = () => {
    setConversion(props.id);
    setToggle(false);
  };

  return (
    <div className={`${container}`} onClick={handleClick}>
      <div className={`nav-icon ${props.id}`} />
      <div className='item-title'>
        <span className='long-name'>{props.name}</span>
        <span className='short-name'>{props.id}</span>
      </div>
    </div>
  );
};

export { NavItem };
