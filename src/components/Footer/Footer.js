import React from "react";
import "./Footer.scss";
import { Grid, Slider } from "@material-ui/core";
// icons
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import AirplayIcon from '@material-ui/icons/Airplay';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer-album">
          <img
            className="footer-album__image"
            src="https://i.pinimg.com/originals/ed/54/57/ed54571b47cb3246d3d827d0e8a8f860.jpg"
            alt=""
          />
          <div className="footer-album__info">
            <a href=" " className="footer-album__song-name">
              Starboy
            </a>
            <a href=" " className="footer-album__artist-name">
              The Weeknd
            </a>
          </div>
          <div className="footer-album__icons">
            <FavoriteBorderIcon />
            <VideoLabelIcon />
          </div>
        </div>
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
        <div className="footer__right-inner">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <AirplayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Footer;
