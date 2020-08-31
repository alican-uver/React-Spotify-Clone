import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { useDataLayerValue } from "./context/DataLayer";
import { getTokenFromUrl } from "./spotify/spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./components/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  console.log(useDataLayerValue())

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {

        dispatch({
          type: "SET_USER",
          user:user,
        })
      })

    }

    // console.log("have token", token)
  }, [dispatch]);

  console.log("person", user)
  console.log("token", token)


  return (
    <div>
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
