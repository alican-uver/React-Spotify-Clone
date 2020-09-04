import React from "react";
import "./Footer.scss";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>Album song details</p>
      </div>
      <div className="footer__center">
        <div className="player-controls">
          <div className="player-controls__buttons">
            <ShuffleIcon className="control-button control-button__green" />
            <SkipPreviousIcon className="control-button control-button__green" />
            <PlayCircleOutlineIcon className="control-button control-button__green control-button__green--scale" />
            <SkipNextIcon className="control-button buttons-icon" />
            <RepeatIcon className="control-button control-button__green" />
          </div>
          <div className="player-controls__bar">
            <span>1.29</span>
            <input type="range" className="range-bar" />
            <span>3.42</span>
          </div>
        </div>
      </div>
      <div className="footer__right">
        <p>Volume Controls</p>
      </div>
    </div>
  );
};

export default Footer;
