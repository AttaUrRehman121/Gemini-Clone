import React, { useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
const sidebar = () => {
  const [extended, setExtended] = useState(false); // useState to show and remove text of icons

  return (
    <div className="SideBar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="menu"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="more" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entery">
              <img src={assets.message_icon} alt="message" />
              <p>what is react ...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entery">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entery">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entery">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
