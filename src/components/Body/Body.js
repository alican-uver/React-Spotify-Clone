import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../../context/DataLayer";
import Header from "../Header/Header";
import "./Body.scss";

const Body = ({ spotify }) => {
  const [{ chill_tracks }] = useDataLayerValue();
  console.log(chill_tracks);
  return (
    <div className="body">
      <div className="body__top">
        <Header spotify={spotify} />
        <div className="body__content">
          <img
            className="body__playlist-image"
            src={chill_tracks?.images[0].url}
            alt=""
          />
          <div className="body__playlist-info">
            <div className="playlist">
              <strong className="playlist__root">PLAYLIST</strong>
              <h2 className="playlist__name">Chill Tracks</h2>
              <p
                className="playlist__description"
                dangerouslySetInnerHTML={{ __html: chill_tracks?.description }}
              />
              <div className="playlist__time-props">
                <strong className="playlist__root underline">Spotify</strong>
                <span className="playlist__like dot">2.989.921 like</span>
                <span className="playlist__total-min dot">6h 38 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__icon body__icon--big scale" />
          <Favorite className="body__icon" />
          <MoreHoriz className="body__icon body__icon--grey" />
        </div>
        {/* playlist songs */}
        {
            chill_tracks?.tracks?.items?.map(track => {
                return (
                    <p>{track.track.name} </p>
                )
            })
        }
      </div>
    </div>
  );
};

export default Body;
