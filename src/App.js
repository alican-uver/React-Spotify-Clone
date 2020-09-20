import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { useDataLayerValue } from "./context/DataLayer";
import { getTokenFromUrl } from "./spotify/spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./components/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user
        })
      });

      spotify.getUserPlaylists().then(playlists => {
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists
        })
      });

      spotify.getPlaylist("37i9dQZF1DX6VdMW310YC7").then(chill_tracks => {
        dispatch({
          type: "SET_CHILL_TRACKS",
          chill_tracks
        })
      })
    }

  }, [dispatch]);

  // console.log("person", user)
  // console.log("token", token)

  return (
    <>
      {token ? <Player /> : <Login />}
    </>
  );
}

export default App;
