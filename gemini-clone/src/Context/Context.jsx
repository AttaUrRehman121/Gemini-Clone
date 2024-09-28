import { createContext, useState } from "react";
import run from "../config/gemini";
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const deplaypara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    //  this if loop will work whem prompt will access from recent prompts

    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      // responess = await run(input);
      // setRecentPrompt(input);

      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);

      response = await run(input);
    }

    // setRecentPrompt(input);
    // setPrevPrompt((prev) => [...prev, input]);
    // const response = await run(input);

    //  this for loop and if else will remove the ** starting and ending from text replaces it with bold text
    let responseArray = response.split("**");
    let newResponse = " ";
    let i;
    for (i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newresponse2 = newResponse.split("*").join("</b>");

    let newResponseArray = newresponse2.split(" ");
    // for (let i = 0; i < newResponseArray.length; i++) {
    //   const nextWord = newResponseArray[i];
    //   deplaypara(i, nextWord + " ");
    // }

    newResponseArray.map((word, index) => {
      deplaypara(index, word + " ");
    });
    setLoading(false);
    setInput("");
  };

  const ContextValue = {
    input,
    onSent,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    newChat,
  };
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
