import React from "react";
import "./SingleSong.scss";

const SingleSong = ({ songInfo, index }) => {
  const { track } = songInfo;

  const transDuration = () => {
    let msDuration = track.duration_ms;
    var minutes = Math.floor(msDuration / 60000);
    var seconds = ((msDuration % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  };

  console.log(track);
  return (
    <div className="track">
      <div className="track__index"> {index + 1} </div>
      <div className="track__details">
        <img className="track__image" src={track.album.images[2].url} alt="" />
        <div>
          <div className="track__name"> {track.name} </div>
          <div className="track__artists">
            {track.artists
              .map((track) => (
                <a href={track.uri} key={track.id} className="track__artist underline">
                  {track.name}
                </a>
              ))
              .reduce((prev, curr) => [prev, ", ", curr])}
          </div>
        </div>
      </div>
      <div className="track__album-name">{track.album.name}</div>
      <div className="track__duration">{transDuration()}</div>
    </div>
  );
};

export default SingleSong;
