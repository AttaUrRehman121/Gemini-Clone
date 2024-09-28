import React, { useContext } from "react";
import "../../assets/assets";
import "./MainG.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const MainG = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  // const handlekeydown = (event) => {
  //   if (event.key === "Enter") {
  //     onSent(input);
  //   }
  // };

  return (
    <div className="Main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.Atta_icon} alt="userPic" />
      </div>
      {/* // it will hide cars and greeting text when text will genrated */}
      <div className="main-container">
        {" "}
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Atta</span>
              </p>
              <p>How I can help you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest a beautiful places to see on an upcoming road trip
                </p>
                <img src={assets.compass_icon} alt="location" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning </p>
                <img src={assets.bulb_icon} alt="location" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat.</p>
                <img src={assets.message_icon} alt="location" />
              </div>
              <div className="card">
                <p>Improve the readability of following code.</p>
                <img src={assets.code_icon} alt="location" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.Atta_icon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-Data">
              <img src={assets.gemini_icon} alt="gemini_icon" />
              {/* ternory operator which means using inline jsx in react */}
              {/* this state checks if the respone is genrated or not if yes it will display the data otherwise it will show loading animation  */}
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a Prompt here"
              // onKeyDown={handlekeydown}
            />
            <div>
              <img src={assets.gallery_icon} alt="upload icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send_icon"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double check its answer
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainG;
