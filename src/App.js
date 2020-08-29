import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./spotify/spotify";

function App() {
  const [token, setToken] = useState(null);
  console.log(getTokenFromUrl());

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log(" have token ", token);
  }, []);

  return (
    <div>
        {token ? <h1> I am in</h1> : <Login />}
    </div>
  );
}

export default App;
