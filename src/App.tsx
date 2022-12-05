import { useState } from "react";
import { ConvertContext, ToggleContext } from "./context";
import { MobileIcon } from "./components";
import { Navbar, Card } from "./layouts";
import style from "./App.module.scss";

/**
 * Start of the application
 */
const App = () => {
  const [conversion, setConversion] = useState<string[]>([
    "bin2dec",
    "Binary to Decimal",
  ]);
  const [input, setInput] = useState<string>("1010");
  const [result, setResult] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const convertProvider = {
    conversion,
    setConversion,
    input,
    setInput,
    result,
    setResult,
  };

  return (
    <div className={style.App}>
      <ConvertContext.Provider value={convertProvider}>
        <div className={style.logo} />
        <ToggleContext.Provider value={{ toggle, setToggle }}>
          <MobileIcon />
          <Navbar />
        </ToggleContext.Provider>
        <Card />
      </ConvertContext.Provider>
    </div>
  );
};

export default App;
