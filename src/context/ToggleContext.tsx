/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

/**
 * Toggle context
 * @example const { toggle, setToggle } = useContext(ToggleContext);
 */
interface IToggleContext {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState = {
  toggle: false,
  setToggle: () => {},
};

const ToggleContext = createContext<IToggleContext>(defaultState);

export { ToggleContext };
