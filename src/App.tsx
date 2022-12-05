import { useState } from "react";
import { ConvertContext, ToggleContext } from "./context";
import { Navbar, Card } from "./layouts";
import "./App.scss";

/**
 * Start of the application
 */
const App = () => {
  const [conversion, setConversion] = useState<string[]>(["", "Enter a value"]);
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
    <div className='App'>
      <ConvertContext.Provider value={convertProvider}>
        <ToggleContext.Provider value={{ toggle, setToggle }}>
          <Navbar />
        </ToggleContext.Provider>
        <Card />
      </ConvertContext.Provider>
    </div>
  );
};

export default App;
