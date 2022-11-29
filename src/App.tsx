import { useState } from "react";
import { ConvertContext, ToggleContext } from "./context";
import { Navbar } from "./components";
import { Card } from "./components";
import "./App.css";

/**
 * Start of the application
 */
const App = () => {
  const [conversion, setConversion] = useState<string>("bin2dec");
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

  const toggleProvider = {
    toggle,
    setToggle,
  };

  return (
    <div className='App'>
      <ConvertContext.Provider value={convertProvider}>
        <ToggleContext.Provider value={toggleProvider}>
          <Navbar />
        </ToggleContext.Provider>
        <Card />
      </ConvertContext.Provider>
    </div>
  );
};

export default App;
