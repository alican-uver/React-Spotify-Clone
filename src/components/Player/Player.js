import React from "react";
import "./Player.scss";
import Sidebar from "../SideBar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify = {spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
