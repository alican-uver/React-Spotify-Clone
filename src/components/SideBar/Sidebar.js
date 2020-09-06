import React from "react";
import "./Sidebar.scss";
import spotifyLogo from "../../images/logo.png";
import SidebarOption from "../SidebarOption/SidebarOption";
// Icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../context/DataLayer";

const Sidebar = () => {
  const { playlists } = useDataLayerValue();

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img className="sidebar__logo" src={spotifyLogo} alt="spotify-logo" />
        <h2 className="sidebar__logo-text">spotify</h2>
      </div>
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">playlists</strong>
      <hr />
      <div className="sidebar__playlists">
      {
        playlists?.items?.map((playlist, index) => {
          return (
            <SidebarOption key = {index} title = {playlist.name} />
          )
        }) 
      }
      </div>
    </div>
  );
};

export default Sidebar;
