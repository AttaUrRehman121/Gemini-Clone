import React from "react";
import "../../assets/assets";
import "./MainG.css";
import { assets } from "../../assets/assets";

const MainG = () => {
  // const {onSent, recentPrompt, showResult, loading, }
  return (
    <div className="Main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="userPic" />
      </div>
      <div className="main-conatiner">
        <div className="greet">
          <p>
            <span>Hello, Atta</span>
          </p>
          <p>How I can help you?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest a beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="location" />
          </div>
          <div className="card">
            <p>Berifly summerize this concept: urban planning </p>
            <img src={assets.bulb_icon} alt="location" />
          </div>
          <div className="card">
            <p>Brainstrom team bonding activities for our work retreat.</p>
            <img src={assets.message_icon} alt="location" />
          </div>
          <div className="card">
            <p>Improve the readability of following code.</p>
            <img src={assets.code_icon} alt="location" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a Prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="upload icon" />
              <img src={assets.mic_icon} alt="mic_icom" />
              <img src={assets.send_icon} alt="send_icon" />
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
