import React from 'react';
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
    return (
        <div className="login">
          <img
             src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-horizontal-white-20.png"
             alt = "Spotify Logo"
          />
          <a href={loginUrl}>LOGIN WITH SPOTIFY</a>   
        </div>
      );
  }
export default Login;
