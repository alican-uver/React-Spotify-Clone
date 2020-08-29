import React from 'react';
import './Login.scss';
import {loginUrl} from '../../spotify/spotify';

const Login = () => {
    return (
        <div className="login">
            <img className ="login__image" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg" alt=""/> 
            <a href = {loginUrl} className ="login__button">Login with spotify</a>           
        </div>
    )
}

export default Login;
