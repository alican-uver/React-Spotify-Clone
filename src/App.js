import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { useDataLayerValue } from "./context/DataLayer";
import { getTokenFromUrl } from "./spotify/spotify";
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log("person", user)
      })

    }

    console.log("have token", token)

  }, []);

  return (
    <div>
      {token ? <h1> I am in</h1> : <Login />}
    </div>
  );
}

export default App;
