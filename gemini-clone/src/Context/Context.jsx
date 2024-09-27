import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setinput] = useState(""); // to svae the input data

  const [recentPrompt, setRecentPrompt] = useState(""); // to save recent prompt
  const [PrevPrompts, setPrevPrompts] = useState([]); //. save it to store input history
  const [showResult, setShowResult] = useState(false); // hide card and display data
  const [loading, setLoading] = useState(false); //
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    // function to pass prompts and genrate results S
    await run(prompt);
  };

  const contectValue = {
    PrevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setinput,
  };
  return (
    <Context.Provider value={contectValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
